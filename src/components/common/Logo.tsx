import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import LogoImg from '../../assets/images/Logo.png';

const Logo = () => {
  return (
    <View style={styles.wrap}>
      <Image source={LogoImg} style={styles.img} />
      <Text style={styles.text}>Newsblue</Text>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  img: {
    width: 27,
    height: 27,
  },
  wrap: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingBottom: 20,
    paddingTop: 10,
  },
  text: {
    paddingLeft: 10,
    fontSize: 20,
    color: '#0145AA',
    fontFamily: 'Poppins',
  },
});
