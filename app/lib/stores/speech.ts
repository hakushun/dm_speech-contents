import { create } from 'zustand';

interface SpeechState {
  speechSpeed: number;
  setSpeechSpeed: (speed: number) => void;
}

export const useSpeechStore = create<SpeechState>((set) => ({
  speechSpeed: 1,
  setSpeechSpeed: (speed: number) => set({ speechSpeed: speed }),
}));
