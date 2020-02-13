import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import storage from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

import './Resource/css/style.css'

const { store, persistor } = storage()

const options = {
    timeout: 5000,
    position: positions.TOP_CENTER
};

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <AlertProvider template={AlertTemplate} {...options}>
                <App />
            </AlertProvider>
        </PersistGate>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
