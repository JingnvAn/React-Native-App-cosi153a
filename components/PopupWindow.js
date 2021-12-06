import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import KeyboardAvoidingInputBox from './KeyboardAvoidingInputBox';
import { Ionicons } from '@expo/vector-icons';
const PopupWindow = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <View style={{flexDirection:'row', justifyContent:'space-evenly', alignItems:'center'}}>
                    <View style={{flex:5}}>
                        <Text style={styles.modalText}>Split An Expense</Text>
                    </View>
                    <View style={{flex:0.1}}></View>
                    <View style={{flex:1}}>
                        <Pressable
                            style={[styles.button, ]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Ionicons name='close-circle' color='black' size='30' />
                        </Pressable>
                    </View>
                </View>
                <KeyboardAvoidingInputBox  addLogs={props.addLogs} logs={props.logs} size='30'/>
            </View>
        </View>
      </Modal>
        <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => {
             setModalVisible(true)
        }}>
        <Text style={styles.textStyle}>Add           </Text>
        </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  textStyleClose: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf:'center',
  }
});

export default PopupWindow;