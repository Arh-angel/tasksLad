import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { mage } from '../../../helpers/heroes';
import { magePhrase } from '../../../helpers/dialog';

export interface MageState {
  currentMage: {
    maxHealth: number,
    name: string,
    moves: {
      name: string;
      physicalDmg: number;
      magicDmg: number;
      physicArmorPercents: number;
      magicArmorPercents: number;
      cooldown: number;
    }[]
  }
  phrase: {
    initial: string[];
    final: string[];
  }
}

const initialState: MageState = {
  currentMage: mage,
  phrase: magePhrase
};

export const mageSlice = createSlice({
  name: 'mage',
  initialState,
  reducers: {
    addMaxHealth: (state, action: PayloadAction<number>) => {
      state.currentMage.maxHealth = action.payload;
    },
    addName: (state, action: PayloadAction<string>) => {
      state.currentMage.name = action.payload;
    },
  }
});

export const { addMaxHealth, addName } = mageSlice.actions;

export const selectMaxHealth = (state: RootState) => state.mage.currentMage.maxHealth;
export const selectNameMage = (state: RootState) => state.mage.currentMage.name;
export const selectMoves = (state: RootState) => state.mage.currentMage.moves;
export const selectInitialPhrase = (state: RootState) => state.mage.phrase.initial;
export const selectFinalPhrase = (state: RootState) => state.mage.phrase.final;

export default mageSlice.reducer;
