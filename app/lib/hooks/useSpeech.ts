'use client';

import { useRef } from 'react';
import { useSpeechStore } from '../stores/speech';

export function useSpeech<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const speechSpeed = useSpeechStore((state) => state.speechSpeed);

  function getTextWithoutRuby(element: T) {
    // rt要素を一時的に非表示にする
    const rtElements = element.getElementsByTagName('rt');
    const originalDisplay: string[] = [];

    // 全てのrt要素を非表示に
    Array.from(rtElements).forEach((rt, i) => {
      originalDisplay[i] = rt.style.display;
      rt.style.display = 'none';
    });

    // innerTextを取得
    const text = element.innerText;

    // rt要素の表示を元に戻す
    Array.from(rtElements).forEach((rt, i) => {
      rt.style.display = originalDisplay[i];
    });

    return text;
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
