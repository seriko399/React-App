import React from "react";
import Tiles from './components/tiles/tiles';
import './App.css';
import Navbar from "./components/navbar/Navbar";

export default function App() {
    return (
        <React.Fragment>
            <div>
                <Navbar />
            </div>
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
