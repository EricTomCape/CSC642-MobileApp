import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, Picker, Modal} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from '../src/style';

import { addTime, removeTime, updateTime } from "../src/actions/timeActions";

import { connect } from 'react-redux';

const setTimes = [
    {
      conPerms: "All",
      tbc: "3",
      cb: "3",
      startTime: '00:00',
      endTime: '00:00',
      key: 1,
    },
  ];
  
  function ModularTimes({time, removeTime, updateTime}) {
    const [viewState, setState] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);

    const [tempPerms, setTempPerms] = useState(time.conPerms);
    const [tempTBC, setTempTBC] = useState(time.tbc);
    const [tempCB, setTempCB] = useState(time.cb);

    const [tempTime1, setTemp1] = useState(time.startTime);
    const [tempTime2, setTemp2] = useState(time.endTime);
  
    const clickHandler = () => {
      setState(!viewState);}
  
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
                  removeTime(time.key);
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
            <Text style={{fontSize: 30}}>{time.startTime} - {time.endTime} </Text>
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
              <Picker selectedValue={tempPerms}
                onValueChange={(itemValue, itemIndex) => setTempPerms(itemValue)}
                style={{height: 18, width: 120}}>
                <Picker.Item label="All" value="All"/>
                <Picker.Item label="Contact List" value="ContactList"/>
                <Picker.Item label="None" value="None"/>
              </Picker></Text>
            </View>
  
            <View style={{marginVertical: 20}}>
              <Text style={{ fontSize: 18, textAlign: 'center'}}> Number of Calls -  
              <Picker selectedValue={tempCB}
                onValueChange={(itemValue, itemIndex) => setTempCB(itemValue)}
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
              <Picker selectedValue={tempTBC}
                onValueChange={(itemValue, itemIndex) => setTempTBC(itemValue)}
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
                  updateTime({
                    startTime: tempTime1,
                    endTime: tempTime2,
                    cb: tempCB,
                    tbc: tempTBC,
                    conPerms: tempPerms,
                    key: time.key
                  });
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

class Times extends React.Component {
    render() {
    return (
      <View style={styles.container}>
  
    <FlatList  data={this.props.times}
      renderItem={({ item }) => <ModularTimes time={item}
                                removeTime={this.props.removeTime}
                                updateTime={this.props.updateTime}/>}/>
  
      <TouchableOpacity style={styles.addButton} onPress={() => this.props.addTime()}>
        <Text style={{color: 'white', fontSize: 14 }}>Add</Text>
      </TouchableOpacity>
    </View>
    ); }
  }

  const mapStateToProps = (state) => {
    return {
      times: state.times,
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      addTime: () => {dispatch(addTime())},
      removeTime: (key) => {dispatch(removeTime(key))},
      updateTime: (time) => {dispatch(updateTime(time))},
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Times);