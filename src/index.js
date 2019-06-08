import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Store from './store/Store';
import {Provider} from 'react-redux';

ReactDOM.render(
    <Provider store={Store}>
        <App /> 
    </Provider>,
    document.getElementById('root')
);
