import React from 'react';
import { useAppDispatch } from '../../../hooks/storeHooks';
import { addMaxHealth } from '../../../store/slice/mageSlice/mageSlice';

import style from './SelectLevel.module.scss';

const SelectLevel = () => {
  const dispatch = useAppDispatch();

  const handlerDifficultBtn = () => {
    dispatch(addMaxHealth(10));
  };

  const handlerMiddleBtn = () => {
    dispatch(addMaxHealth(50));
  };

  const handlerSimpleBtn = () => {
    dispatch(addMaxHealth(100));
  };

  return (
    <div className={style.container}>
      <button className={style.btn} type="button" onClick={handlerSimpleBtn}>Простой</button>
      <button className={style.btn} type="button" onClick={handlerMiddleBtn}>Средний</button>
      <button className={style.btn} type="button" onClick={handlerDifficultBtn}>Сложный</button>
    </div>
  );
};

export default SelectLevel;
