import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Index extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Productos React</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}