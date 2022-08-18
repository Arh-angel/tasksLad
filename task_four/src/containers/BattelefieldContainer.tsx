import React, { useEffect } from 'react';
import BattelefieldPage from '../components/pages/BattlefieldPage/BattlefieldPage';
import { useAppDispatch, useAppSelector } from '../hooks/storeHooks';
import { changeFlagStartMove, changeMageDefeated, changeMageMove, changeMonsterDefeated, changeStart, changeVictoriesMage, changeVictoriesMonster } from '../store/slice/gameSlice/gameSlice';
import { addMaxHealth, selectMageMove, selectMaxHealth } from '../store/slice/mageSlice/mageSlice';
import { addMaxHealthMonster, selectMonsterMoveCurrent, selectMaxHealthMonster } from '../store/slice/monsterSlice/monsterSlice';

const BattelefieldContainer = () => {
  const mageMove = useAppSelector(selectMageMove);
  const monsterMove = useAppSelector(selectMonsterMoveCurrent);
  const maxHealthMage = useAppSelector(selectMaxHealth);
  const maxHealthMonster = useAppSelector(selectMaxHealthMonster);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (mageMove && monsterMove && maxHealthMage > 0 && maxHealthMonster > 0 && mageMove.name !== '' && monsterMove.name !== '') {
      if (monsterMove.physicalDmg > mageMove.physicArmorPercents) {
        const health = maxHealthMage - (monsterMove.physicalDmg - mageMove.physicArmorPercents);
        dispatch(addMaxHealth(health));
      }

      if (mageMove.physicalDmg > monsterMove.physicArmorPercents) {
        const health = maxHealthMonster - (mageMove.physicalDmg - monsterMove.physicArmorPercents);
        dispatch(addMaxHealthMonster(health));
      }

      if (monsterMove.magicDmg > mageMove.magicArmorPercents) {
        const health = maxHealthMage - (monsterMove.magicDmg - mageMove.magicArmorPercents);
        dispatch(addMaxHealth(health));
      }

      if (mageMove.magicDmg > monsterMove.magicArmorPercents) {
        const health = maxHealthMonster - (mageMove.magicDmg - monsterMove.magicArmorPercents);
        dispatch(addMaxHealthMonster(health));
      }
    }
  }, [mageMove, monsterMove]);

  useEffect(() => {
    if (maxHealthMage < 1) {
      dispatch(changeMageDefeated(true));
      dispatch(changeVictoriesMonster());
      dispatch(addMaxHealth(0));
    }

    if (maxHealthMonster < 1) {
      dispatch(changeMonsterDefeated(true));
      dispatch(changeVictoriesMage());
      dispatch(addMaxHealthMonster(0));
    }
  }, [maxHealthMage, maxHealthMonster]);

  return (
    <BattelefieldPage />
  );
};

export default BattelefieldContainer;
