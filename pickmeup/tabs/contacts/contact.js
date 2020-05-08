import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, StatusBar, Image } from 'react-native';
import styles from '../../src/style';
import * as Contacts from 'expo-contacts';
import * as Permissions from 'expo-permissions';

import { addBlocked, removeContact, setContacts } from "../../src/actions/contactActions";


import { connect } from 'react-redux';


  function ContactNumber({ contact, addBlocked, removeContact}) {

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
        <Text>  Name: { contact.name } </Text>
        <Text>  Number: {contact.phoneNumbers[0].number}</Text>
      </View>
  
    </TouchableOpacity>
    {viewState && 
        <View style={{width: 300, height: 75, backgroundColor: 'darkgrey', borderRadius: 15}}>
          <View style={{flex: 1,  alignItems: 'center', justifyContent: 'center'}}> 
            <TouchableOpacity
              style={{width: 100, height: 50, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center', marginHorizontal: 20, borderRadius: 15}}
              onPress={() => {addBlocked(contact); removeContact(contact.key)}}>
              <Text style={styles.whiteText}>Block</Text>
              </TouchableOpacity>
          </View>
        </View>}
    </View>
    ); }
  
  class Contactlst extends React.Component {

    async componentDidMount () {
          // Ask for permission to query contacts.
    const permission = await Permissions.askAsync(Permissions.CONTACTS);
  
    if (permission.status !== 'granted') {
      // Permission was denied...
      return;
    }
    const contacts = await Contacts.getContactsAsync({
      fields: [
        Contacts.Fields.PhoneNumbers
      ],
      pageSize: 10,
      pageOffset: 0,
    });
    if (contacts.total > 0) {
      this.props.setContacts(contacts);
    }
    }

    render() {
    return(
        <View style={{alignItems: 'center', backgroundColor: '#262626', flex: 1}}>
          <FlatList  data={this.props.contacts}
          renderItem={({ item }) => <ContactNumber contact={item} 
                                    addBlocked={this.props.addBlocked}
                                    removeContact={this.props.removeContact}/>}/>
       </View>
    );}
  }



  const mapStateToProps = (state) => {
    return {
      contacts: state.contacts
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      setContacts: (contacts) => {dispatch(setContacts(contacts))},
      addBlocked: (contact) => {dispatch(addBlocked(contact))},
      removeContact: (key) => {dispatch(removeContact(key))}
    }
  }


  export default connect(mapStateToProps, mapDispatchToProps)(Contactlst);