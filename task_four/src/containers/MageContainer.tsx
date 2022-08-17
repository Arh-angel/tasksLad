import React, { useContext, useEffect, useState } from 'react';

import MagePage from '../components/pages/MagePage/MagePage';
import { useAppDispatch, useAppSelector } from '../hooks/storeHooks';
import { changeFlagStartMove, changeMageDefeated, changeMonsterMove, changeShowDialog, changeStart, selectMageDefeated, selectMonsterMove, selectShowDialog, selectStart } from '../store/slice/gameSlice/gameSlice';
import { selectNameMage, selectPhrase } from '../store/slice/mageSlice/mageSlice';

const MageContainer = () => {
  const [currentMage, setCurrentMage] = useState({});
  const [currentMagePhrase, setCurrentMagePhrase] = useState<{initial:string[], final:string[]}>({ initial: [], final: [] });
  const [mageSay, setMageSay] = useState('');

  const dispatch = useAppDispatch();

  const mage = useAppSelector(selectNameMage);
  const magePhrase = useAppSelector(selectPhrase);
  const statusGame = useAppSelector(selectStart);
  const mageDefeated = useAppSelector(selectMageDefeated);
  const showDialog = useAppSelector(selectShowDialog);

  useEffect(() => {
    setCurrentMage(mage);
  }, [mage]);

  useEffect(() => {
    setCurrentMagePhrase(magePhrase);
  }, [magePhrase]);

  useEffect(() => {
    if (!mageDefeated && showDialog) {
      currentMagePhrase.initial.forEach((element, index) => {
        if (index === 0) {
          setMageSay(element);
          setTimeout(() => setMageSay(''), 3000);
        } else {
          setTimeout(() => setMageSay(element), 6000);
          setTimeout(() => setMageSay(''), 9000);
        }
      });
    } else if (mageDefeated && showDialog) {
      currentMagePhrase.final.forEach((element, index) => {
        if (index === 0) {
          setTimeout(() => setMageSay(element), 3000);
          setTimeout(() => setMageSay(''), 6000);
        } else {
          setTimeout(() => setMageSay(element), 9000);
          setTimeout(() => {
            setMageSay('');
            dispatch(changeStart(false));
            dispatch(changeMageDefeated(false));
            dispatch(changeFlagStartMove(false));
            dispatch(changeShowDialog(false));
            dispatch(changeMonsterMove(false));
          }, 12000);
        }
      });
    }
  }, [statusGame, mageDefeated, showDialog]);

  return (
    <MagePage dialogText={mageSay} />
  );
};

export default MageContainer;
