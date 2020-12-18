import React from 'react';
import {

  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Router from './src/Router';

const App: () => React$Node = () => {
  return (
    <>
      <View>
        <Router/>
      </View>
    </>
  );
};

export default App;
