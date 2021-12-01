import React from "react";
import { View, StyleSheet, TextInput, Text, Button, ImageBackground, FlatList} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplitExpenseEditor = ({ navigation, me, partner }) => {
    // const userName = 'Jingnu';
    // const partnerName = 'Chris';
    const [text, onChangeText] = React.useState("");
    const [number, onChangeNumber] = React.useState(0);
    const [logs, setLogs] = React.useState([]);


    React.useEffect(() => {
        getData();
    },[])

    const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@log_info');
          let data = null
          if (jsonValue!=null || jsonValue.length != 0) {
            data = JSON.parse(jsonValue);
            setLogs(data);
            console.log('just set logs', data);
          } else {
            console.log('just read a null value from Storage');
          }
        } catch(e) {
          console.log("error in getData ")
          console.dir(e)
        }
  }

    // storeData converts the value stored in the info variable to a string
    // which is then writes into local storage using AsyncStorage.setItem.
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

    const onPressSave = () => {
        const temp = {description: text, amount:number, from:me, to:partner}
        storeData(temp);
        console.log(temp)
    }

    return (    
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerProfile}>
                    <View style={styles.image}>
                        <ImageBackground source={require('../assets/cartonProfilePic-circle.png')} resizeMode="cover" style={styles.image} />
                    </View>   
                    <Text style={styles.name}>{me}</Text>                        
                </View>
                <View style={styles.headerDirection}>

                </View>
                <View style={styles.headerProfile}>
                    <View style={styles.image}>
                        <ImageBackground source={require('../assets/chris-circle.png')} resizeMode="cover" style={styles.image} /> 
                    </View>
                    <Text style={styles.name}>{partner}</Text>                        
                </View>
            </View>
            <View style={styles.inputBoxes}>
                <Text style={{fontSize: 15, fontWeight: '600'}}>Add a new Split event</Text>
                <Text>Description</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Description"
                    keyboardType="twitter"
                />
                <Text>Amount</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="Total Amount. We'll do the calculation for you"
                    keyboardType="numeric"
                />
                <Text style={{fontSize: 15, fontWeight: '600'}}>Recent Activites</Text>
            </View>
            <View styles= {styles.logsBox}>
                <FlatList
                        data={logs}
                        renderItem={({item}) => <Text style={styles.item}>{item.from} transfered ${item.amount} to {item.to}, for {item.description}</Text>}
                    />
            </View>
            <View style={styles.buttonBox}>
                <View style={styles.button}>
                    <Button title="Go back" onPress={() => navigation.goBack()} />
                </View>
                <View style={styles.button}>
                    <Button title= "Save" onPress={onPressSave} /> 
                </View>  
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 12,
        alignItems: "stretch",
        justifyContent: 'space-around',
    },
    inputBoxes: {
        flexDirection: "column",
    },
    logsBox: {
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    header: {
        flexDirection: 'row',
        padding: 15,
    },
    headerProfile: {
        flexDirection: 'column',
        flex:2,    
        alignItems: 'center'
    },
    image: {
        justifyContent: "center",
        width: 50,
        height:50,
        marginBottom: 5,
    },
    headerDirection: {
        flex:3
    },
    name: {
        fontSize: 18,
    },
    buttonBox: {
        padding: 10,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        padding: 10,
    }
})

export default SplitExpenseEditor;