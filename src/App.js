import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import MainForm from './components/MainForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <MainForm/>
        </div>
      </Provider>
    );
  }
}

export default App;
