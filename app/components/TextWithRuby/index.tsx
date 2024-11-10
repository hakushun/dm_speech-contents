import { Fragment } from 'react';
import styles from './index.module.css';
import { Texts } from '../../lib/mock/questions';

type Proos = {
  texts: Texts;
};

export function TextWithRuby({ texts }: Proos) {
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
