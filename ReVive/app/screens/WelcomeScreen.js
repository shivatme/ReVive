import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import AppButton from '../components/AppButton';
import routes from '../navigation/routes';
import colors from '../config/colors';

function WelcomeScreen({navigation}) {
  return (
    <View style={styles.background}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../assets/logo/logo-blue.png')}
        />
        <Text style={styles.tagLine}>Reviving Used Treasures</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          title="Login"
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: colors.green,
  },
  buttonsContainer: {
    position: 'relative',
    padding: 20,
    width: '100%',
  },
  logo: {
    top: 150,
    width: 300,
    height: 80,
  },
  logoContainer: {
    alignItems: 'center',
    position: 'absolute',
    top: 70,
  },
  tagLine: {
    top: 370,
    fontSize: 20,
    fontWeight: '300',
    paddingVertical: 20,
    color: colors.black,
  },
});

export default WelcomeScreen;
