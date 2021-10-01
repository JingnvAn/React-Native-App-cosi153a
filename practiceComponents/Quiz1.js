import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Flex = () => {
  return (
    <View style={[styles.container, {
      flexDirection: "column"
    }]}>
      <View style={{ flex: 3, backgroundColor: "yellow" }}>
        <Text style={{fontSize:50}}>Quiz 1a</Text>
        <Text>CS153a Fall21</Text>
        <Text>Write the code for this App, including the Quiz1a title and this text! The layout is five units high and 3 units wide</Text>
      </View>
      <View style={{ flex: 3, backgroundColor: "white", flexDirection:'row'}}>
          <View style={{ flex:1, justifyContent:'center'}}>
            <Text style={{}}>Choose your gift by pressing the button</Text>
          </View>
          <View style={{ flex:1, justifyContent:'center'}}>
            <Button color='green' title='THIS IS A BIG GREEN BUTTON!'></Button>
          </View>
      </View>
      <View style={{ flex: 9, flexDirection:'row' }}>
      <View style={{ flex: 1, backgroundColor: "lightgreen" }}>
          <Text>lightgreen</Text>
      </View>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={{ flex: 3, backgroundColor: "red" }}>
            <Text>red</Text>
        </View>
        <View style={{ flex: 3, backgroundColor: "white" }}>
            <Text>white</Text>
        </View>
        <View style={{ flex: 3, backgroundColor: "blue" }}>
            <Text>blue</Text>
        </View>
      </View>
      <View style={{ flex: 1, backgroundColor: "lightgreen" }}>
          <Text>lightgreen</Text>
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default Flex;