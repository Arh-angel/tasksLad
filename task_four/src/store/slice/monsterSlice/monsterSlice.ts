import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../store';
import { monster } from '../../../helpers/heroes';
import { monsterPhrase } from '../../../helpers/dialog';
import { IMove } from '../../../models/IMove';

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
  },
  move: {
    name: string;
    physicalDmg: number;
    magicDmg: number;
    physicArmorPercents: number;
    magicArmorPercents: number;
    cooldown: number;
  }
}

const initialState: MonsterState = {
  currentMonster: monster,
  phrase: monsterPhrase,
  move: {
    name: '',
    physicalDmg: 0,
    magicDmg: 0,
    physicArmorPercents: 0,
    magicArmorPercents: 0,
    cooldown: 0
  }
};

export const monsterSlice = createSlice({
  name: 'monster',
  initialState,
  reducers: {
    addMaxHealthMonster: (state, action: PayloadAction<number>) => {
      state.currentMonster.maxHealth = action.payload;
    },
    addMove: (state, action: PayloadAction<IMove>) => {
      state.move = {
        ...action.payload
      };
    },
  },
});

export const { addMaxHealthMonster, addMove } = monsterSlice.actions;

export const selectNameMonster = (state: RootState) => state.monster.currentMonster.name;
export const selectMaxHealthMonster = (state: RootState) => state.monster.currentMonster.maxHealth;
export const selectMoves = (state: RootState) => state.monster.currentMonster.moves;
export const selectPhrase = (state: RootState) => state.monster.phrase;
export const selectCurrentMonster = (state: RootState) => state.monster.currentMonster;
export const selectMonsterMoveCurrent = (state: RootState) => state.monster.move;

export default monsterSlice.reducer;
