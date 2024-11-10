'use client';

import { useRef } from 'react';
import { useSpeechStore } from '../stores/speech';

export function useSpeech<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const speechSpeed = useSpeechStore((state) => state.speechSpeed);

  function getTextWithoutRuby(element: T) {
    const clone = element.cloneNode(true) as T;
    const rtElements = clone.getElementsByTagName('rt');
    Array.from(rtElements).forEach((rt) => rt.remove());
    return clone.innerText;
  }

  function startSpeech() {
    window.speechSynthesis.cancel();

    if (!ref.current) return;

    const utterance = new SpeechSynthesisUtterance(getTextWithoutRuby(ref.current));

    utterance.lang = 'ja-JP';

    utterance.rate = speechSpeed;

    window.speechSynthesis.speak(utterance);
  }

  return { ref, startSpeech };
}
