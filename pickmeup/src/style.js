import {StyleSheet} from 'react-native';

export default StyleSheet.create(
    {
        container: {
            backgroundColor: '#262626',
            flex: 1,
            alignContent: 'center',
          },
        
          whiteText: {
            color: 'white',
            textAlign: 'center',
          },
        
          headerButtons: {
            flexDirection: 'row',
            paddingVertical: 23,
          },
        
          resetbutton: {
            borderRadius: 10,
            marginHorizontal: 50,
            height: 30,
            marginVertical: 10, 
            backgroundColor: '#990000',
            alignItems: 'center',
            justifyContent: 'center',
          },
        
          addButton: {
            borderRadius: 10,
            marginHorizontal: 50,
            height: 30,
            marginVertical: 10, 
            backgroundColor: 'green',
            alignItems: 'center',
            justifyContent: 'center',
          },
        
          modal: {
            borderRadius: 20,
            width: 300,
            height: 300,
            backgroundColor: 'darkgrey',
            justifyContent: 'center',
            alignItems: 'center'
          },
        
          contact: {
            borderRadius: 15,
            height: 75,
            width: 300,
            backgroundColor: 'darkgrey',
            alignContent: 'center',
            flex: 1,
            flexDirection: 'row',
          },
        
          tinyLogo: {
            width: 75,
            height: 75,
          },
        
          seperator: {
            height: 1,
            marginVertical: 10,
            backgroundColor: 'white',
          },
        
          timeChange: {
            width: 300,
            height: 500,
            backgroundColor: 'darkgrey',
            flex: 1,
            borderRadius: 30
          },
        
          modalDelete: {
            borderRadius: 20,
            width: 350,
            height: 200,
            backgroundColor: 'darkgrey',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 2,
            borderColor: 'black',
          }, 
    });