import React, { Component } from 'react';
import './App.css';
import routes from './routes'
import { Link } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/">
          <p>Route 1</p>
        </Link>
        <Link to="/2">
          <p>Route 2</p>
        </Link>
        <Link to="/3">
          <p>Route 3</p>
        </Link>
        {routes}
      </div>
    );
  }
}

export default App;
