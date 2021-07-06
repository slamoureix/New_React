import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
    createStore,
    combineReducers
} from 'redux';

import {Provider} from 'react-redux';

import RoutesReducer from './reducer/routes';
import HomeProject from './reducer/homeProject';
import TypographieReducer from './reducer/typographie';
import GraphismeReducer from './reducer/graphisme';
import UxUiReducer from './reducer/uxui';
import DeveloppementReducer from './reducer/developpement';
import DiversReducer from './reducer/divers';

//dernier reducer à être intégré dans les routes globales.
import AdminReducer from './reducer/admin';

const AllRoutesReducer = combineReducers({
    RoutesReducer,
    UxUiReducer,
    TypographieReducer,
    DeveloppementReducer, 
    GraphismeReducer,
    DiversReducer,
    AdminReducer
});
const rootReducer = combineReducers({AllRoutesReducer, HomeProject});
const GeneralStore = createStore(rootReducer);

ReactDOM.render(
    <StrictMode>
    <Provider store = {GeneralStore}>
    <App/>
    </Provider>
    </StrictMode>
,document.getElementById('root'));