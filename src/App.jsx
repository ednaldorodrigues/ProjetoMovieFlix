import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Movie from './Components/Movie/Movie';
import Search from './Components/Search/Search';
import Header from './Components/Header/Header';
import { createGlobalStyle } from 'styled-components';

const GlobalStyled = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
  h1, h2, p, a {
    margin: 0;
    padding: 0;
  }
  img {
    display: block;
    max-width: 100%;
  }
`;

function App() {

  return (
    <BrowserRouter>
      <GlobalStyled />
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/movie/:id' element={<Movie/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
