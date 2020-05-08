import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button, Picker, Modal, StatusBar, Image } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer} from '@react-navigation/native';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appReducer from './AppReducer';

import Logbook from './tabs/logbook';
import Times from './tabs/times';
import Settings from './tabs/settings';

import CallDetectorManager from 'react-native-call-detection';



/*
  onEvent.Call() => {
    if(call == incoming) {
      //add call to array as num + time
      //walk through the array, check time vs incoming
      //check num vs incoming
      //increment cnt variable for number of calls within time limit
      if (cnt >= setLimit){
        //set volume to max
      }
      //set cnt = 0
    } else (call == disconnecting) {

    }
  }


*/

const store = createStore(appReducer);



const MainTabs = createMaterialTopTabNavigator();

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.startListenerTapped = this.startListenerTapped.bind(this);
  }





  async componentDidMount() {
    this.startListenerTapped();
}



    startListenerTapped() {
      console.log("I ran.");
      this.callDetector = new CallDetectorManager((event, phoneNumber) => {
      // For iOS event will be either "Connected",
      // "Disconnected","Dialing" and "Incoming"
    
      // For Android event will be either "Offhook",
      // "Disconnected", "Incoming" or "Missed"
      // phoneNumber should store caller/called number
      console.log("I also ran.");
    
      if (event === 'Incoming') {
        // Do something call got incoming
        console.log("I ran.");
        }
      
      },
       // if you want to read the phone number of the incoming call [ANDROID], otherwise false
      ()=>{}, // callback if your permission got denied [ANDROID] [only if you want to read incoming number] default: console.error
      {
      title: 'Phone State Permission',
      message: 'This app needs access to your phone state in order to react and/or to adapt to incoming calls.'
      } // a custom permission request message to explain to your user, why you need the permission [recommended] - this is the default one
      )
    }

render() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainTabs.Navigator initialRouteName="Times" tabBarOptions={{
            labelStyle: { color: 'white'},
            style: {backgroundColor: '#808080'}}}>
          <MainTabs.Screen name="Logbook" component={Logbook} />
          <MainTabs.Screen name="Times" component={Times} />
          <MainTabs.Screen name="Settings" component={Settings} />
        </MainTabs.Navigator>
      </NavigationContainer>
    </Provider>
  );}
}

