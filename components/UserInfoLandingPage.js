import React, {useState, useEffect, useContext} from "react";
import { View, StyleSheet, ImageBackground, Text} from "react-native";

const UserInfoLandingPage = ({userName}) => {
    return(
        <View style={styles.container}>
            <View style={styles.imageBox}>
                <ImageBackground style={styles.image} resizeMode='cover' source={require('../assets/cartonProfilePic-circle.png')} />
            </View>  
            <View style={styles.userInfo}>
                <Text style={styles.name}>{userName}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageBox: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        marginTop: 50,
        marginBottom:5,
    },
    image: {
        justifyContent: "center",
        width: 120,
        height:120,
    },
    userInfo: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },
    name: {
        fontSize: 28,
    },
})

export default UserInfoLandingPage;