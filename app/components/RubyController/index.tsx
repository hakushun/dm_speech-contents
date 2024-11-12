'use client';

import styles from './index.module.css';
import { useRubyStore } from '../../lib/stores/ruby';
import { TextWithRuby } from '../TextWithRuby';

export function RubyController() {
  const isVisible = useRubyStore((state) => state.isVisible);
  const toggle = useRubyStore((state) => state.toggle);

  return (
    <label className={styles.controller}>
      <TextWithRuby texts={[{ text: 'ルビをひょうじする', ruby: '' }]} />
      <div className={styles.toggle}>
        <input type="checkbox" name="check" checked={isVisible} onChange={toggle} />
      </div>
    </label>
  );
}
