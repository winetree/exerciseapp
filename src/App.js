import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CommonUtil from './resources/js/Common_util.js'
import NavigationBar from './common/NavigationBar.js'

class App extends Component {

  state = {
    num_1 : 1
  }

  addNum = () => {
    this.setState({
      num_1 : this.state.num_1 + 1
    })
  }

  render() {
    
    return (
      <div className="App">
        <NavigationBar></NavigationBar>
        <h1>hello world</h1>
        <p>{this.state.num_1}</p>
        <button onClick={this.addNum}>버튼</button>

        <button onClick={CommonUtil.getNumber}>버튼</button>
        
      </div>
    );
  }
}

export default App;
