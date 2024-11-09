'use client';

import { useRef } from 'react';
import { useSpeechStore } from '../stores/speech';

export function useSpeech<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const speechSpeed = useSpeechStore((state) => state.speechSpeed);

  const startSpeech = () => {
    if (!ref.current) return;

    const utterance = new SpeechSynthesisUtterance(ref.current.innerText);

    utterance.lang = 'ja-JP';

    utterance.rate = speechSpeed;

    window.speechSynthesis.speak(utterance);
  };

  return { ref, startSpeech };
}
