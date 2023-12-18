import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect} from 'react';
import COLORS from '../constants/colors';
import { LinearGradient } from 'expo-linear-gradient';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Welcome');
    }, 5000);
  }, []);
  return (
    <LinearGradient
    style={styles.container}
    colors={[COLORS.secondary, COLORS.primary]}
>
    <View>
      <Image source={require('../images/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Muhass Consult</Text>
    </View>
    </LinearGradient>
  );
};

export default Splash;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    tintColor: '#fff',
  },
  title: {color: '#fff', fontSize: 20, fontWeight: '800', marginTop: 20},
});
