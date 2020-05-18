import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import {InputArray} from "./features/inputArray/InputArray";
import {Array} from "./features/Array/Array";

function App() {
  return (
    <div className="App">
      <header className="App-header">

        {/*<InputArray/>*/}
        <Array />
      </header>
    </div>
  );
}

export default App;
