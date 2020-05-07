import React, { useState } from 'react';
import {Text, View, TouchableOpacity, Picker, Modal} from 'react-native';
import styles from '../src/style';

import { updatePermissions, updateTBC, updateCB } from "../src/actions/settingActions";

import { connect } from 'react-redux';


  class Settings extends React.Component {

    constructor(props) {
      super(props);
      this.state = {modalVisible: false}
    }

    setModal(param) {
      this.setState({modalVisible: !param})
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
      cb: state.cb
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      updatePermissions: (perm) => {dispatch(updatePermissions(perm))},
      updateTBC: (tbc) => {dispatch(updateTBC(tbc))},
      updateCB: (cb) => {dispatch(updateCB(cb))}
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Settings);