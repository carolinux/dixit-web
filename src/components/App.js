import React from 'react';
import Store from './store/Store';
import AppNavigation from './AppNavigation';

function App() {
  return (
    <div className='app'>
      <Store>
        <AppNavigation />
      </Store>
    </div>
  );
}

export default App;
