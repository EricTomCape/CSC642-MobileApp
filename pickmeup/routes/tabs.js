import { createAppContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Logbook from '../tabs/logbook';
import Times from '../tabs/times';
import Settings from '../tabs/settings';

const MainTabs = createMaterialTopTabNavigator(
    // {
    //   Times: {
    //     tab: Times
    //   },
  
    //   Logbook: {
    //       tab: Logbook
    //   },
  
    //   Settings: {
    //       tab: Settings
    //   },
    // },
    // {
    //   initialRouteName: "Times", 
    //   tabBarOptions: {
    //     labelStyle: { color: 'white'},
    //     style: {backgroundColor: '#808080'}},
    // },
  );

export default createAppContainer(MainTabs);