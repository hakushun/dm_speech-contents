'use client';

import styles from './index.module.css';
import { SpeechButton } from '../SpeechButton';
import { useSpeech } from '../../lib/hooks/useSpeech';

type Props = {
  title: string;
  description: string;
};

export function QuestionHeader({ title, description }: Props) {
  const { ref, startSpeech } = useSpeech<HTMLDivElement>();

  return (
    <section className={styles.root}>
      <div className={styles.inner}>
        <div className={styles.action}>
          <SpeechButton label="説明を読み上げる" onClick={startSpeech} />
        </div>
        <div ref={ref} className={styles.body}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
}
