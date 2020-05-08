import React, { useState } from 'react';
import {Text, View, TouchableOpacity, Picker, Modal} from 'react-native';
import styles from '../src/style';

import { updatePermissions, updateTBC, updateCB } from "../src/actions/settingActions";
import { addRecent, trimRecent } from "../src/actions/contactActions";

import { connect } from 'react-redux';
import { SliderVolumeController } from 'react-native-volume-controller';


  class Settings extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        modalVisible: false,
        dummyContact:  {
          contactType: "person",
          firstName: "Dad",
          id: "132",
          imageAvailable: false,
          lookupKey: "3569i9f4664e0ad002f4",
          name: "Dad",
          phoneNumbers: [
             {
              id: "234",
              isPrimary: 0,
              label: "mobile",
              number: "650-906-3024",
              type: "2",
            },
          ],
        },
      }
    }

    setModal(param) {
      this.setState({modalVisible: !param})
    }

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

    recentTest = (contact) => {

      let testContact = {
        ...contact,
        timeRecieved: Date.now()/1000
      }

      this.props.addRecent(contact);

      let timeBetween = parseInt(this.props.tbc) * 60;
      let callsBetween = parseInt(this.props.cb);

      console.log(timeBetween);
      console.log(callsBetween);

      let recentArray = this.props.recent.filter(element => 
                                                ((testContact.timeRecieved-element.timeRecieved) <= timeBetween) 
                                                && (contact.phoneNumbers[0].number === element.phoneNumbers[0].number));

      console.log(recentArray);
      console.log()
      if (recentArray.length >= callsBetween){
        console.log(recentArray.length);
        //SliderVolumeController.change(100);
      }

      this.props.trimRecent();

    }

    render() {
    return(

      <View style={styles.container}>
        <View style={{flex: 1}}>
  
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
        >
          <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center'}}>
            <View style={styles.modal}>
              <View style={{flex: 1,  alignItems: 'center', justifyContent: 'center' }}>
                <Text>Reset setting to default?</Text>
              </View>
  
              <View style={{flex: 1,  alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
              <TouchableOpacity
                style={{width: 100, height: 50, backgroundColor: 'green', alignItems: 'center', justifyContent: 'center', marginHorizontal: 20, borderRadius: 15}}
                onPress={() => {
                  this.setModal(this.state.modalVisible);
                  this.props.updateCB('3');
                  this.props.updatePermissions("All");
                  this.props.updateTBC('3');
                }}
              >
                <Text style={styles.whiteText}>Yes</Text>
              </TouchableOpacity>
  
              <TouchableOpacity
                style={{width: 100, height: 50, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center', marginHorizontal: 20, borderRadius: 15}}
                onPress={() => {
                  this.setModal(this.state.modalVisible);
                }}
              >
                <Text style={styles.whiteText}>No</Text>
              </TouchableOpacity>
  
              </View>
            </View>
          </View>
        </Modal>
  
      <View style={{marginVertical: 20}}>
        <Text style={{color: 'white', fontSize: 18, textAlign: 'center'}}> Permitted Contacts -  
        <Picker selectedValue={this.props.conPerms}
          onValueChange={(itemValue, itemIndex) => this.props.updatePermissions(itemValue)}
          style={{height: 18, width: 120, color: 'white'}}>
          <Picker.Item label="All" value="All"/>
          <Picker.Item label="Contact List" value="ContactList"/>
          <Picker.Item label="None" value="None"/>
        </Picker></Text>
      </View>
  
      <View style={{marginVertical: 20}}>
        <Text style={{color: 'white', fontSize: 18, textAlign: 'center'}}> Number of Calls -  
        <Picker selectedValue={this.props.cb}
          onValueChange={(itemValue, itemIndex) => this.props.updateCB(itemValue)}
          style={{height: 18, width: 120, color: 'white'}}>
          <Picker.Item label="1" value="1"/>
          <Picker.Item label="2" value="2"/>
          <Picker.Item label="3" value="3"/>
          <Picker.Item label="4" value="4"/>
          <Picker.Item label="5" value="5"/>
        </Picker></Text>
      </View>
  
      <View style={{marginVertical: 20}}>
        <Text style={{color: 'white', fontSize: 18, textAlign: 'center'}}> Time Between Calls -  
        <Picker selectedValue={this.props.tbc}
          onValueChange={(itemValue, itemIndex) => this.props.updateTBC(itemValue)}
          style={{height: 18, width: 120, color: 'white'}}>
          <Picker.Item label="1 Minute" value="1"/>
          <Picker.Item label="2 Minutes" value="2"/>
          <Picker.Item label="3 Minutes" value="3"/>
          <Picker.Item label="4 Minutes" value="4"/>
          <Picker.Item label="5 Minutes" value="5"/>
        </Picker></Text>
      </View>
      </View>
  
      <TouchableOpacity style={styles.resetbutton}
                  onPress={() => {
                    this.recentTest(this.state.dummyContact);
                }}>
        <Text style={styles.whiteText}>Test Recent</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.resetbutton}
                  onPress={() => {
                    this.setModal(this.state.modalVisible);
                }}>
        <Text style={styles.whiteText}>Reset</Text>
      </TouchableOpacity>
  
    </View>
    );}
  }

  const mapStateToProps = (state) => {
    return {
      conPerms: state.conPerms,
      tbc: state.tbc,
      cb: state.cb,
      contacts: state.contacts,
      recent: state.recent,
      blocked: state.blocked
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      updatePermissions: (perm) => {dispatch(updatePermissions(perm))},
      updateTBC: (tbc) => {dispatch(updateTBC(tbc))},
      updateCB: (cb) => {dispatch(updateCB(cb))},
      addRecent: (contact) => {dispatch(addRecent(contact))},
      trimRecent: () => {dispatch(trimRecent())}
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Settings);