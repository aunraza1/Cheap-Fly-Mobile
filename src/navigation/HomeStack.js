import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Hotels from '../screens/Hotels';
import { Flights } from '../screens/Flights/Flights.js';
import Booking from '../screens/Booking';
import { FlightModal } from '../screens/Flights/FlightModal/FlightModal';
import ItemDetail from '../screens/ItemDetail';
import Cars from '../screens/Cars';
const Stack = createNativeStackNavigator();
function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Homes" component={Home} />
      <Stack.Screen name="Hotels" component={Hotels} />
      <Stack.Screen name="Flights" component={Flights} />
      <Stack.Screen name="FlightModal" component={FlightModal} />
      <Stack.Screen name="Cars" component={Cars} />
      <Stack.Screen name="ItemDetail" component={ItemDetail} />
      <Stack.Screen name="Booking" component={Booking} />
    </Stack.Navigator>
  );
}
export default HomeStack;
