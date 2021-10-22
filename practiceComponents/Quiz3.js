import React from "react";
import { StyleSheet, Button, View, Text, TextInput} from "react-native";


const Quiz3 = () => {
    const [radius, setRadius] = React.useState();
    const [height, setHeight] = React.useState();
    const [volume, setVolume] = React.useState("???");
    const [showVolume, setShowVolume] = React.useState(false);
    const [showLog, setShowLog] = React.useState(false);
    const [calculated, setCalculated] = React.useState(false);

    React.useEffect(() => {
        setVolume(((Math.PI * radius * radius * height) / 231.00).toFixed(2));
    }, [showVolume])

    const onPressShowLog = () => {
        showLog ? setShowLog(false) : setShowLog(true);
    }

    const onPressCalculate = () => {
        showVolume ? setShowVolume(false) : setShowVolume(true);
        setCalculated(true);
    }

    return (
        <View>
            <View style={{flexDirection: 'row'}}>
                <View style={{flex: 5, backgroundColor: 'lightgreen'}}>
                    <Text style={styles.title}>Quiz3</Text>
                    <Text>CS153a Fall21</Text>
                    <Text>Write the code for this App, including this text!</Text>
                </View>
                <View style={{flex: 1}}>

                </View>
            </View>
            <View>
                <View>
                    <Text>
                        Enter the radius and the height fo a cylinder in inches and we will calculate the volume in gallons.
                        A 6 inch radius and 12 inch height will have volume 5.88. Divide cubic inches by 231 to get gallons,
                        and show only 2 digits after the decimal point in the volume.
                    </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 1, backgroundColor: 'pink'}}>
                        <Text>radius:</Text>
                    </View>
                    <View style={{flex: 6, backgroundColor: 'pink'}}>
                        <TextInput value={radius} onChangeText={setRadius} placeholder='radius' keyboardType="numeric"/>
                    </View>  
                    <View style={{flex: 12}}></View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 1, backgroundColor: 'pink'}}>
                        <Text>height:</Text>
                    </View>
                    <View style={{flex: 6, backgroundColor: 'pink'}}>
                        <TextInput value={height} onChangeText={setHeight} placeholder='height' keyboardType="numeric"/>
                    </View>  
                    <View style={{flex: 12}}></View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex:1}}>
                        <Button title='Calculate Volume' color='green' onPress={onPressCalculate}/>
                    </View>
                    <View style={{flex:4}}></View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 1, backgroundColor: 'pink', alignItems: 'flex-start'}}>
                        <Text>The volume is {calculated ? volume : "???"} gallons</Text>
                    </View>   
                    <View style={{flex: 3}}></View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex:1}}>
                        <Button title='toggle calculations view' onPress={onPressShowLog}/>
                    </View>
                    <View style={{flex:2}}></View>
                </View>
            </View>
            { showLog ? 
                    <View>
                        <Text>radius = {radius} inches</Text>
                        <Text>height = {height} inches</Text>
                        <Text>area of base = pi*r^2 = {Math.PI * radius * radius} square inches</Text>
                        <Text>volume of cylinder = {Math.PI * radius * radius * height} cubic inches</Text>
                        <Text>volume of cylinder = {(Math.PI * radius * radius * height) / 231.00} gallons</Text>
                    </View> 
                        : 
                        <></>

            }
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize: 60,
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
});

export default Quiz3;