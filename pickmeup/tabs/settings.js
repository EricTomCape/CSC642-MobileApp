import React, { useState } from 'react';
import {Text, View, TouchableOpacity, Picker, Modal} from 'react-native';
import styles from '../src/style';

export default function Settings() {
    const [selectedValue1, setSelectedValue1] = useState("All");
    const [selectedValue2, setSelectedValue2] = useState("3");
    const [selectedValue3, setSelectedValue3] = useState("3");
    const [modalVisible, setModalVisible] = useState(false);
    return(
      <View style={styles.container}>
        <View style={{flex: 1}}>
  
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
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
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.whiteText}>Yes</Text>
              </TouchableOpacity>
  
              <TouchableOpacity
                style={{width: 100, height: 50, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center', marginHorizontal: 20, borderRadius: 15}}
                onPress={() => {
                  setModalVisible(!modalVisible);
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
        <Picker selectedValue={selectedValue1}
          onValueChange={(itemValue, itemIndex) => setSelectedValue1(itemValue)}
          style={{height: 18, width: 120, color: 'white'}}>
          <Picker.Item label="All" value="All"/>
          <Picker.Item label="Contact List" value="ContactList"/>
          <Picker.Item label="None" value="None"/>
        </Picker></Text>
      </View>
  
      <View style={{marginVertical: 20}}>
        <Text style={{color: 'white', fontSize: 18, textAlign: 'center'}}> Number of Calls -  
        <Picker selectedValue={selectedValue2}
          onValueChange={(itemValue, itemIndex) => setSelectedValue2(itemValue)}
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
        <Picker selectedValue={selectedValue3}
          onValueChange={(itemValue, itemIndex) => setSelectedValue3(itemValue)}
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
                  setModalVisible(!modalVisible);
                }}>
        <Text style={styles.whiteText}>Reset</Text>
      </TouchableOpacity>
  
    </View>
    );}