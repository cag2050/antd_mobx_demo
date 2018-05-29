import React from 'react';
import ReactDOM from 'react-dom';
import {
    Router,
    Route,
    Switch,
} from 'react-router';
import './index.css';
import App from './App';
import registerServiceWorker from './projectTools/registerServiceWorker';
import Login from "./components/Login";
// import axios from 'axios'
// import axiosWrapper from './projectTools/axiosWrapper'
import {Provider} from "mobx-react"
import store from './store'
// 引入mobx-react-router前，使用的history
// import history from './projectTools/history';
// 引入mobx-react-router，相关设置之：history
import createBrowserHistory from 'history/createBrowserHistory';
import {RouterStore, syncHistoryWithStore} from 'mobx-react-router';

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();
const history = syncHistoryWithStore(browserHistory, routingStore);

const stores = {
    // Key can be whatever you want
    routingStore: routingStore,
    // ...other stores
    ...store
};

// Add a request interceptor
// axios.interceptors.request.use(function (config) {
//   // Do something before request is sent
//   console.log('config =')
//   console.log(config)
//   return config;
// }, function (error) {
//   // Do something with request error
//   return Promise.reject(error);
// });
//
// // Add a response interceptor
// axios.interceptors.response.use(function (response) {
//   // Do something with response data
//   console.log('response =')
//   console.log(response)
//   return response;
// }, function (error) {
//   // Do something with response error
//   return Promise.reject(error);
// });

// axiosWrapper.get('/aaa')

ReactDOM.render(
    <Provider {...stores}>
        <Router history={history}>
            <Switch>
                <Route exact path='/login' component={Login}/>
                <Route component={App}/>
            </Switch>
        </Router>
    </Provider>
    , document.getElementById('root')
);
registerServiceWorker();
