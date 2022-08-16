import React, { useContext, useEffect, useState } from 'react';

import MonsterPage from '../components/pages/MonsterPage/MonsterPage';
import { useAppSelector } from '../hooks/storeHooks';
import { IHero } from '../models/IHero';
import { IMove } from '../models/IMove';
import { IPhrase } from '../models/IPhrase';
import { selectMageMove, selectMonsterDefeated, selectStart } from '../store/slice/gameSlice/gameSlice';
import { selectCurrentMonster, selectNameMonster, selectPhrase } from '../store/slice/monsterSlice/monsterSlice';

const MonsterContainer = () => {
  const [currentMonster, setCurrentMonster] = useState<IHero>();
  const [currentMonsterPhrase, setCurrentMonsterPhrase] = useState<IPhrase>({ initial: [], final: [] });
  const [monsterSay, setMonsterSay] = useState('');
  const [monsterMove, setMonsterMove] = useState<IMove>();
  const [cooldownList, setCooldownList] = useState<any>({});

  const monster = useAppSelector(selectCurrentMonster);
  const monsterPhrase = useAppSelector(selectPhrase);
  const statusGame = useAppSelector(selectStart);
  const monsterDefeated = useAppSelector(selectMonsterDefeated);
  const mageMove = useAppSelector(selectMageMove);

  const createMove = () => {
    const randomNum = Math.floor(Math.random() * (3 - 0)) + 0;
    const move = currentMonster?.moves[randomNum];

    return move;
  };

  useEffect(() => {
    setCurrentMonster(monster);
  }, [monster]);

  useEffect(() => {
    setCurrentMonsterPhrase(monsterPhrase);
  }, [monsterPhrase]);

  useEffect(() => {
    if (!monsterDefeated) {
      currentMonsterPhrase.initial.forEach((element, index) => {
        if (index === 0) {
          setTimeout(() => setMonsterSay(element), 3000);
          setTimeout(() => setMonsterSay(''), 6000);
        } else {
          setTimeout(() => setMonsterSay(element), 9000);
          setTimeout(() => setMonsterSay(''), 12000);
        }
      });
    } else {
      currentMonsterPhrase.final.forEach((element, index) => {
        if (index === 0) {
          setMonsterSay(element);
          setTimeout(() => setMonsterSay(''), 3000);
        } else {
          setTimeout(() => setMonsterSay(element), 6000);
          setTimeout(() => setMonsterSay(''), 9000);
        }
      });
    }
  }, [statusGame, monsterDefeated]);

  useEffect(() => {
    let move = createMove();
    const nameMove:any = move?.name;

    if (cooldownList.find(move)) {
      move = createMove();
    }

    if (mageMove) {
      setMonsterMove(move);
      if (move!.cooldown > 0) {
        setCooldownList({
          ...cooldownList,
          [nameMove]: move!.cooldown
        });
      }
    }
  }, [mageMove]);

  return (
    <MonsterPage dialogText={monsterSay} />
  );
};

export default MonsterContainer;
