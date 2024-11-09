'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './index.module.css';
import { QuestionItem } from '../QuestionItem';
import { Question } from '../../lib/mock/questions';

type Props = {
  questions: Question[];
};

export function QuestionList({ questions }: Props) {
  const questionRefs = useRef<HTMLElement[]>([]);
  const [targetIndex, setTargetIndex] = useState(0);

  const onClick = (id: number) => {
    const index = questions.findIndex((question) => question.id === id);

    if (index === -1) return;

    setTargetIndex(index);
  };

  const onChange = (id: number) => {
    const index = questions.findIndex((question) => question.id === id);

    if (index === -1) return;

    setTargetIndex(index + 1);
  };

  useEffect(() => {
    const nextQuestionRef = questionRefs.current[targetIndex];

    if (!nextQuestionRef) return;

    nextQuestionRef.scrollIntoView({ behavior: 'smooth', block: 'center' });
    nextQuestionRef.focus();
  }, [targetIndex]);

  return (
    <ul className={styles.list}>
      {questions.map((question, index) => (
        <QuestionItem
          key={question.id}
          question={question}
          onClick={onClick}
          onChange={onChange}
          ref={(el) => {
            if (!el) return;
            questionRefs.current[index] = el;
          }}
        />
      ))}
    </ul>
  );
}
