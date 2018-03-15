import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';
import Dishes from "./containers/Dishes/Dishes";
import Layout from "./components/Layout/Layout";

class App extends Component {
  render() {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Dishes}/>
                <Route render={() => <h1>404 page not found</h1>}/>
            </Switch>
        </Layout>
    );
  }
}

export default App;
