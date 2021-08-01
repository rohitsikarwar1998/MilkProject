import auth from '@react-native-firebase/auth';

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
