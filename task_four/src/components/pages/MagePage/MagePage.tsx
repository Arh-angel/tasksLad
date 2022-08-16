import React, { useEffect, useState } from 'react';
import Dialog from '../../common/Dialog/Dialog';

import style from './MagePage.module.scss';

type MagePagePropsTypes = {
  dialogText: string
}

const MagePage = (props:MagePagePropsTypes) => {
  const { dialogText } = props;

  const [text, setText] = useState('');

  useEffect(() => {
    setText(dialogText);
  }, [dialogText]);

  return (
    <div className={style.container}>
      {text ? <Dialog hero="mage" text={text} /> : ''}
    </div>
  );
};

export default MagePage;
