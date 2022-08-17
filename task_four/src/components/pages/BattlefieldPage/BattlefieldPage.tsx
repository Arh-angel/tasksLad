import React, { useEffect, useState } from 'react';
import MageContainer from '../../../containers/MageContainer';
import MonsterContainer from '../../../containers/MonsterContainer';
import { useAppSelector } from '../../../hooks/storeHooks';
import { selectStart, selectVictoriesMage, selectVictoriesMonster } from '../../../store/slice/gameSlice/gameSlice';
import ButtonBlock from '../../common/ButtonBlock';
import ModalWindow from '../../common/ModalWindow';
import SelectLevel from '../../common/SelectLevel';

import style from './BattlefieldPage.module.scss';

const BattelefieldPage = () => {
  const [modalWindowOpen, setModalWindowOpen] = useState(false);

  const victoriesMonster = useAppSelector(selectVictoriesMonster);
  const victoriesMage = useAppSelector(selectVictoriesMage);
  const statusGame = useAppSelector(selectStart);

  const handlerModalWindowOpen = () => {
    setModalWindowOpen(!modalWindowOpen);
  };

  useEffect(() => {
    if (!statusGame) {
      if (victoriesMonster > 0 || victoriesMage > 0) {
        setModalWindowOpen(true);
      }
    }
  }, [statusGame]);

  return (
    <div className={style.container}>
      <MonsterContainer />
      <span className={style.check}>{`${victoriesMonster} : ${victoriesMage}`}</span>
      {modalWindowOpen ? <ModalWindow modalWindowOpen={handlerModalWindowOpen} /> : ''}
      <ButtonBlock />
      <SelectLevel />
      <MageContainer />
    </div>
  );
};

export default BattelefieldPage;
