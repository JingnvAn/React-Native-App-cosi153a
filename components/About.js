import React from "react";
import { View, StyleSheet, TextInput, Text, Image, Button, ImageBackground} from "react-native";

const About = ({ name }) => {
    const [userName, setUserName] = React.useState(name || "");

    return (
        <View style={styles.container}>
            <View style={styles.imageBox}>
                <ImageBackground style={styles.image} resizeMode='cover' source={require('../assets/cartonProfilePic-circle.png')} />
            </View>  
            <View style={styles.userInfo}>
                <Text style={styles.name}>{userName}</Text>
            </View>
            <View style={styles.setting}>
                <Button 
                    title='Edit display name'
                    color="#ED50F1"
                />
                <Button 
                    title='Change profile picture'
                    color="#ED50F1"
                />
                <Button 
                    title='Reset password'
                    color="#ED50F1"
                />
                <Button 
                    title='Logout'
                    color="#ED50F1"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",   
        alignItems: 'center',
    },
    image: {
        justifyContent: "center",
        width: 120,
        height:120,
    },
    imageBox: {
        flex: 1,
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
        justifyContent:'space-evenly'
    },
    name: {
        fontSize: 28,
    },
})

export default About;