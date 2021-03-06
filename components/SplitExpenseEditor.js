import React, { useEffect, useState } from "react";
import { View, StyleSheet, TextInput, Text, Button, ImageBackground, FlatList, Switch, StatusBar, TouchableWithoutFeedback, Keyboard} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from "react-native-safe-area-context";

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);

const SplitExpenseEditor = ({ navigation, me, partner }) => {
    const [text, onChangeText] = useState('');
    const [number, onChangeNumber] = useState('');
    const [logs, setLogs] = useState([]);
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    useEffect(() => {
        getData();
    },[])

    const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@log_info');
          let data = null
          if (jsonValue != null || jsonValue.length != 0) {
            data = JSON.parse(jsonValue);
            setLogs(data);
            console.log('get value from storage', data);
          } else {
            console.log('just read a null value from Storage');
          }
        } catch(e) {
          console.log("error in getData ")
          console.dir(e)
        }
  }

    const storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('@log_info', jsonValue)
            console.log('just stored '+ jsonValue)
        } catch (e) {
            console.log("error in storeData ")
            console.dir(e)
        }
    }

    const clearAll = async () => {
        try {
          await AsyncStorage.clear()
          setLogs([]);
        } catch(e) {
          console.dir(e)
        }
    }

    const onPressSave = () => {
        console.log('pressed save, logs=', logs)
        const moneyFrom = isEnabled ? me : partner;
        const moneyTo = isEnabled ? partner : me;
        const log = {description: text, amount: parseFloat(number) / 2, from:moneyFrom, to:moneyTo, id:new Date().toLocaleString()};
        const inStorage = logs.reverse();
        inStorage.push(log);
        const reversed = inStorage.reverse();
        setLogs(reversed);
        storeData(logs);

        //clear text box
        onChangeNumber(0);
        onChangeText('');
        console.log('pushed and saved,logs=', logs)
    }

    const ListItem = ({ item }) => (
        <View style={styles.itemList}>
            <Text style={styles.item}>???? {item.description}</Text>
            <Text style={styles.item}>???? {item.amount}</Text>
            <Text style={styles.item}>???? {item.from} ?????? owes {item.to}</Text>
            <Text style={styles.item}>???? {item.id} </Text>
            {/* <View style={{flex:2, alignItems:'center', justifyContent:'center'}}>
                <Button title='??? Delete' onPress={onPressDelete(item.id)} />
            </View> */}
        </View>
        
    );

    const renderItem = ({ item }) => (
            <ListItem item={item}/>   
    );

    return (  
        // <DismissKeyboard> 
            <View style={styles.container}>
                <SafeAreaView style={styles.buttonBox}>                        
                    <Button color='black' title="Cancel" onPress={() => navigation.goBack()} />
                    <Button color='black' title= 'Settle all' onPress={clearAll} /> 
                    <Button color='black' title= "Save" onPress={onPressSave} />          
                </SafeAreaView> 
                <View style={styles.header}>
                    <View style={styles.headerProfile}>
                        <View style={styles.image}>
                            <ImageBackground source={require('../assets/cartonProfilePic-circle.png')} resizeMode="cover" style={styles.image} />
                        </View>   
                        <Text style={styles.name}>{me}</Text>                        
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
                            <ImageBackground source={require('../assets/chris-circle.png')} resizeMode="cover" style={styles.image} /> 
                        </View>
                        <Text style={styles.name}>{partner}</Text>                      
                    </View>
                </View>
                
                <View style={styles.inputBoxes}>
                    <Text style={{fontSize: 15, fontWeight: '600', alignSelf: 'center', marginTop: 20}}>Who paid this time?</Text>
                    <Text style={{fontSize: 15, fontWeight: '600', alignSelf: 'center', color:'blue'}}>{isEnabled ? `${partner} paid` : `${me} paid` }</Text>
                    <Text style={{fontSize: 15, fontWeight: '500', paddingLeft:10, paddingTop:20}}>???? Description</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder="Description"
                        keyboardType="twitter"
                    />
                    <Text style={{fontSize: 15, fontWeight: '500', paddingLeft:10}}>???? Amount</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeNumber}
                        value={number.toString()}
                        placeholder="Total Amount. We'll do the calculation for you"
                        keyboardType="numeric"
                    />
                </View>
                

                <View styles= {styles.listContainer}>
                    <Text style={{fontSize: 15, fontWeight: '600', paddingLeft:10, alignSelf: 'center', paddingTop:20, paddingBottom: 10}}>Recent Expenses</Text>
                    <FlatList
                        data={logs}
                        renderItem={renderItem}
                    />
                </View>   

            </View>
        // {/* </DismissKeyboard> */}
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'green',
    },
    buttonBox: {
        flex:0.7,
        backgroundColor:'red',
        flexDirection: 'row', 
        justifyContent:'space-between'
    },
    header: {
        flex:1,
        backgroundColor:'grey',
        flexDirection: 'row',
        // padding: 15,
    },
    inputBoxes: {
        flex:4,
        backgroundColor:'yellow',
        padding:15,
        flexDirection: "column",
        // marginBottom:20,
    },
    listContainer: {
        flex:6,
        backgroundColor:'green',
        marginTop: StatusBar.currentHeight || 0,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
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
    name: {
        fontSize: 18,
    },
    item: {
        fontSize: 15,
    },
    itemList: {
        flex:1,
        backgroundColor: "#FFDEFA",
        padding: 8,
        marginVertical: 10,
        marginHorizontal: 25, 
        marginBottom:3
    },
    box: {
        width: 50,
        height: 50,
    },
})

export default SplitExpenseEditor;