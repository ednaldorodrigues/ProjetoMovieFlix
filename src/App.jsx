import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Movie from './Components/Movie/Movie';
import Search from './Components/Search/Search';
import Header from './Components/Header/Header';
import { Container, GlobalStyled } from './AppStyle';

function App() {

  return (
    <Container>
      <BrowserRouter>
        <GlobalStyled />
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/movie/:id' element={<Movie/>}/>
          <Route path='/search' element={<Search/>}/>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
