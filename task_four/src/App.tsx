import React from 'react';
import BattelefieldContainer from './containers/BattelefieldContainer';
import AppContext from './context/AppContext';

import { monsterPhrase, magePhrase } from './helpers/dialog';
import { monster, mage } from './helpers/heroes';

const state:{} = { monsterPhrase, magePhrase, monster, mage };

const App = () => (
  <AppContext.Provider value={state}>
    <BattelefieldContainer />
  </AppContext.Provider>
);

export default App;
