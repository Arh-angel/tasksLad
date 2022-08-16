import { configureStore, combineReducers } from '@reduxjs/toolkit';
import mageReducer from './slice/mageSlice/mageSlice';
import gameReducer from './slice/gameSlice/gameSlice';
import monsterReducer from './slice/monsterSlice/monsterSlice';

const rootReducer = combineReducers({
  game: gameReducer,
  mage: mageReducer,
  monster: monsterReducer
});

export const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
