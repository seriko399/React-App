import React, {Component} from 'react';
import Tile from './tile';
import './tiles.css';

export default class Tiles extends Component {
    render () {
        return (
            <React.Fragment>
                <div className="tiles">
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                </div>
            </React.Fragment>
        );
    }
}