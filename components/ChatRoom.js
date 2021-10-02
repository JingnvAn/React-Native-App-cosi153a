import React from "react";
import { View, StyleSheet, TextInput, Text, Image, Button, ImageBackground, FlatList} from "react-native";

const ChatRoom = () => {
    const [text, onChangeText] = React.useState("");
    
    return (
        <View style={styles.container}>
            <View style={styles.messageBox}>
                <FlatList
                    data={[
                    {key: 'demo'},
                    {key: 'chat'},
                    {key: 'room'},
                    {key: 'message'},
                    {key: 'displays'},
                    {key: 'here'},
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />
            </View>
            
            <View style={styles.typeArea}>
                <View style={{flex: 6}}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder="type your message here"
                        keyboardType="text"
                    />
                </View>
                <View style={{flex: 1, paddingRight: 8}}>
                    <Button 
                        title='send'
                        color='#ED50F1'
                    />
                </View>
                
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",   
        alignItems: 'strech',
    },
    messageBox: {
        flex: 4,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    typeArea: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center'
    },
    image: {
        justifyContent: "center",
        width: 120,
        height:120,
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
})

export default ChatRoom;