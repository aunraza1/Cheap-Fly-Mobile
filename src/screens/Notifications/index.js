import React from 'react';
import { View } from 'react-native';
import { NoDataFound } from '../../components';

function Notifications() {
  return (
    <View style={{ flex: 1, padding: 40, backgroundColor: 'white' }}>
      <NoDataFound />
    </View>
  );
}
export default Notifications;
