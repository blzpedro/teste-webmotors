import React from 'react';
import Home from './Home/index'
import { HomeContainer } from './Home/styles'

function App() {
  return (
    <HomeContainer>
      <img src="https://www.webmotors.com.br/assets/img/webmotors.svg?t=81" alt="logo webmotors"/>
      <Home/>
    </HomeContainer>
  );
}

export default App;
