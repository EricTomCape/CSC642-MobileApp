import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, StatusBar, Image } from 'react-native';
import styles from '../../src/style';
import { render } from 'react-dom';
import { removeBlocked, addContact } from "../../src/actions/contactActions";

import { connect } from 'react-redux';

function BlockedNumber({ contact, removeBlocked, addContact}) {

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
            <TouchableOpacity onPress={() => {removeBlocked(contact.key); addContact(contact)}}
              style={{width: 100, height: 50, backgroundColor: 'green', alignItems: 'center', justifyContent: 'center', marginHorizontal: 20, borderRadius: 15}}>
              <Text style={styles.whiteText}>Unblock</Text>
            </TouchableOpacity>
        </View>
      </View>}
  </View>
  ); }
  
  class Blocked extends React.Component {

    render() {

    return(
      <View style={{backgroundColor: '#262626', flex: 1, alignContent: 'center', alignItems: 'center'}}>
      <FlatList  data={this.props.blocked}
      renderItem={({ item }) => <BlockedNumber contact={item} 
                                removeBlocked={this.props.removeBlocked}
                                addContact={this.props.addContact}/>}/>
   </View>
    );
    }
  }

  const mapStateToProps = (state) => {
    return {
      blocked: state.blocked
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      removeBlocked: (key) => {dispatch(removeBlocked(key))},
      addContact: (contact) => {dispatch(addContact(contact))}
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Blocked);