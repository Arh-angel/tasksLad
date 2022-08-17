import React, { useEffect, useState } from 'react';

import MonsterPage from '../components/pages/MonsterPage/MonsterPage';
import { useAppDispatch, useAppSelector } from '../hooks/storeHooks';
import { IHero } from '../models/IHero';
import { IPhrase } from '../models/IPhrase';
import { changeFlagStartMove, changeMageMove, changeMonsterMove, selectFlagStartMove, selectMageMove, selectMonsterDefeated, selectMonsterMove, selectShowDialog, selectStart } from '../store/slice/gameSlice/gameSlice';
import { addMove, selectCurrentMonster, selectMonsterMoveCurrent, selectPhrase } from '../store/slice/monsterSlice/monsterSlice';

const MonsterContainer = () => {
  const [currentMonster, setCurrentMonster] = useState<IHero>({
    maxHealth: 0,
    name: '',
    moves: []
  });
  const [currentMonsterPhrase, setCurrentMonsterPhrase] = useState<IPhrase>({ initial: [], final: [] });
  const [monsterSay, setMonsterSay] = useState('');
  const [cooldownList, setCooldownList] = useState<any>({});

  const monster:IHero = useAppSelector(selectCurrentMonster);
  const monsterPhrase = useAppSelector(selectPhrase);
  const statusGame = useAppSelector(selectStart);
  const monsterDefeated = useAppSelector(selectMonsterDefeated);
  const mageMove = useAppSelector(selectMageMove);
  const currentMove = useAppSelector(selectMonsterMoveCurrent);
  const flagStartMove = useAppSelector(selectFlagStartMove);
  const showDialog = useAppSelector(selectShowDialog);

  const dispatch = useAppDispatch();

  const createMove = () => {
    const randomNum = Math.floor(Math.random() * (3 - 0)) + 0;
    const move = currentMonster.moves[randomNum];

    const nameMove:any = move?.name;

    if (move!.cooldown > 0) {
      if (cooldownList.nameMove) {
        createMove();
      } else {
        setCooldownList({
          ...cooldownList,
          [nameMove]: move!.cooldown
        });
      }
    }

    dispatch(addMove(move));
    dispatch(changeMonsterMove(true));
  };

  useEffect(() => {
    if (flagStartMove && mageMove) {
      createMove();
    }
  }, [flagStartMove, mageMove]);

  useEffect(() => {
    setCurrentMonster(monster);
  }, [monster]);

  useEffect(() => {
    setCurrentMonsterPhrase(monsterPhrase);
  }, [monsterPhrase]);

  useEffect(() => {
    if (!monsterDefeated && showDialog) {
      currentMonsterPhrase.initial.forEach((element, index) => {
        if (index === 0) {
          setTimeout(() => setMonsterSay(element), 3000);
          setTimeout(() => setMonsterSay(''), 6000);
        } else {
          setTimeout(() => setMonsterSay(element), 9000);
          setTimeout(() => {
            setMonsterSay('');
            dispatch(changeFlagStartMove(true));
          }, 12000);
        }
      });
    } else if (monsterDefeated && showDialog) {
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
  }, [statusGame, monsterDefeated, showDialog]);

  useEffect(() => {
    if (flagStartMove && currentMove && statusGame !== false) {
      dispatch(changeMageMove(false));
      setMonsterSay(`Я использую - ${currentMove.name}`);
    } else {
      setMonsterSay('');
    }
  }, [flagStartMove, currentMove, statusGame]);

  return (
    <MonsterPage dialogText={monsterSay} />
  );
};

export default MonsterContainer;
