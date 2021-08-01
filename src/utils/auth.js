import {CommonActions} from '@react-navigation/native';

export const resetStack = (name, navigation) => {
  navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{name: name}],
      key: null,
    }),
  );
};
