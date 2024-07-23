import React from 'react';
import './App.css';
import Home from './pages/Home';
import Sun from './pages/Sun';
import Mercury from './pages/Mercury';
import Venus from './pages/Venus';
import Earth from './pages/Earth';
import Mars from './pages/Mars';
import Jupiter from './pages/Jupiter';
import Saturn from './pages/Saturn';
import Uranus from './pages/Uranus';
import Neptune from './pages/Neptune';
import Join from './pages/join';
import { Element } from 'react-scroll';

function App() {
  return (
    <>
 

      <Element name="home">
        <Home />
      </Element>
      <Element name="sun">
        <Sun />
      </Element>
      <Element name="mercury">
        <Mercury />
      </Element>
      <Element name="venus">
        <Venus />
      </Element>
      <Element name="earth">
        <Earth />
      </Element>
      <Element name="mars">
        <Mars />
      </Element>
      <Element name="jupiter">
        <Jupiter />
      </Element>
      <Element name="saturn">
        <Saturn />
      </Element>
      <Element name="uranus">
        <Uranus />
      </Element>
      <Element name="neptune">
        <Neptune />
      </Element>
      <Element name="join">
        <Join />
      </Element>
    </>
  );
}

export default App;
