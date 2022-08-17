import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export interface GameState {
  start:boolean,
  victoriesMonster: number,
  victoriesMage: number,
  mageDefeated:boolean,
  monsterDefeated:boolean,
  mageMove: boolean,
  monsterMove: boolean,
  flagStartMove: boolean,
  showDialog: boolean
}

const initialState: GameState = {
  start: false,
  victoriesMonster: 0,
  victoriesMage: 0,
  mageDefeated: false,
  monsterDefeated: false,
  mageMove: true,
  monsterMove: false,
  flagStartMove: false,
  showDialog: true
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
    },
    changeFlagStartMove: (state, action: PayloadAction<boolean>) => {
      state.flagStartMove = action.payload;
    },
    changeShowDialog: (state, action: PayloadAction<boolean>) => {
      state.showDialog = action.payload;
    }
  }
});

export const { changeStart, changeMageDefeated, changeMonsterDefeated, changeMageMove, changeMonsterMove, changeFlagStartMove, changeVictoriesMonster, changeVictoriesMage, changeShowDialog } = gameSlice.actions;

export const selectStart = (state: RootState) => state.game.start;
export const selectMonsterDefeated = (state: RootState) => state.game.monsterDefeated;
export const selectMageDefeated = (state: RootState) => state.game.mageDefeated;
export const selectMageMove = (state: RootState) => state.game.mageMove;
export const selectMonsterMove = (state: RootState) => state.game.monsterMove;
export const selectFlagStartMove = (state: RootState) => state.game.flagStartMove;
export const selectVictoriesMonster = (state: RootState) => state.game.victoriesMonster;
export const selectVictoriesMage = (state: RootState) => state.game.victoriesMage;
export const selectShowDialog = (state: RootState) => state.game.showDialog;

export default gameSlice.reducer;
