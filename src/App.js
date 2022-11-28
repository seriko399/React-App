import React from "react";
import Tiles from './components/tiles/tiles';
import './App.css'

function App() {
  return (
      <React.Fragment>
          <div className={'container'}>
              <div className={'side-space'}></div>
              <div className={'main'}>
                  <Tiles />
              </div>
              <div className={'side-space'}></div>
          </div>
      </React.Fragment>
  );
}

export default App;
