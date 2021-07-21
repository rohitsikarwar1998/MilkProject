/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';

const useAuth = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  console.log(initializing);

  // Handle user state changes
  function onAuthStateChanged(us) {
    setUser(us);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return [user, initializing];
};

export default useAuth;
