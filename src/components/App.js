import React from 'react';
import Store from './store/Store';
import AppNavigation from './AppNavigation';

function App() {
  return (
    <Store>
      <AppNavigation />
    </Store>
  );
}

export default App;
