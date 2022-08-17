import React, { useEffect } from 'react';
import { useAppDispatch } from '../../../hooks/storeHooks';
import { changeFlagStartMove, changeMageDefeated, changeMonsterDefeated, changeMonsterMove, changeShowDialog, changeStart } from '../../../store/slice/gameSlice/gameSlice';
import { addMaxHealth } from '../../../store/slice/mageSlice/mageSlice';
import { addMaxHealthMonster } from '../../../store/slice/monsterSlice/monsterSlice';

import style from './ModalWindow.module.scss';

type ModalWindowPropsTypes = {
  modalWindowOpen: () => void
}

const ModalWindow = (props: ModalWindowPropsTypes) => {
  const { modalWindowOpen } = props;

  const dispatch = useAppDispatch();

  const handlerOneBtn = () => {
    dispatch(changeStart(true));
    dispatch(addMaxHealth(10));
    dispatch(addMaxHealthMonster(10));
    dispatch(changeMonsterMove(true));
    dispatch(changeMonsterDefeated(false));
    dispatch(changeMageDefeated(false));
    dispatch(changeStart(true));
    dispatch(changeShowDialog(true));
    modalWindowOpen();
  };

  const handlerTwoBtn = () => {
    dispatch(changeStart(false));
    dispatch(addMaxHealth(10));
    dispatch(addMaxHealthMonster(10));
    modalWindowOpen();
  };

  return (
    <div role="presentation" className={style.modalWindow} onClick={modalWindowOpen}>
      <div
        role="presentation"
        className={style.container}
        onClick={(e) => e.stopPropagation()}>
        <h3 className={style.text}>Играем еще раз?</h3>
        <div className={style.wrapperBtn}>
          <button type="button" onClick={handlerOneBtn}>Играем!</button>
          <button type="button" onClick={handlerTwoBtn}>Все! Хватит!</button>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
