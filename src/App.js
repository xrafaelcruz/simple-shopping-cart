import React from 'react';
import { Provider } from 'react-redux';
import Routes from 'routes';

import store from 'redux/store';

import GlobalStyle from 'styles/Global';

import Header from 'components/Header';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Header />
      <Routes />
    </Provider>
  );
}

export default App;
