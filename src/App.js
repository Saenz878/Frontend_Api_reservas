import React from 'react';
import AppRouter from './Componentes/routerComponent';
import Navbar from './Componentes/Navbar';
import Container from '@material-ui/core/Container';
import './App.css';

function App() {
  return (
    <div >
      <Navbar/>
      <Container>
        <AppRouter/>
        </Container>


    </div>
  );
}

export default App;
