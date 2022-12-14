import React from 'react';
import './App.css';
import Collapsed from './components/Collapsed';
import CollapsedSecond from './components/CollapsedSecond';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="container">
          <div class="title-bar">
            <div class="title prevent-select draggable">Milliman</div>
            <div class="control prevent-select">
              <button id="min">
                <img src="assets/svgs/solid/window-minimize.svg" alt="alt" />
              </button>
              <button id="max">
                <img src="assets/svgs/solid/window-maximize.svg" alt="alt" />
              </button>
              <button id="close">
                <img src="assets/svgs/solid/xmark.svg" alt="alt" />
              </button>
            </div>
          </div>
          <div class="contents">
            <div class="sidebar">
              <Collapsed />
              <CollapsedSecond />
            </div>
            <div class="main">{/* main 자리 */}</div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
