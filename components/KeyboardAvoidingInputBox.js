import React, { useState } from 'react';
import { Switch, View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, ImageBackground, Keyboard, TouchableOpacity  } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function PopupWindow(props) {
  const [logName, setLogName] = useState('');
  const [amount, setAmount] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);


  const onPressAdd = () => {
    let paidPerson = 'Jingnu';
    if(isEnabled){
        paidPerson = 'Chris';
    }
    const currLog = {description: logName, amount: amount, timestamp: new Date().toLocaleString(), paidPerson: paidPerson}; 
    props.addLogs([currLog, ...props.logs]);
    setLogName('');
    setAmount('');
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inner}>
                <View style={styles.header}>
                    <View style={styles.headerProfile}>
                        <View style={styles.image}>
                            <ImageBackground source={require('../assets/cartonProfilePic-circle.png')} resizeMode="cover" style={styles.square} />
                        </View>    
                    </View>
                    <View style={styles.headerDirection}>
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor="#f5dd4b"
                            ios_backgroundColor="#81b0ff"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                    <View style={styles.headerProfile}>
                        <View style={styles.image}>
                            <ImageBackground source={require('../assets/chris-circle.png')} resizeMode="cover" style={styles.square} /> 
                        </View>                
                    </View>
                </View>
                <View>
                    <Text style={{fontSize: 20, fontWeight: '600', alignSelf: 'center', color:'#2196F3'}}>{isEnabled ? 'Chris' : 'Jingnu' } Paid</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <MaterialIcons style={{alignSelf:'center'}} name='description' size={25} color={'skyblue'} />
                    <TextInput style={styles.input} value={logName} placeholder={'Description'} onChangeText={setLogName} />
                </View>
                <View style={{flexDirection: 'row'}}>
                    <MaterialIcons style={{alignSelf:'center'}} name='attach-money' size={25} color={'gold'} />
                    <TextInput style={styles.input} value={amount.toString()} keyboardType={'numeric'} placeholder={'Total amount, will be split into halves'} onChangeText={setAmount} />
                </View>
                <TouchableOpacity onPress={onPressAdd}>
                    <View style={styles.addWrapper}>
                        <Text>➕</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  container: {
    flex: 1
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around",
    flexDirection: 'column',
    alignItems: 'center'
  },
  switch: {
    flexDirection: 'row',
    alignContent: 'space-between',
  },
  square: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 15,
  },
  headerProfile: {
    flexDirection: 'column',
    flex:2,    
    alignItems: 'center',
    justifyContent: 'center',
},
image: {
    justifyContent: "center",
    width: 50,
    height:50,
    marginBottom: 5,
},
headerDirection: {
    flex:3,
    alignItems: "center",
    justifyContent: "center",
},
header: {
    flexDirection: 'row',
},
});

