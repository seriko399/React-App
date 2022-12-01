import React, {Component}  from 'react';
import './tile.css';

export default class Tile extends Component {
    render () {
        return (
            <React.Fragment>
                <div className="tile">
                    <span>AppName</span>
                </div>
            </React.Fragment>
        );
    }
}
