import React, { useContext, useEffect, useState } from 'react';

import MagePage from '../components/pages/MagePage/MagePage';
import AppContext from '../context/AppContext';

const MageContainer = () => {
  const { mage, magePhrase }:any = useContext(AppContext);

  const [currentMage, setCurrentMage] = useState({});
  const [currentMagePhrase, setCurrentMagePhrase] = useState({});

  useEffect(() => {
    setCurrentMage(mage);
  }, [mage]);

  useEffect(() => {
    setCurrentMagePhrase(magePhrase);
  }, [magePhrase]);

  return (
    <MagePage dialogText="hellow" />
  );
};

export default MageContainer;
