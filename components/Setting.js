import React from "react";
import { View, StyleSheet, TextInput, Text, Image, Button, ImageBackground} from "react-native";

const Setting = ({ name, email, password }) => {
    const [userName, setUserName] = React.useState(name || "Jingnu");
    const [userEmail, setUserEmail] = React.useState(email || 'no email provided :(');
    const [userPassword, setUserPassword] = React.useState(password || '12345');
    const [imageName, setImageName] = React.useState('cartonProfilePic-circle');

    const [inputName, setInputName] = React.useState('');
    const [inputImageName, setInputImageName] = React.useState('');
    const [inputEmail, setInputEmail] = React.useState('');
    const [inputPassword, setInputPassword] = React.useState('');

    const onSave = () => {
        if(inputName != '')
            setUserName(inputName);
        if(inputEmail != '')
            setUserEmail(inputEmail);
        if(inputPassword != '')
            setUserPassword(inputPassword);
        if(inputImageName != '')
            setImageName(inputImageName);

        setInputImageName('');
        setInputName('');
        setInputEmail('');
        setInputPassword('');
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageBox}>
                <ImageBackground style={styles.image} resizeMode='cover' source={require(`../assets/${imageName}.png`)} />
            </View>  
            <View style={{flexDirection: 'column', flex: 1}}>
                <Text style={styles.name}><Text style={styles.guidingText}>Username:</Text> {userName}</Text>
                <Text style={styles.name}><Text style={styles.guidingText}>Email:</Text> {userEmail}</Text>
            </View>
            <View style={styles.setting}>
                <Text style={styles.guidingText}>Username: </Text>
                <TextInput value={inputName} onChangeText={setInputName} style={styles.input} placeholder= {'new username ...'}/>
                <Text style={styles.guidingText}>Email:</Text>
                <TextInput value={inputEmail}  onChangeText={setInputEmail} style={styles.input} placeholder= 'roselyn@example.com'/>
                <Text style={styles.guidingText}>Password:</Text>
                <TextInput value={inputPassword} onChangeText={setInputPassword} style={styles.input} placeholder= 'new password ...'/>
                <Text style={styles.guidingText}>Image Name:</Text>
                <TextInput value={inputImageName} onChangeText={setInputImageName} style={styles.input} placeholder= 'new image name ...' />
                <Button 
                    title='save all'
                    color="#ED50F1"
                    onPress={onSave}
                />
                
            </View>
        </View>
    )
}

// storeData converts the value stored in the info variable to a string
  // which is then writes into local storage using AsyncStorage.setItem.
  const storeData = async (value) => {
    try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('@quiz_info', jsonValue)
    console.log('just stored '+jsonValue)
    } catch (e) {
    console.log("error in storeData ")
    console.dir(e)
    // saving error
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",   
        alignItems: "center"
    },
    image: {
        justifyContent: "center",
        width: 120,
        height:120,
    },
    imageBox: { 
        justifyContent:'center',
        alignItems:'center',
        marginTop: 50,
        marginBottom:5,
    },
    userInfo: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },
    setting: {
        flex: 3,
        justifyContent: "center",
        marginBottom: 40,
    },
    name: {
        fontSize: 20,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
    guidingText: {
        fontSize: 20, 
        color: 'grey'
    }
})

export default Setting;