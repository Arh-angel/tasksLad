import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export interface GameState {
  start:boolean,
  victoriesMonster: number,
  victoriesMage: number,
}

const initialState: GameState = {
  start: false,
  victoriesMonster: 0,
  victoriesMage: 0,
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
  }
});

export const { changeStart } = gameSlice.actions;

export const selectStart = (state: RootState) => state.game.start;

export default gameSlice.reducer;
