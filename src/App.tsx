import React from 'react';
import Header from "./Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/home/components/Home';
import Cart from './components/cart/components/Cart';
import "./App.scss";

const App: React.FC = () => {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Header />
          <Route exact path ='/'><Home/></Route>
          <Route exact path='/cart'><Cart/></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
