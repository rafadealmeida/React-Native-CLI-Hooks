import React from 'react';
import Header from './components/Header';
import Produtores from './components/Produtores';

function Home() {
  return (
    <>
      <Produtores header={Header} />
    </>
  );
}

export default Home;
