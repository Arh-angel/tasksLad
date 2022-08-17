import React, { useEffect, useState } from 'react';

import style from './Dialog.module.scss';

type DialogPropsTypes = {
  hero: string,
  text: string
};

const Dialog = (props: DialogPropsTypes) => {
  const { hero, text } = props;

  const [currentHero, setCurrentHero] = useState('');

  useEffect(() => {
    setCurrentHero(hero);
  }, [hero]);

  return (
    <div className={style.container}>
      <p className={currentHero === 'monster' ? style.scale : ''}>{text}</p>
    </div>
  );
};

export default Dialog;
