/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState, useEffect } from 'react';
import {SafeAreaView, Text, Button } from 'react-native';
import Provider from '../store/provider';
import Router from '../navigation/router'

const App = () => {


  return (
      <Provider>
          <Router/>
      </Provider>
  )
};

export default App;
