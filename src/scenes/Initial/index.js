import React from 'react';
import {View, Image} from 'react-native';

import {Actions} from 'react-native-router-flux';

import styles from './../../assets/style';

const Initial = () => {
  setTimeout(() => {
    Actions.Login();
  }, 1000);
  return (
    <View style={styles.wrapper}>
      <View style={styles.logo}>
        <Image source={require('../../assets/sekai_logo.png')}/>
      </View>
    </View>
  );
};

export default Initial;
