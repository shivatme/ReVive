import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import OfflineNotice from './app/components/OfflineNotice';
import AuthNavigator from './app/navigation/AuthNavigator';
import {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import AuthContext from './app/auth/context';
import authStorage from './app/auth/storage';
import {Provider} from 'react-redux';
import store from './app/redux/store';

export default function App() {
  const [user, setUser] = useState();

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  useEffect(() => {
    restoreUser();
  }, []);

  return (
    <>
      <StatusBar backgroundColor="black" />
      <Provider store={store}>
        <AuthContext.Provider value={{user, setUser}}>
          <OfflineNotice />
          <NavigationContainer theme={navigationTheme}>
            {user ? <AppNavigator /> : <AuthNavigator />}
          </NavigationContainer>
        </AuthContext.Provider>
      </Provider>
    </>
  );
}
