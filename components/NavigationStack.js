import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Button, } from 'react-native';
import SplitExpenseEditor from './SplitExpenseEditor'
import About from './About';
import ChatRoom from './ChatRoom';

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
          color="#ED50F1"
          onPress={() => navigation.navigate('About') }
        />
        <Button
          title="Split Expenses"
          color="#ED50F1"
          
          onPress={() => navigation.navigate('Split') }
        />
        <Button
          title="ChatRoom"
          color="#ED50F1"
          onPress={() =>navigation.navigate('Chat') }
        />
    </View>
  );
};

const AboutScreen = ({ navigation, route }) => {
  return (  
    <About name={'Jingnu'}></About>   
  );
};

const ChatScreen = ({ navigation, route }) => {
  return (
     <ChatRoom></ChatRoom>
  );
};

const SplitScreen = ({navigation, route}) => {
  return (
      <SplitExpenseEditor></SplitExpenseEditor>
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