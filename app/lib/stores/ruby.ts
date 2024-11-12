import { create } from 'zustand';

interface RubyState {
  isVisible: boolean;
  toggle: () => void;
}

export const useRubyStore = create<RubyState>((set, get) => ({
  isVisible: false,
  toggle: () => set({ isVisible: !get().isVisible }),
}));
