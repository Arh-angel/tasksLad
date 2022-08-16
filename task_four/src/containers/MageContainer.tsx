import React, { useContext, useEffect, useState } from 'react';

import MagePage from '../components/pages/MagePage/MagePage';
import { useAppSelector } from '../hooks/storeHooks';
import { selectMageDefeated, selectMonsterMove, selectStart } from '../store/slice/gameSlice/gameSlice';
import { selectNameMage, selectPhrase } from '../store/slice/mageSlice/mageSlice';

const MageContainer = () => {
  const [currentMage, setCurrentMage] = useState({});
  const [currentMagePhrase, setCurrentMagePhrase] = useState<{initial:string[], final:string[]}>({ initial: [], final: [] });
  const [mageSay, setMageSay] = useState('');

  const mage = useAppSelector(selectNameMage);
  const magePhrase = useAppSelector(selectPhrase);
  const statusGame = useAppSelector(selectStart);
  const mageDefeated = useAppSelector(selectMageDefeated);

  useEffect(() => {
    setCurrentMage(mage);
  }, [mage]);

  useEffect(() => {
    setCurrentMagePhrase(magePhrase);
  }, [magePhrase]);

  useEffect(() => {
    if (!mageDefeated) {
      currentMagePhrase.initial.forEach((element, index) => {
        if (index === 0) {
          setMageSay(element);
          setTimeout(() => setMageSay(''), 3000);
        } else {
          setTimeout(() => setMageSay(element), 6000);
          setTimeout(() => setMageSay(''), 9000);
        }
      });
    } else {
      currentMagePhrase.final.forEach((element, index) => {
        if (index === 0) {
          setTimeout(() => setMageSay(element), 3000);
          setTimeout(() => setMageSay(''), 6000);
        } else {
          setTimeout(() => setMageSay(element), 9000);
          setTimeout(() => setMageSay(''), 12000);
        }
      });
    }
  }, [statusGame, mageDefeated]);

  return (
    <MagePage dialogText={mageSay} />
  );
};

export default MageContainer;
