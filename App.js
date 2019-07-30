import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import RouterComponents from './src/Routers';
import ReduxThunk from 'redux-thunk';
import { View } from 'native-base';


export default class App extends Component {

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <RouterComponents />
      </Provider>
    );
  }
}
