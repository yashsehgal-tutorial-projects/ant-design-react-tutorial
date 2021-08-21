import React from 'react';
import 'antd/dist/antd.css';
import { HashRouter, Route } from 'react-router-dom';
import Home from './views/Home';
import './styles/main.css';
export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          
          <Route 
            path="/" 
            component={Home} 
          />
          
          {/* <Route
            path="/projects"
            component={Projects}
          /> */}

        </HashRouter>
      </div>
    )
  }
}