import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#667fff',
  },
  logo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  login: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formWrap: {
    width: '90%',
  },
  formWrapIcon: {
    alignSelf: 'center',
    marginBottom: 40,
  },
  formGroup: {
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  formGroupLabel: {
    color: '#fff',
    marginBottom: 5,
  },
  textInput: {
    backgroundColor: '#8297ff',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 6,
  },
  containerPhoneInput: {
    borderRadius: 6,
    backgroundColor: '#8297ff',
    width: '100%',
  },
  textContainerPhoneInput: {
    backgroundColor: '#8297ff',
    borderRadius: 6,
    paddingVertical: 15,
  },
  submitButton: {
    borderRadius: 6,
    padding: 15,
    backgroundColor: '#4b60e1',
    alignItems: 'center',
  },
  submitButtonText: {
fontWeight:'bold',
    color: "#fff",
    fontSize:16
  }
});

export default styles;
