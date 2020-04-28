import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, StatusBar, Image } from 'react-native';
import styles from '../../src/style';

const RECENT = [
    {
      key: '1',
      name: 'Matthew "Cookie" Davis',
      number: "1-650-576-9102",
    },

    {
      key: '2',
      name: 'Matthew "Cookie" Davis',
      number: "1-650-576-9102",    
    },

    {
      key: '3',
      name: 'Matthew "Cookie" Davis',
      number: "1-650-576-9102",    
    },

    {
      key: '4',
      name: 'Matthew "Cookie" Davis',
      number: "1-650-576-9102",    
    },

    {
      key: '5',
      name: 'Matthew "Cookie" Davis',
      number: "1-650-576-9102",    
    },

    {
      key: '6',
      name: 'Matthew "Cookie" Davis',
      number: "1-650-576-9102",    
    },
  ];

  function ContactNumber({ name, number }) {

    const [viewState, setState] = useState(false);
  
    const clickHandler = () => {
      setState(!viewState);}
  
    return(
    <View style={{marginVertical: 10}}>
    <TouchableOpacity style={styles.contact} onPress={clickHandler}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <View style={{justifyContent: 'center'}}>
        <Text>  Name: { name } </Text>
        <Text>  Number: {number}</Text>
      </View>
  
    </TouchableOpacity>
    {viewState && 
        <View style={{width: 300, height: 75, backgroundColor: 'darkgrey', borderRadius: 15}}>
          <View style={{flex: 1,  alignItems: 'center', justifyContent: 'center'}}> 
            <TouchableOpacity
              style={{width: 100, height: 50, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center', marginHorizontal: 20, borderRadius: 15}}>
              <Text style={styles.whiteText}>Block</Text>
              </TouchableOpacity>
          </View>
        </View>}
    </View>
    ); }
  
  export default function Contacts() {
    return(
        <View style={{alignItems: 'center', backgroundColor: '#262626', flex: 1}}>
          <FlatList  data={RECENT}
          renderItem={({ item }) => <ContactNumber name={item.name} number={item.number}/>}/>
       </View>
    );
  }