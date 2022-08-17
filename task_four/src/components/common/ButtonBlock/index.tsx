/* eslint-disable react/jsx-indent */
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/storeHooks';
import { changeMageMove, changeMonsterMove, changeShowDialog, changeStart, selectStart } from '../../../store/slice/gameSlice/gameSlice';
import { addMove, selectMoves, selectMageMove } from '../../../store/slice/mageSlice/mageSlice';

import style from './ButtonBlock.module.scss';

const ButtonBlock = () => {
  const [startGame, setStartGame] = useState(false);
  const [cooldownList, setCooldownList] = useState<any>({});

  const dispatch = useAppDispatch();

  const statusGame = useAppSelector(selectStart);
  const mageMoves = useAppSelector(selectMoves);
  const currentMove = useAppSelector(selectMageMove);

  useEffect(() => {
    setStartGame(statusGame);
  }, [statusGame]);

  const handlerStatusStart = () => {
    dispatch(changeStart(true));
    dispatch(changeShowDialog(true));
  };

  const handlerMove = (value: number) => {
    const upgradList:any = {};

    Object.keys(cooldownList).forEach((element) => {
      if (cooldownList[element] > 1) {
        upgradList[element] = cooldownList[element] - 1;
      }
      return upgradList;
    });

    console.log(upgradList);

    if (value === 0) {
      setCooldownList({
        ...upgradList
      });

      dispatch(changeMonsterMove(false));
      dispatch(addMove(mageMoves[0]));
      dispatch(changeMageMove(true));
    } else if (value === 1) {
      if (cooldownList.one > 0) {
        console.log('this is upgrade');
        setCooldownList({
          ...cooldownList,
          one: cooldownList.one - 1
        });
      } else {
        setCooldownList({
          ...cooldownList,
          one: 4
        });
      }
      dispatch(changeMonsterMove(false));
      dispatch(addMove(mageMoves[1]));
      dispatch(changeMageMove(true));
    } else if (value === 2) {
      if (cooldownList.two > 0) {
        setCooldownList({
          ...cooldownList,
          two: cooldownList.two - 1
        });
      } else {
        setCooldownList({
          ...cooldownList,
          two: 3
        });
      }
      dispatch(changeMonsterMove(false));
      dispatch(addMove(mageMoves[2]));
      dispatch(changeMageMove(true));
    } else if (value === 3) {
      if (cooldownList.free > 0) {
        setCooldownList({
          ...cooldownList,
          free: cooldownList.free - 1
        });
      } else {
        setCooldownList({
          ...cooldownList,
          free: 4
        });
      }
      dispatch(changeMonsterMove(false));
      dispatch(addMove(mageMoves[3]));
      dispatch(changeMageMove(true));
    }
  };

  console.log(cooldownList);

  return (
    <div className={style.container}>
      {startGame
        ? <>
          <button className={style.btn} type="button" onClick={() => handlerMove(0)}>Удар боевым кадилом</button>
          {!cooldownList.one ? <button className={style.btn} type="button" onClick={() => handlerMove(1)}>Вертушка левой пяткой</button> : ''}
          </>
        : ''}
      {!startGame
        ? <button className={[style.btn, style.btn_start].join(' ')} type="button" onClick={handlerStatusStart}>Играть!</button>
        : ''}
      {startGame
        ? <>
          {!cooldownList.two ? <button className={style.btn} type="button" onClick={() => handlerMove(2)}>Каноничный фаербол</button> : ''}
          {!cooldownList.free ? <button className={style.btn} type="button" onClick={() => handlerMove(3)}>Магический блок</button> : ''}
          </>
        : ''}
    </div>
  );
};

export default ButtonBlock;
