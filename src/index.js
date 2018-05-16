import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import {
    Router,
    Route,
    Switch,
} from 'react-router';
import history from './projectTools/history';
import registerServiceWorker from './projectTools/registerServiceWorker';
import {Provider} from 'react-redux';
import store from './store';
import Login from "./components/Login";

// ReactDOM.render(<App/>, document.getElementById('root'));
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route exact path='/login' component={Login}/>
                <Route component={App}/>
            </Switch>
        </Router>
    </Provider>, document.getElementById('root')
);
registerServiceWorker();
