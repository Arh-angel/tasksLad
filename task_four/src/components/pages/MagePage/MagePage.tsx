import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../../hooks/storeHooks';
import { selectMaxHealth } from '../../../store/slice/mageSlice/mageSlice';
import Dialog from '../../common/Dialog/Dialog';

import style from './MagePage.module.scss';

type MagePagePropsTypes = {
  dialogText: string
}

const MagePage = (props:MagePagePropsTypes) => {
  const { dialogText } = props;

  const mageHealth = useAppSelector(selectMaxHealth);

  const [text, setText] = useState('');

  useEffect(() => {
    setText(dialogText);
  }, [dialogText]);

  return (
    <div className={style.container}>
      <span className={style.health}>{`${mageHealth}`}</span>
      {text ? <Dialog hero="mage" text={text} /> : ''}
    </div>
  );
};

export default MagePage;
