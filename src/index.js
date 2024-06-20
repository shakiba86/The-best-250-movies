import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './default.css';
import './global.css';
import Router from './Router';
// import GlobalStyle from './style/GlobalStyle';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Fragment>
    {/* <GlobalStyle/> */}
    <Router></Router>
  </Fragment>
);


