import auth from '@react-native-firebase/auth';
import {CommonActions} from '@react-navigation/native';

export async function signInWithPhoneNumber(setConfirm, phoneNumber) {
  phoneNumber = '+91' + phoneNumber;
  const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
  setConfirm(confirmation);
}

export async function confirmCode(confirm, code, loginSuccess) {
  try {
    await confirm.confirm(code);
    loginSuccess();
  } catch (error) {
    console.log('Invalid code.');
  }
}

export const resetStack = (name, navigation) => {
  navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{name: name}],
      key: null,
    }),
  );
};
