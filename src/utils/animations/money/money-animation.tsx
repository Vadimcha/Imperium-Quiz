import { create } from 'zustand';

interface MoneyState {
  showMoney: boolean,
  play: () => void,
}

export const moneyDurationMs = 2150;

export const useMoneyAnimation = create<MoneyState>((set, getState) => ({
  showMoney: false,
  play: () => {
    set(() => {
      return { showMoney: true };
    });

    // Повторный вызов через 2 секунды
    if(getState().showMoney) {
      setTimeout(() => {
        set(() => {
          return { showMoney: false };
        });
      }, moneyDurationMs);
    }
  },
}));