import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { mage } from '../../../helpers/heroes';
import { magePhrase } from '../../../helpers/dialog';
import { IMove } from '../../../models/IMove';

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
  move: {
    name: string;
    physicalDmg: number;
    magicDmg: number;
    physicArmorPercents: number;
    magicArmorPercents: number;
    cooldown: number;
  }
}

const initialState: MageState = {
  currentMage: mage,
  phrase: magePhrase,
  move: {
    name: '',
    physicalDmg: 0,
    magicDmg: 0,
    physicArmorPercents: 0,
    magicArmorPercents: 0,
    cooldown: 0
  }
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
    addMove: (state, action: PayloadAction<IMove>) => {
      state.move = {
        ...action.payload
      };
    },
  }
});

export const { addMaxHealth, addName, addMove } = mageSlice.actions;

export const selectMaxHealth = (state: RootState) => state.mage.currentMage.maxHealth;
export const selectNameMage = (state: RootState) => state.mage.currentMage.name;
export const selectMoves = (state: RootState) => state.mage.currentMage.moves;
export const selectPhrase = (state: RootState) => state.mage.phrase;
export const selectMageMove = (state: RootState) => state.mage.move;

export default mageSlice.reducer;
