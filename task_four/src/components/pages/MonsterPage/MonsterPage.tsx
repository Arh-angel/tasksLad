import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../../hooks/storeHooks';
import { selectMaxHealthMonster } from '../../../store/slice/monsterSlice/monsterSlice';
import Dialog from '../../common/Dialog/Dialog';

import style from './MonsterPage.module.scss';

type MonsterPagePropsTypes = {
  dialogText: string
}

const MonsterPage = (props:MonsterPagePropsTypes) => {
  const { dialogText } = props;

  const monsterHealth = useAppSelector(selectMaxHealthMonster);

  const [text, setText] = useState('');

  useEffect(() => {
    setText(dialogText);
  }, [dialogText]);

  return (
    <div className={style.container}>
      <span className={style.health}>{`${monsterHealth}`}</span>
      {text ? <Dialog hero="monster" text={text} /> : ''}
    </div>
  );
};

export default MonsterPage;
