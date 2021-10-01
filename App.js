import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import NavBar from './components/Navbar';

export default function App() {
  return(
    <>
      <NavBar></NavBar>
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
