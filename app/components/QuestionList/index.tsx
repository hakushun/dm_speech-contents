'use client';

import { useRef } from 'react';
import styles from './index.module.css';
import { QuestionItem } from '../QuestionItem';
import { Question } from '../../lib/mock/questions';

type Props = {
  questions: Question[];
};

export function QuestionList({ questions }: Props) {
  const questionRefs = useRef<HTMLElement[]>([]);

  const focusQuestion = (index: number) => {
    const nextQuestionRef = questionRefs.current[index];

    if (!nextQuestionRef) return;

    nextQuestionRef.scrollIntoView({ behavior: 'smooth', block: 'center' });
    nextQuestionRef.focus();
  };

  const handleFocus = (id: number) => {
    const index = questions.findIndex((question) => question.id === id);

    if (index === -1) return;

    focusQuestion(index);
  };

  const handleFocusNext = (id: number) => {
    const index = questions.findIndex((question) => question.id === id);

    if (index === -1) return;

    focusQuestion(index + 1);
  };

  return (
    <ul className={styles.list}>
      {questions.map((question, index) => (
        <QuestionItem
          key={question.id}
          question={question}
          handleFocus={handleFocus}
          handleFocusNext={handleFocusNext}
          ref={(el) => {
            if (!el) return;
            questionRefs.current[index] = el;
          }}
        />
      ))}
    </ul>
  );
}
