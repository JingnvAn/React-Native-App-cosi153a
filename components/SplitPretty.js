import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Keyboard, ScrollView, SafeAreaView } from 'react-native';
import PopupWindow from './PopupWindow';
import Task from './Task';

export default function SplitPretty() {
    const [log, setLog] = useState();
    const [logs, setLogs] = useState([]);
  
    const completeTask = (index) => {
      let itemsCopy = [...logs];
      itemsCopy.splice(index, 1);
      setLogs(itemsCopy)
    }

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <Text style={styles.sectionTitle}>Recent Activities</Text>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled' >
                    <View style={styles.tasksWrapper}>
                        
                        <View style={styles.items}>
                        {/* This is where the tasks will go! */}
                        {logs.map((item, index) => {
                            return (
                                <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                                    <Task text={item} /> 
                                </TouchableOpacity>
                            )
                        })}
                        </View>
                    </View>    
                </ScrollView>
            </SafeAreaView>
            
            <View style={styles.writeTaskWrapper}>
                <PopupWindow addLog={(log) => setLog(log)} addLogs={(logs) => setLogs(logs)} logs={logs} /> 
            </View>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
    },
    tasksWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    items: {
        marginTop: 30,
    },
    header: {
        position: 'absolute',
        top: 30,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
    },
    writeTaskWrapper: {
      position: 'absolute',
      bottom: 20,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
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
  });


