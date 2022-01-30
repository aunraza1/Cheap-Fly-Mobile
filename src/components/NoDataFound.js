import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {images} from '../constants';

const NoDataFound = () => {
  return (
    <View style={styles.main_view}>
      <Image resizeMode="contain" style={styles.img} source={images.no_data} />
    </View>
  );
};
export default NoDataFound;

const styles = StyleSheet.create({
  main_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '100%',
  },
});