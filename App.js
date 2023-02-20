import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import Toast from 'react-native-toast-message';
import SplashScreen from 'react-native-splash-screen';

import { Store } from './src/redux/store/Store';
import Navigation from './src/navigation/Navigation';

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={Store}>
      <Navigation />
      <Toast />
    </Provider>
  );
}


export default App;
