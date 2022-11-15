import React from 'react';
import './App.css';
import Collapsed from './components/Collapsed';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="container">
          <div class="title-bar">
            <div class="title prevent-select draggable">Milliman</div>
            <div class="control prevent-select">
              <button id="min">
                <img
                  src="./src/fontawesome/svgs/solid/window-minimize.svg"
                  alt=""
                />
              </button>
              <button id="max">
                <img
                  src="./src/fontawesome/svgs/solid/window-maximize.svg"
                  alt=""
                />
              </button>
              <button id="close">
                <img src="./src/fontawesome/svgs/solid/xmark.svg" alt="" />
              </button>
            </div>
          </div>
          <div class="contents">
            <div class="sidebar">
              <Collapsed />
            </div>
            <div class="main"></div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;