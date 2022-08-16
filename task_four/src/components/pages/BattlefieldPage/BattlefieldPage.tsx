import React from 'react';
import MageContainer from '../../../containers/MageContainer';
import MonsterContainer from '../../../containers/MonsterContainer';
import ButtonBlock from '../../common/ButtonBlock';

import style from './BattlefieldPage.module.scss';

const BattelefieldPage = () => {
  console.log('this is field');
  return (
    <div className={style.container}>
      <MonsterContainer />
      <ButtonBlock />
      <MageContainer />
    </div>
  );
};

export default BattelefieldPage;
