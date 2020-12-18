import React, {useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';

import PhoneInput from 'react-native-phone-number-input';

import {Actions} from 'react-native-router-flux';

import styles from './../../assets/style';

const ResetPassword = () => {

  const [password, onChangePassword] = useState('');
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');

  // const phoneInput = useRef<PhoneInput>(null);

  return (
    <View style={styles.wrapper}>
      <View style={styles.login}>
        <View style={styles.formWrap}>
          <Image style={styles.formWrapIcon} source={require('../../assets/reset_password.png')}/>
          <View style={styles.formGroup}>
            <Text style={styles.formGroupLabel}>Phone number</Text>
            <PhoneInput
              defaultValue={value}
              defaultCode="SE"
              layout="first"
              onChangeText={(text) => {
                setValue(text);
              }}
              onChangeFormattedText={(text) => {
                setFormattedValue(text);
              }}
              containerStyle={styles.containerPhoneInput}
              textContainerStyle={styles.textContainerPhoneInput}
              withDarkTheme
              autoFocus
            />
          </View>


          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Send Code</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ResetPassword;
