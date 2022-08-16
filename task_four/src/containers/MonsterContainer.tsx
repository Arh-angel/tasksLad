import React, { useContext, useEffect, useState } from 'react';

import MonsterPage from '../components/pages/MonsterPage/MonsterPage';
import AppContext from '../context/AppContext';

const MonsterContainer = () => {
  const { monster, monsterPhrase }:any = useContext(AppContext);

  const [currentMonster, setCurrentMonster] = useState({});
  const [currentMonsterPhrase, setCurrentMonsterPhrase] = useState({});

  useEffect(() => {
    setCurrentMonster(monster);
  }, [monster]);

  useEffect(() => {
    setCurrentMonsterPhrase(monsterPhrase);
  }, [monsterPhrase]);

  return (
    <MonsterPage dialogText="hellow" />
  );
};

export default MonsterContainer;
