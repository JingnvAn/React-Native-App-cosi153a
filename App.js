import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import NavigationStack from './components/NavigationStack';
import Quiz2 from './practiceComponents/Quiz2';
import Profile from './practiceComponents/Profile';
import ExpenableText from './components/ExpenableText';
import Quiz3 from './practiceComponents/Quiz3';
import CovidDemo from './practiceComponents/CovidDemo';
import Quiz4 from './practiceComponents/Quiz4';

export default function App() {
  return(
    <>
      {/* <NavigationStack></NavigationStack> */}
      {/* <ExpenableText title='A' text='this is the expanable text'></ExpenableText> */}
      {/* <Quiz3></Quiz3> */}
      <Quiz4 />
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
