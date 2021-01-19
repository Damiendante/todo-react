import React from 'react';
import ReactDOM from 'react-dom';
import { ContextProvider } from './Context';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { reducers } from './reducers';
import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
    <React.StrictMode>
        <ContextProvider store={store}>
            <Router>
                <App />
            </Router>
        </ContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);


if (import.meta.hot) {
    import.meta.hot.accept();
}
