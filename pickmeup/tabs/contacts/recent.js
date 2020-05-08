import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, StatusBar, Image } from 'react-native';
import styles from '../../src/style';

import { connect } from 'react-redux';
import { addBlocked, addContact, removeRecent } from '../../src/actions/contactActions';

  function RecentNumber({ contact, addBlocked, addContact, removeRecent }) {

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
          <View style={{flex: 1,  alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}> 

          <TouchableOpacity
              style={{width: 100, height: 50, backgroundColor: 'green', alignItems: 'center', justifyContent: 'center', marginHorizontal: 20, borderRadius: 15}}>
              <Text style={styles.whiteText} onPress={() => {
                addContact(contact);
                removeRecent(contact.key);
              }}>Add</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{width: 100, height: 50, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center', marginHorizontal: 20, borderRadius: 15}}>
              <Text style={styles.whiteText} onPress={() => {
                addBlocked(contact);
                removeRecent(contact.key);
              }}>Block</Text>
              </TouchableOpacity>
          </View>
        </View>}
    </View>
    ); }

class Recent extends React.Component {
  render() {
  return(
    <View style={{alignItems: 'center', backgroundColor: '#262626', flex: 1}}>
      <FlatList  data={this.props.recent}
      renderItem={({ item }) => <RecentNumber contact={item} addBlocked={this.props.addBlocked} 
                                addContact={this.props.addContact}
                                removeRecent={this.props.removeRecent}/>}/>
   </View>
  );}
}

const mapStateToProps = (state) => {
  return {
    recent: state.recent
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeRecent: (key) => {dispatch(removeRecent(key))},
    addContact: (contact) => {dispatch(addContact(contact))},
    addBlocked: (contact) => {dispatch(addBlocked(contact))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recent);