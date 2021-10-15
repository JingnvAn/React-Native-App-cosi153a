import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import NavigationStack from './components/NavigationStack';
import Quiz2 from './practiceComponents/Quiz2';
import Profile from './practiceComponents/Profile';

export default function App() {
  return(
    <>
      <NavigationStack></NavigationStack>
      
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:10,
    borderWidth:3,
    borderColor:'black',
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
});
