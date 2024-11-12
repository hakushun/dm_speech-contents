'use client';

import { Fragment } from 'react';
import styles from './index.module.css';
import { Texts } from '../../lib/mock/questions';
import { useRubyStore } from '../../lib/stores/ruby';

type Proos = {
  texts: Texts;
};

export function TextWithRuby({ texts }: Proos) {
  const isVisible = useRubyStore((state) => state.isVisible);

  if (isVisible) {
    return (
      <span className={styles.root}>
        {texts.map((text, index) =>
          text.ruby === '' ? (
            <Fragment key={text.text + index}>{text.text}</Fragment>
          ) : (
            <ruby key={text.text + index}>
              {text.text}
              <rt>{text.ruby}</rt>
            </ruby>
          ),
        )}
      </span>
    );
  }

  return (
    <span className={styles.root}>
      {texts.map((text, index) => (
        <Fragment key={text.text + index}>{text.text}</Fragment>
      ))}
    </span>
  );
}
