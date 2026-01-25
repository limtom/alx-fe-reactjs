import { create } from "zustand";

const counterStore = (set) => ({
  count: 0,

  increase: () => {
    set((state) => ({ count: state.count + 1 }));
  },

  decrease: () => {
    set((state) => ({ count: state.count - 1 }));
  },
});

export const useCounterStore = create(counterStore);
