import React, {Component} from 'react';
import './App.css';
import MyLayout from './components/MyLayout'
import {withRouter} from 'react-router'
// import DevTools from 'mobx-react-devtools'

class App extends Component {
    render() {
        return (
            <div className="App">
                <MyLayout/>
                {/*<DevTools/>*/}
            </div>
        );
    }
}

export default withRouter(App);
