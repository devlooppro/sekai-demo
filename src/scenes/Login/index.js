import React, {useState, useRef } from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';

import PhoneInput from "react-native-phone-number-input";

import {Actions} from 'react-native-router-flux';

import styles from './../../assets/style';

const Login = () => {

  const [password, onChangePassword] = useState('');
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");

  // const phoneInput = useRef<PhoneInput>(null);

  return (
    <View style={styles.wrapper}>
      <View style={styles.login}>
        <View style={styles.formWrap}>
          <Image style={styles.formWrapIcon} source={require('../../assets/login-icon.png')}/>
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

          <View style={styles.formGroup}>
            <Text style={styles.formGroupLabel}>Password</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={text => onChangePassword(text)}
              value={password}
              secureTextEntry={true}
            />
            <TouchableOpacity onPress={Actions.ResetPassword} style={{alignSelf:'flex-end', marginVertical:8}}>
              <Text style={{color:"#8698ff"}}>Forgot your password</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
