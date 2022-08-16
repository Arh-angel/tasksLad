import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/storeHooks';
import { changeStart, selectStart } from '../../../store/slice/gameSlice/gameSlice';

import style from './ButtonBlock.module.scss';

const ButtonBlock = () => {
  const [startGame, setStartGame] = useState(false);

  const dispatch = useAppDispatch();

  const statusGame = useAppSelector(selectStart);

  useEffect(() => {
    setStartGame(statusGame);
  }, [statusGame]);

  const handlerStatusStart = () => {
    dispatch(changeStart(true));
  };

  return (
    <div className={style.container}>
      <button className={style.btn} type="button">Удар боевым кадилом</button>
      <button className={style.btn} type="button">Вертушка левой пяткой</button>
      <button className={[style.btn, style.btn_start].join(' ')} type="button" onClick={handlerStatusStart}>Играть!</button>
      <button className={style.btn} type="button">Каноничный фаербол</button>
      <button className={style.btn} type="button">Магический блок</button>
    </div>
  );
};

export default ButtonBlock;
