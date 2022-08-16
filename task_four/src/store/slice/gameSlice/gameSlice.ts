import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export interface GameState {
  start:boolean,
  victoriesMonster: number,
  victoriesMage: number,
  mageDefeated:boolean,
  monsterDefeated:boolean,
  mageMove: boolean,
  monsterMove: boolean
}

const initialState: GameState = {
  start: false,
  victoriesMonster: 0,
  victoriesMage: 0,
  mageDefeated: false,
  monsterDefeated: false,
  mageMove: true,
  monsterMove: false
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    changeStart: (state, action: PayloadAction<boolean>) => {
      state.start = action.payload;
    },
    changeVictoriesMonster: (state) => {
      state.victoriesMonster += 1;
    },
    changeVictoriesMage: (state) => {
      state.victoriesMage += 1;
    },
    changeMageDefeated: (state, action: PayloadAction<boolean>) => {
      state.mageDefeated = action.payload;
    },
    changeMonsterDefeated: (state, action: PayloadAction<boolean>) => {
      state.monsterDefeated = action.payload;
    },
    changeMageMove: (state, action: PayloadAction<boolean>) => {
      state.mageMove = action.payload;
    },
    changeMonsterMove: (state, action: PayloadAction<boolean>) => {
      state.monsterMove = action.payload;
    }
  }
});

export const { changeStart, changeMageDefeated, changeMonsterDefeated, changeMageMove, changeMonsterMove } = gameSlice.actions;

export const selectStart = (state: RootState) => state.game.start;
export const selectMonsterDefeated = (state: RootState) => state.game.monsterDefeated;
export const selectMageDefeated = (state: RootState) => state.game.mageDefeated;
export const selectMageMove = (state: RootState) => state.game.mageMove;
export const selectMonsterMove = (state: RootState) => state.game.monsterMove;

export default gameSlice.reducer;
