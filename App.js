import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Setting from './components/Setting';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import SplitPretty from './components/SplitPretty';


const Tab = createMaterialBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.title}>Welcome to Split!</Text>
    </View>
  );
}

const SplitScreen = ({navigation, route}) => {
  return (
    <SplitPretty />
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
            return <Ionicons name={iconName} size={25} color={color} />;
          },
        })}
        barStyle={{ backgroundColor: '#ffff' }}
      >
        <Tab.Screen name="Home" component={HomeScreen}  />
        <Tab.Screen name="Settings" component={SettingScreen} options={{ title: 'Settings'}} initialParams={{me:'Jingnu', partner:'Chris'}} />
        <Tab.Screen name="Split" component={SplitScreen} options={{ title: 'Split Expenses'}} initialParams={{me:'Jingnu', partner: 'Chris'}} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  title: {
    color: "#F194FF",
    fontSize: 35,
    fontWeight: 'bold'
  },
});
