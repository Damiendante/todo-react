import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import Todos from './components/Todo/Todos';
import Login from './components/Login/Login';
import { Switch, Route } from 'react-router-dom';
import Header from './components/UI/Header';
import Footer from './components/UI/Footer';
import { Context } from './Context';

function App() {
    const { username } = useContext(Context);
    const dispatch = useDispatch;
    return (
        <div className="App">
            {username && <Header username={username} />}
            <Switch>
                <Route exact path="/(|home)">
                    <Login />
                </Route>

                <Route path="/todos">
                    <Todos />
                </Route>
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
