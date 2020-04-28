import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, StatusBar, Image } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import styles from '../src/style';

import Contacts from './contacts/contact';
import Recent from './contacts/recent';
import Blocked from './contacts/blocked';

const LogBookTabs = createMaterialTopTabNavigator();

export default function Logbook() {
    return (
      <View style={{backgroundColor: '#262626', flex: 1, alignContent: 'center'}}>
            <NavigationContainer independent={true}>
              <LogBookTabs.Navigator swipeEnabled={false} initialRouteName="Recent" tabBarOptions={{
                  labelStyle: { color: 'white'},
                  style: {backgroundColor: '#808080'}}}>
                <LogBookTabs.Screen name="Recent" component={Recent} />
                <LogBookTabs.Screen name="Contacts" component={Contacts} />
                <LogBookTabs.Screen name="Blocked" component={Blocked} />
              </LogBookTabs.Navigator>
      </NavigationContainer>
  
            <StatusBar hidden={true}/>
    </View>
    ); }