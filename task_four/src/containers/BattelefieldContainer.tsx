import React, { useEffect, useState } from 'react';
import BattelefieldPage from '../components/pages/BattlefieldPage/BattlefieldPage';
import { useAppSelector } from '../hooks/storeHooks';
import { selectStart } from '../store/slice/gameSlice/gameSlice';

const BattelefieldContainer = () => (
  <BattelefieldPage />
);

export default BattelefieldContainer;
