import React, { useEffect, useState } from 'react';
import Dialog from '../../common/Dialog/Dialog';

import style from './MonsterPage.module.scss';

type MonsterPagePropsTypes = {
  dialogText: string
}

const MonsterPage = (props:MonsterPagePropsTypes) => {
  const { dialogText } = props;

  const [text, setText] = useState('');

  useEffect(() => {
    setText(dialogText);
  }, [dialogText]);

  return (
    <div className={style.container}>
      {text ? <Dialog hero="monster" text={text} /> : ''}
    </div>
  );
};

export default MonsterPage;
