import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import PopupWindow from './PopupWindow';
import Task from './Task';

export default function SplitPretty() {
    const [logs, setLogs] = useState([]);


    const deleteTask = (index) => {
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
                        {logs.map((item, index) => {
                            return (<TouchableOpacity key={index}  onPress={() => deleteTask(index)}>
                                        {/* <Task text={item.title} amount={item.amount} timestamp={item.timestamp} paidPerson={item.paidPerson} />  */}
                                        <Task text={item.description} amount={item.amount} timestamp={item.timestamp} paidPerson={item.paidPerson}  /> 
                                    </TouchableOpacity>)
                        })}
                        </View>
                    </View>    
                </ScrollView>
            </SafeAreaView>    
            <View style={styles.addButtonBox}>
                <PopupWindow  addLogs={(logs) => setLogs(logs)} logs={logs} /> 
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
    addButtonBox: {
      position: 'absolute',
      bottom: 20,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
  });


