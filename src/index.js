/** @jsx jsx */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { jsx, css, ClassNames } from '@emotion/core';

import './index.css';
import App from './App';
import store from './redux/store';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter css={css`background-color: #171a21;`}>
            <Route path="/" component={App} />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
