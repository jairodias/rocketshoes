import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import GlobalStyleComponents from './styles/global';
import Header from './components/Header/index';

import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes />
      <GlobalStyleComponents />
    </BrowserRouter>
  );
}

export default App;
