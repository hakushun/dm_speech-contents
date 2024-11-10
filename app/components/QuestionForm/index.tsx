'use client';

import { useActionState, useEffect, useState } from 'react';
import styles from './index.module.css';
import { TextWithRuby } from '../TextWithRuby';

type Props = {
  children: React.ReactNode;
};

async function submit(_: null, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const answers: { [s: string]: FormDataEntryValue } = {};
  for (const [name, value] of formData) {
    answers[name] = value;
  }
  console.log(answers);
  window.alert('回答を受け付けました');
  return null;
}

export function QuestionForm({ children }: Props) {
  const [paddingBottom, setPaddingBottom] = useState(0);
  const [, action, isPending] = useActionState(submit, null);

  useEffect(() => {
    setPaddingBottom(window.innerHeight / 2);
  }, []);

  return (
    <form action={action} className={styles.form} style={{ paddingBottom: `${paddingBottom}px` }}>
      {children}
      <div className={styles.action}>
        <button type="submit" className={styles.submit} disabled={isPending}>
          {isPending ? (
            <TextWithRuby texts={[{ text: '送信中', ruby: 'そうしんちゅう' }]} />
          ) : (
            <TextWithRuby
              texts={[
                { text: '回答', ruby: 'かいとう' },
                { text: 'を', ruby: '' },
                { text: '送信', ruby: 'そうしん' },
                { text: 'する', ruby: '' },
              ]}
            />
          )}
        </button>
      </div>
    </form>
  );
}
