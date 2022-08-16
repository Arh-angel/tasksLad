import React, { useContext, useEffect, useState } from 'react';

import MonsterPage from '../components/pages/MonsterPage/MonsterPage';

const MonsterContainer = () => {
  const [currentMonster, setCurrentMonster] = useState({});
  const [currentMonsterPhrase, setCurrentMonsterPhrase] = useState({});

  // useEffect(() => {
  //   setCurrentMonster(monster);
  // }, [monster]);

  // useEffect(() => {
  //   setCurrentMonsterPhrase(monsterPhrase);
  // }, [monsterPhrase]);

  return (
    <MonsterPage dialogText="hellow" />
  );
};

export default MonsterContainer;
