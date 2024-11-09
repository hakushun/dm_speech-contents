'use client';

import styles from './index.module.css';
import { useSpeechStore } from '../../lib/stores/speech';

export function SpeedController() {
  const speechSpeed = useSpeechStore((state) => state.speechSpeed);
  const setSpeechSpeed = useSpeechStore((state) => state.setSpeechSpeed);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpeechSpeed(parseFloat(event.target.value));
  };

  return (
    <div className={styles.controller}>
      <div className={styles.label_wrapper}>
        <label htmlFor="speech_speed">読み上げスピード: </label>
        <span>{speechSpeed}倍</span>
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
