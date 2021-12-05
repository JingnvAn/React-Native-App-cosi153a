import React from 'react';
import { StyleSheet, Text, Button, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SplitExpenseEditor from './components/SplitExpenseEditor'
import Setting from './components/Setting';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to Split!</Text>
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
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            } else if (route.name === 'Split'){
              iconName = focused ? 'md-add-circle' : 'md-add-circle-outline';
            }
            return <Ionicons name={iconName} size={'25'} color={color} />;
          }
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Home'}} />
        <Tab.Screen name="Settings" component={SettingScreen} options={{ title: 'Settings'}} initialParams={{me:'Jingnu', partner:'Chris'}} />
        <Tab.Screen name="Split" component={SplitScreen} options={{ title: 'Split Expenses'}} initialParams={{me:'Jingnu', partner: 'Chris'}} />
      </Tab.Navigator>
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
