'use client';

import { forwardRef, useState } from 'react';
import styles from './index.module.css';
import { SpeechButton } from '../SpeechButton';
import { useSpeech } from '../../lib/hooks/useSpeech';
import { Question } from '../../lib/mock/questions';
import { TextWithRuby } from '../TextWithRuby';

type Props = {
  question: Question;
  handleFocus: (id: number) => void;
  handleFocusNext: (id: number) => void;
};

export const QuestionItem = forwardRef<HTMLLIElement, Props>(function (
  { question, handleFocus, handleFocusNext }: Props,
  _ref,
) {
  const { ref, startSpeech } = useSpeech<HTMLHeadingElement>();
  const [checkedValue, setCheckedValue] = useState<number | undefined>();
  const [hasKeyDown, setHasKeyDown] = useState<boolean>(false);

  const handleChange = (value: number) => {
    setCheckedValue(value);
  };

  const handleClick = (value: number, questionId: number) => {
    // キーボード操作でもclickイベントが発火するため
    if (hasKeyDown) return;

    setCheckedValue(value);
    handleFocusNext(questionId);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
        e.preventDefault();
        handleClick(Number(e.key), question.id);
        break;
    }
  };

  return (
    <li
      ref={_ref}
      className={styles.root}
      tabIndex={-1}
      onClick={() => handleFocus(question.id)}
      onKeyDown={handleKeyDown}>
      <div className={styles.inner}>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>
            <SpeechButton label="設問文を読み上げる" onClick={startSpeech} />
            <h3 ref={ref}>
              <TextWithRuby texts={question.title} />
            </h3>
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
                  checked={checkedValue === option.value}
                  onKeyDown={() => setHasKeyDown(true)}
                  onKeyUp={() => setHasKeyDown(false)}
                  onChange={() => handleChange(option.value)}
                  onClick={() => handleClick(option.value, question.id)}
                  required
                />
                <TextWithRuby texts={option.label} />
              </label>
            ))}
          </div>
        </fieldset>
      </div>
    </li>
  );
});
