
   
import React, { useState } from "react";
import {View,Text,TextInput, SafeAreaView, Button} from 'react-native';
import {useValue} from './ValueContext';

const Login = ({ navigation }) => {
   return(
      <SafeAreaView>
         <Button title='Go back' onPress={() => navigation.goBack()} />
      </SafeAreaView>
   )
}

export default Login