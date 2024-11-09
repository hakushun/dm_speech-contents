'use client';

import { forwardRef } from 'react';
import styles from './index.module.css';
import { SpeechButton } from '../SpeechButton';
import { useSpeech } from '../../lib/hooks/useSpeech';
import { Question } from '../../lib/mock/questions';

type Props = {
  question: Question;
  onClick: (id: number) => void;
  onChange: (id: number) => void;
};

export const QuestionItem = forwardRef<HTMLLIElement, Props>(function (
  { question, onClick, onChange }: Props,
  _ref,
) {
  const { ref, startSpeech } = useSpeech<HTMLHeadingElement>();

  return (
    <li ref={_ref} className={styles.root} tabIndex={-1} onClick={() => onClick(question.id)}>
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>
          <SpeechButton label="設問文を読み上げる" onClick={startSpeech} />
          <h3 ref={ref}>{question.title}</h3>
        </legend>
        <div className={styles.options}>
          {question.options.map((option) => (
            <label
              key={option.value}
              className={styles.option}
              onClick={(e) => e.stopPropagation()}>
              <input
                type="radio"
                className={styles.radio}
                name={`${question.id}`}
                value={option.value}
                onChange={() => onChange(question.id)}
                required
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      </fieldset>
    </li>
  );
});
