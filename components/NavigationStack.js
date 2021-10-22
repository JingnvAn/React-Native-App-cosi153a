import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Button, TextInput, } from 'react-native';
import SplitExpenseEditor from './SplitExpenseEditor'
import Setting from './Setting';
import ChatRoom from './ChatRoom';
import UserInfoLandingPage from './UserInfoLandingPage';

const buttonColor = "#ED50F1";
// All of the route configuration is specified as props to our navigator.
const {Screen, Navigator} = createNativeStackNavigator(); 


const NavigationStack = () => {
  const [userName, setUserName] = React.useState('Jingnu An');
  const UserInfoContext = React.createContext(userName);

  return (
    <NavigationContainer>
      <UserInfoContext.Provider value= {userName}>
        <Navigator> 
          <Screen name="Home" component={HomeScreen} options={{ title: 'Welcome to Split' }}/>
          <Screen name="Setting" component={SettingScreen} />
          <Screen name="Chat" component={ChatScreen} />
          <Screen name="Split" component={SplitScreen} />
        </Navigator> 
      </UserInfoContext.Provider>  
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  

  return (
    
      <View style={{flexDirection: 'column'}}>
        <View style={{ flexDirection: 'column'}}>
            <UserInfoLandingPage name={'Jingnu An'}></UserInfoLandingPage> 
        </View>
        <View style={styles.homeScreen}>
          <Button
            title="Setting"
            color={buttonColor}
            onPress={() => navigation.navigate('Setting') }
          />
          <Button
            title="Split Expenses"
            color={buttonColor}
            onPress={() => navigation.navigate('Split') }
          />
          <Button
            title="ChatRoom"
            color={buttonColor}
            onPress={() =>navigation.navigate('Chat') }
          />
        </View>  
      </View>  
    
  );
};

const SettingScreen = ({ navigation, route }) => {
  return (  
    <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      
        <Setting name={'Jingnu An'}></Setting>
      
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}></View>
        <Button 
          title='back to home'
          color="#FDB9FC"
          onPress={() =>navigation.navigate('Home') }
        />
        <View style={{flex: 1}}></View>
      </View>
    </View>
    
       
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
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });



export default NavigationStack;