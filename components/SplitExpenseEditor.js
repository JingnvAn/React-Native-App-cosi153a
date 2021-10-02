import React from "react";
import { View, StyleSheet, TextInput, Text, Button, ImageBackground} from "react-native";

const SplitExpenseEditor = () => {
    const [text, onChangeText] = React.useState("");
    const [number, onChangeNumber] = React.useState();
    // const [userName, setUserName] = React.useState("Jingnu");
    // const [partnerName, setPartnerName] = React.useState("Chris");
    const userName = 'Jingnu';
    const partnerName = 'Chris';

    return (
        <>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerProfile}>
                        <View style={styles.image}>
                            <ImageBackground source={require('../assets/cartonProfilePic-circle.png')} resizeMode="cover" style={styles.image} />
                        </View>   
                        <Text style={styles.name}>{userName}</Text>                        
                    </View>
                    <View style={styles.headerDirection}>

                    </View>
                    <View style={styles.headerProfile}>
                        <View style={styles.image}>
                            <ImageBackground source={require('../assets/chris-circle.png')} resizeMode="cover" style={styles.image} /> 
                        </View>
                        <Text style={styles.name}>{partnerName}</Text>                        
                    </View>
                </View>
                <View style={styles.inputBoxes}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder="Description"
                        keyboardType="text"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="Total Amount. We'll do the calculation for you"
                        keyboardType="numeric"
                    />
                </View>
                <View style={styles.buttonBox}>
                    <View style={styles.button}>
                        <Button
                            title= "cancel"
                            color="#FDB9FC"
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title= "save"
                            color="#ED50F1"
                        /> 
                    </View>  
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 12,
        alignItems: 'stretch',
        justifyContent:'strech',
    },
    inputBoxes: {
        flexDirection: "column",
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