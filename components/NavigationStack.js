import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Button, } from 'react-native';
import SplitExpenseEditor from './SplitExpenseEditor'

// All of the route configuration is specified as props to our navigator.
const {Screen, Navigator} = createNativeStackNavigator(); 

const NavigationStack = () => {
  return (
    <NavigationContainer>
      <Navigator> 
        <Screen name="Home" component={HomeScreen} options={{ title: 'Welcome to Split' }}/>
        <Screen name="About" component={AboutScreen} />
        <Screen name="Chat" component={ChatScreen} />
        <Screen name="Split" component={SplitScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
      <View style={styles.homeScreen}>
        <Button
          title="About"
          onPress={() => navigation.navigate('About', { name: 'Jane', greeting:'Hi!' })}
        />
        <Button
          title="Split Expenses"
          onPress={() => navigation.navigate('Split')}
        />
        <Button
          title="ChatRoom"
          onPress={() =>
            navigation.navigate('Chat', { name: 'Tim', greeting:'Konichi-wa' })
          }
        />
    </View>
  );
};

const AboutScreen = ({ navigation, route }) => {
  return (
    <>
      <Text>{route.params.greeting}, this is {route.params.name}'s profile</Text>
    </>
  );
};

const ChatScreen = ({ navigation, route }) => {
  return (
    <>
      <Text>{route.params.greeting}, this is {route.params.name}'s profile</Text>
    </>
  );
};

const SplitScreen = ({navigation, route}) => {
  return (
    <>
      <SplitExpenseEditor></SplitExpenseEditor>
    </>
  )
}

const styles = StyleSheet.create({
    homeScreen:{
        flexDirection: 'row',
        margin:"25px",
        padding:'10px',
        justifyContent: 'space-around',
    }
  });



export default NavigationStack;