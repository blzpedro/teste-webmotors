import React from 'react';
import Home from './Home/index'
import { HomeContainer } from './Home/styles'

function App() {
  return (
    <HomeContainer>
      <div style={{maxWidth: '933px', margin: '0 auto'}}>
        <img src="https://www.webmotors.com.br/assets/img/webmotors.svg?t=81" alt="logo webmotors" className="logo"/>
      </div>
      <Home/>
    </HomeContainer>
  );
}

export default App;
