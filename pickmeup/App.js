import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button, Picker, Modal, StatusBar, Image } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer} from '@react-navigation/native';

import Logbook from './tabs/logbook';
import Times from './tabs/times';
import Settings from './tabs/settings';

const MainTabs = createMaterialTopTabNavigator();

export default function App() {

  return (

    <NavigationContainer>
      <MainTabs.Navigator initialRouteName="Times" tabBarOptions={{
          labelStyle: { color: 'white'},
          style: {backgroundColor: '#808080'}}}>
        <MainTabs.Screen name="Logbook" component={Logbook} />
        <MainTabs.Screen name="Times" component={Times} />
        <MainTabs.Screen name="Settings" component={Settings} />
      </MainTabs.Navigator>
    </NavigationContainer>

  );
}

