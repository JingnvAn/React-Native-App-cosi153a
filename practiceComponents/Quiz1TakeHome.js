import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export const Quiz1TakeHome = () => {
    const image = { uri: "https://i.pinimg.com/736x/68/19/4e/68194e860730e4757063b471da75935a.jpg"};

    return (
        <View style={[styles.container, {
          flexDirection: "column"
        }]}>
          <View style={{flex:10, flexDirection:'column'}}>
            <View style={{flex:1, backgroundColor:'yellow', justifyContent:'center', alignItems:'center'}}>
              <Text style={{fontSize:50}}>Quiz 1</Text>
            </View>
            <View style={{flex:1, backgroundColor:'yellow', flexDirection:'row'}}>
              <View style={{flex:1, justifyContent:'center', alignItems:'center', padding:30}}>
                <Text>Write the App.js code to create this app, including the Quiz 1 header above and all of the text that appears here</Text>
              </View>
              <View style={{flex:1, justifyContent:'center', alignItems:'center', padding:30}}>
                <Text style={{color:'red'}}>You may use any resources you want to complete this but do not ask for help from anyone. This should be your work entirely.</Text>
              </View>
              <View style={{flex:1, justifyContent:'center', alignItems:'center', padding:30}}>
                <Text>Also, do not offer to help anyone, and if someone asks you for help let me know so I can tell them this is inappropriate.</Text>
              </View>
            </View>
    
          </View>
          <View style={{flex:20, flexDirection: 'row'}}>
            <View style={{flex:1, backgroundColor:'red', justifyContent:'center', alignItems:'center'}}>
              <Text style={{fontSize:25}}>Red Left</Text>
            </View>
            <View style={{flex:1, backgroundColor:'yellow', justifyContent:'flex-end', alignItems:'center'}}>
              <Text style={{fontSize:25}}>Yellow Middle</Text>
            </View>
            <View style={{flex:1, backgroundColor:'aqua', justifyContent:'flex-start', alignItems:'flex-end'}}>
            <Text style={{fontSize:25}}>Aqua Right</Text>
            </View>
          </View>
          <View style={{flex:20, flexDirection:'row'}}>
            <View style={{flex:1}}>
              <ImageBackground source={image} resizeMode="cover" style={styles.image} />  
            </View>
            <View style={{flex:1, backgroundColor:'lightgreen'}}>
              <Text style={{fontSize:25}}>Select any image of a puppy from the web for this quiz ...</Text>
            </View>
            <View style={{flex:1}}>
              <ImageBackground source={image} resizeMode="cover" style={styles.image} /> 
            </View>
            <View style={{flex:1, backgroundColor:'white', flexDirection:'column'}}>
              <View style={{flex:1, flexDirection:'column'}}>
                <View style={{flex:3}}>
                  <Text style={{fontSize:20}} >Enter your name and birth year in the textfields below</Text>
                </View>
                <View style={{flex:2, backgroundColor: 'yellow', justifyContent:'center'}}>
                  <Text style={{color:'grey', fontSize:20}}>Jingnu An</Text>
                  <Text style={{color:'grey', fontSize:20}}>1996</Text>
                </View>
                <View style={{flex:1, backgroundColor:'red', justifyContent:'center', alignItems:'center'}}>
                  <Text style={{color:'white'}}>SUBMIT</Text>
                </View>
              </View>
              <View style={{flex:1}}>
              </View> 
            </View>
            
          </View>
          <View style={{flex:1, backgroundColor:'white', justifyContent:'center', alignItems:'center'}}>
            <Text>The goal of this Quiz is to test your mastery of FlexBoxes, core ReactNative components, and basic component style elements.</Text>
          </View>
        </View>
      );
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