'use client';

import styles from './index.module.css';
import { useSpeechStore } from '../../lib/stores/speech';
import { TextWithRuby } from '../TextWithRuby';

export function SpeedController() {
  const speechSpeed = useSpeechStore((state) => state.speechSpeed);
  const setSpeechSpeed = useSpeechStore((state) => state.setSpeechSpeed);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpeechSpeed(parseFloat(event.target.value));
  };

  return (
    <div className={styles.controller}>
      <div className={styles.label_wrapper}>
        <label htmlFor="speech_speed">
          <TextWithRuby
            texts={[
              { text: '読', ruby: 'よ' },
              { text: 'み', ruby: '' },
              { text: '上', ruby: 'あ' },
              { text: 'げスピード:', ruby: '' },
            ]}
          />
        </label>
        <span>
          {speechSpeed}
          <TextWithRuby texts={[{ text: '倍', ruby: 'ばい' }]} />
        </span>
      </div>
      <input
        type="range"
        id="speech_speed"
        min="0.5"
        max="2"
        value={speechSpeed}
        step="0.1"
        onChange={handleChange}
      />
    </div>
  );
}
