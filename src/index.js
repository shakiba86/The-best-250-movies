import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './default.css';
import './global.css';
import Router from './Router';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Fragment>
    <Router></Router>
</Fragment>
);


