import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/css/common.scss'
// import App from './App';
import Home from './pages/Home'
import Receipe from './pages/Receipe'
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css'

import {HashRouter as Router, Route} from 'react-router-dom' 

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path="/" component={Home}></Route>
      <Route path="/receipe" component={Receipe}></Route>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
