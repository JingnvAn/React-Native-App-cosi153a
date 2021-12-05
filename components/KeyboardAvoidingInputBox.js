import React, { useState } from 'react';
import { View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Keyboard, TouchableOpacity  } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function PopupWindow(props) {
  const [logName, setLogName] = useState();
  const [amount, setAmount] = useState();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
        <View style={styles.inner}>
            <View style={{flexDirection: 'row'}}>
                <MaterialIcons style={{alignSelf:'center'}} name='description' size={25} color={'skyblue'} />
                <TextInput style={styles.input} value={logName} placeholder={'Description'} onChangeText={(text) => {setLogName(text)}} />
            </View>
            <View style={{flexDirection: 'row'}}>
                <MaterialIcons style={{alignSelf:'center'}} name='attach-money' size={25} color={'gold'} />
                <TextInput style={styles.input} value={amount} placeholder={'Amount'} onChangeText={(input) => {setAmount(input)}} />
            </View>
            <TouchableOpacity onPress={() => {
                {console.log('pressed!')}
                props.addLog('hello!!');
                Keyboard.dismiss();
                props.addLogs([...props.logs, logName])
                props.addLog(null);
                }}
            >
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
});

