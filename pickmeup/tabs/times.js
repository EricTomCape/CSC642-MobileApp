import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Picker, Modal} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from '../src/style';

const setTimes = [
    {
      startTime: '00:00',
      endTime: '00:00',
      key: 1,
    },
  
    {
      startTime: '00:00',
      endTime: '00:00',
      key: 2,
    },
  
    {
      startTime: '00:00',
      endTime: '00:00',
      key: 3,
    },
  
    {
      startTime: '00:00',
      endTime: '00:00',
      key: 4,
    },
  ];
  
  function ModularTimes({time1, time2, id}) {
    const [viewState, setState] = useState(true);
    const [time1State, set1State] = useState(time1.toString());
    const [time2State, set2State] = useState(time2.toString());
    const [selectedValue1, setSelectedValue1] = useState("All");
    const [selectedValue2, setSelectedValue2] = useState("3");
    const [selectedValue3, setSelectedValue3] = useState("3");
    const [tempTime1, setTemp1] = useState(time1State);
    const [tempTime2, setTemp2] = useState(time1State);
    const [modalVisible, setModalVisible] = useState(false);
  
    const clickHandler = () => {
      setState(!viewState);}
  
    const time1Handler = ( time ) => {
      set1State(time.toString());
    }
  
    const time2Handler = ( time ) => {
      set2State(time.toString());
    }
  
  
    return(
      <View style={{marginVertical: 10, alignItems: 'center'}}>
  
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
        >
          <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center'}}>
            <View style={styles.modalDelete}>
              <View style={{flex: 1,  alignItems: 'center', justifyContent: 'center' }}>
                <Text>Delete time frame?</Text>
              </View>
  
              <View style={{flex: 1,  alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
              <TouchableOpacity
                style={{width: 100, height: 50, backgroundColor: 'green', alignItems: 'center', justifyContent: 'center', marginHorizontal: 20, borderRadius: 15}}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  clickHandler();
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
  
      {viewState && <TouchableOpacity style={styles.contact} onPress={clickHandler}>
          <View style={{justifyContent: "center", alignItems: 'center', flex: 1}}>
            <Text style={{fontSize: 30}}>{time1State} - {time2State} </Text>
          </View>
        </TouchableOpacity>}
  
      {!viewState && <View style={styles.timeChange}>
        <View style={{flexDirection: 'row-reverse'}}>
          <TouchableOpacity style={{ width: 50, height: 20, justifyContent: "center", alignItems: "center", marginHorizontal: 20}} onPress={clickHandler}>
            <Text style={{marginHorizontal: 20, fontSize: 18, fontWeight: "bold"}}> - </Text>
          </TouchableOpacity>
        </View>
          <View style={{flex: 1, alignItems: "center"}}>
            <TextInput style={{width: 150, height: 60, textAlign: "center", fontSize: 30, marginVertical: 10, borderWidth: 1}} 
            value={tempTime1}
            onChangeText={(val) => setTemp1(val)}/>
  
            <TextInput style={{width: 150, height: 60, textAlign: "center", fontSize: 30, marginVertical: 10, borderWidth: 1}} 
              value={tempTime2}
              onChangeText={(val) => setTemp2(val)}/>
  
            <View style={{marginVertical: 20}}>
              <Text style={{ fontSize: 18, textAlign: 'center'}}> Permitted Contacts -  
              <Picker selectedValue={selectedValue1}
                onValueChange={(itemValue, itemIndex) => setSelectedValue1(itemValue)}
                style={{height: 18, width: 120}}>
                <Picker.Item label="All" value="All"/>
                <Picker.Item label="Contact List" value="ContactList"/>
                <Picker.Item label="None" value="None"/>
              </Picker></Text>
            </View>
  
            <View style={{marginVertical: 20}}>
              <Text style={{ fontSize: 18, textAlign: 'center'}}> Number of Calls -  
              <Picker selectedValue={selectedValue2}
                onValueChange={(itemValue, itemIndex) => setSelectedValue2(itemValue)}
                style={{height: 18, width: 100}}>
                <Picker.Item label="1" value="1"/>
                <Picker.Item label="2" value="2"/>
                <Picker.Item label="3" value="3"/>
                <Picker.Item label="4" value="4"/>
                <Picker.Item label="5" value="5"/>
              </Picker></Text>
            </View>
  
            <View style={{marginVertical: 20}}>
              <Text style={{ fontSize: 18, textAlign: 'center'}}> Time Between Calls -  
              <Picker selectedValue={selectedValue3}
                onValueChange={(itemValue, itemIndex) => setSelectedValue3(itemValue)}
                style={{height: 18, width: 120}}>
                <Picker.Item label="1 Minute" value="1"/>
                <Picker.Item label="2 Minutes" value="2"/>
                <Picker.Item label="3 Minutes" value="3"/>
                <Picker.Item label="4 Minutes" value="4"/>
                <Picker.Item label="5 Minutes" value="5"/>
              </Picker></Text>
            </View>
  
            <TouchableOpacity style={{ borderRadius: 15,
                  width: 150,
                  height: 50,
                  marginVertical: 10,
                  backgroundColor: 'green',
                  alignItems: "center",
                  justifyContent: "center",}}
                  onPress={() => {
                  clickHandler();
                  time1Handler(tempTime1);
                  time2Handler(tempTime2);
                }}>
              <Text style={styles.whiteText}>Set Time</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={{ borderRadius: 15,
                  width: 75,
                  height: 30,
                  marginVertical: 10,
                  backgroundColor: 'red',
                  alignItems: "center",
                  justifyContent: "center",}}
                  onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
              <Text style={styles.whiteText}>Delete</Text>
            </TouchableOpacity>
  
          </View>
        </View>}
      </View>
    );}

export default function Times() {
    return (
      <View style={styles.container}>
  
    <FlatList  data={setTimes}
      renderItem={({ item }) => <ModularTimes time1={item.startTime} time2={item.endTime} id={item.key}/>}/>
  
      <TouchableOpacity style={styles.addButton}>
        <Text style={{color: 'white', fontSize: 14 }}>Add</Text>
      </TouchableOpacity>
    </View>
    ); }
  
