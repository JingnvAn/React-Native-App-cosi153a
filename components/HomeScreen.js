import { useNavigation } from '@react-navigation/core';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { auth } from '../firebase/config';

const HomeScreen = () => {
    const navigation = useNavigation()
    const [user, setUser] = useState();
    
    useEffect(()=> {
        setUser(auth.currentUser?.email);
    }, [])

    const handleSignOut = () => {
        auth
        .signOut()
        .then(() => {
            navigation.navigate("Login")
        })
        .catch(error => alert(error.message))
    }
    console.log('email',auth.currentUser?.email);
    return (
        <View style={styles.container}>
        <Text>Email: {user}</Text>
        <TouchableOpacity
            onPress={handleSignOut}
            style={styles.button}
        >
            <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
   button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
})