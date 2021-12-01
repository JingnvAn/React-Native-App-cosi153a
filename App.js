import React from 'react';
import { StyleSheet, Text, Button, View, ImageBackground, SafeAreaView } from 'react-native';
// import NavigationStack from './components/NavigationStack';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplitExpenseEditor from './components/SplitExpenseEditor'
// import Setting from './components/Setting';
// import ChatRoom from './components/ChatRoom';
import Login from './components/Login';
import Setting from './components/Setting';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Add A Split Transaction"
        onPress={() => {
          navigation.navigate('SplitScreen', {
            me: 'Jingnu',
            partner: 'Chris',
          });
        }}
      />
      <Button 
        title="Setting"
        onPress={() => {
          navigation.navigate('SettingScreen', {
            me: 'Jingnu',
            partner: 'Chris',
          });
        }}
      />
    </View>
  );
}

const SplitScreen = ({navigation, route}) => {
  return (
    <SplitExpenseEditor 
      navigation={navigation} 
      me={route.params.me} 
      partner={route.params.partner} 
    />
  )
}

const LoginScreen = ({ navigation, route }) => {
  return (
    <Login 
      navigation={navigation}
     />
  )
}

const SettingScreen = ({ navigation, route }) => {
  return (
    <Setting 
      navigation={navigation}
      name={route.params.me}
    />
  )
};

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name ="Home" 
          component={HomeScreen} 
        />
        <Stack.Screen name="SplitScreen" component={SplitScreen} options={{ title: 'Split Expenses'}} />
        <Stack.Screen name='LoginScreen' component={LoginScreen} options={{ title: 'Log In'}}/>
        <Stack.Screen name='SettingScreen' component={SettingScreen} options={{ title: 'Log In'}}/>
      </Stack.Navigator>
    </NavigationContainer>
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
  homeScreen:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
