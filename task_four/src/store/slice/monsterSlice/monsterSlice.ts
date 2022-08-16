import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../store';
import { monster } from '../../../helpers/heroes';
import { monsterPhrase } from '../../../helpers/dialog';

export interface MonsterState {
  currentMonster: {
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
  },
  phrase: {
    initial: string[];
    final: string[];
  }
}

const initialState: MonsterState = {
  currentMonster: monster,
  phrase: monsterPhrase
};

export const monsterSlice = createSlice({
  name: 'monster',
  initialState,
  reducers: {
    // addName: (state, action: PayloadAction<string>) => {
    //   state.monster.name = action.payload;
    // },
  },
});

// export const { addName } = monsterSlice.actions;

export const selectNameMage = (state: RootState) => state.monster.currentMonster.name;
export const selectMaxHealth = (state: RootState) => state.monster.currentMonster.maxHealth;
export const selectMoves = (state: RootState) => state.monster.currentMonster.moves;
export const selectInitialPhrase = (state: RootState) => state.monster.phrase.initial;
export const selectFinalPhrase = (state: RootState) => state.monster.phrase.final;

export default monsterSlice.reducer;
