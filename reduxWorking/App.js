import React from 'react';
import Router from './navigation/Router';
import Store from './context/Store';
import { Provider as StoreProvider } from 'react-redux'
const App = () => {
  return  (
    <StoreProvider store={Store}>
      <Router />
    </StoreProvider>
  );
};
export default App;
