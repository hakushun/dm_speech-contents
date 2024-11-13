'use client';

import { useActionState, useEffect, useState } from 'react';
import styles from './index.module.css';
import { TextWithRuby } from '../TextWithRuby';
import { submit } from './action';

type Props = {
  children: React.ReactNode;
};

export function QuestionForm({ children }: Props) {
  const [paddingBottom, setPaddingBottom] = useState(0);
  const [, action, isPending] = useActionState(submit, null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === 'Enter') e.currentTarget.requestSubmit();
  };

  useEffect(() => {
    setPaddingBottom(window.innerHeight / 2);
  }, []);

  return (
    <form
      action={action}
      className={styles.form}
      style={{ paddingBottom: `${paddingBottom}px` }}
      onKeyDown={handleKeyDown}>
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
