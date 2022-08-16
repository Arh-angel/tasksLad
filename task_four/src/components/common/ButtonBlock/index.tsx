import React from "react";

import style from './ButtonBlock.module.scss';

const ButtonBlock = () => {
  console.log('this is button block')

  return(
    <div className={style.container}>
      <button className={style.btn} type='button'>Удар боевым кадилом</button>
      <button className={style.btn} type='button'>Вертушка левой пяткой</button>
      <button className={style.btn} type='button'>Каноничный фаербол</button>
      <button className={style.btn} type='button'>Магический блок</button>
    </div>
  )
}

export default ButtonBlock;
