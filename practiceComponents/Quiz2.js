import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

// Function to generate random number 
function getRandomInt(min, max) { 
    return Math.floor( Math.random() * (max - min) + min );
} 

const Quiz2 = ({lower, upper}) => {
    const [number1, setNumber1] = React.useState(getRandomInt(lower || 1, upper || 20));
    const [number2, setNumber2] = React.useState(getRandomInt(lower || 1, upper || 20));
    const [info, setInfo] = React.useState({correct: 0, answered: 0});
    const [answer, onChangeAnswer] = React.useState("");
    const [correct, setCorrect] = React.useState(0);
    const [answered, setAnswered] = React.useState(0);
    const [check, setCheck] = React.useState(false);
    const [text, setText] = React.useState('');
    const [showLog, setShowLog] = React.useState(false);
    const [debugButtonTitle, changeDebugButtonTitle] = React.useState('show debug info');
    const [result, changeResult] = React.useState('awaiting');

    React.useEffect(() => {getData()}
    ,[])

    const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@quiz_info')
          let data = null
          if (jsonValue!=null) {
            data = JSON.parse(jsonValue);
            setInfo(data);
            setCorrect(data.correct);
            setAnswered(data.answered);
            console.log('just set Info, # correct and # answered')
          } else {
            console.log('just read a null value from Storage')
            setInfo({});
            setCorrect(0);
            setAnswered(0);
          }


        } catch(e) {
          console.log("error in getData ")
          console.dir(e)
          // error reading value
        }
  }

  // storeData converts the value stored in the info variable to a string
  // which is then writes into local storage using AsyncStorage.setItem.
    const storeData = async (value) => {
            try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('@quiz_info', jsonValue)
            console.log('just stored '+jsonValue)
            } catch (e) {
            console.log("error in storeData ")
            console.dir(e)
            // saving error
            }
    }

    const onPressNextQuestion = () => {
        setCheck(false);   
        onChangeAnswer("");
        setText("")
        changeResult('awaiting');
        setNumber1(getRandomInt(lower || 1, upper || 20));
        setNumber2(getRandomInt(lower || 1, upper || 20));
        const theInfo = {correct: correct, answered: answered};
        setInfo(theInfo);
        console.log('data='+JSON.stringify(theInfo))
        storeData(theInfo);
    }

    const onPressShowLog = () => {
        setShowLog(true);
        changeDebugButtonTitle('hide debug info');
    }

    const onPressHideLog = () => {
        setShowLog(false);
        changeDebugButtonTitle('show debug info');
    }

    const onPressCheckAnswer = () => {
        setAnswered(answered+1); 
        setCheck(true);
        if(number1 * number2 == answer){
            setCorrect(correct+1);   
            setText('Correct!!');
            changeResult('correct')
        }else{   
            setText(`Sorry, answer was ${ number1*number2}, try again!`);
            changeResult('incorrect');
        }
        const theInfo = {correct: correct, answered: answered};
        setInfo(theInfo);
        console.log('data='+JSON.stringify(theInfo))
        storeData(theInfo);
    }


    return (
        <View style={styles.container}>
            
            <Text style={styles.title}>Math Quiz For numbers between {lower||1} and {upper||20}</Text>
            <Text style={styles.subtitle}>Calculate the product of the following two numbers:</Text>
            <Text style={styles.equation}> {number1} * {number2} = {" "}  
                <TextInput
                    style={styles.equation}
                    onChangeText={onChangeAnswer}
                    value={answer}
                    placeholder={'???'}
                    keyboardType="numeric"
                />
            </Text>
            <Text style={styles.toggleText}>{text}</Text>

            <View style={{flexDirection: 'row', justifyContent: "center"}}>
                <View style={{flex: 1}}>
                    {check ? <Button title='next question' color='green' onPress={onPressNextQuestion} style={styles.button} /> 
                            : 
                            <Button title='check answer' color='red' onPress={onPressCheckAnswer} style={styles.button} />            
                    }
                </View>
                <View style={{flex:8}}></View>
            </View>

            
            

            <Text>Correct: {correct}</Text>
            <Text>Answered: {answered}</Text>
            <Text>Percent Correct: {answered == 0 ? <Text>0</Text> : <Text>{1.00 * correct / answered}</Text>}</Text>
            <View style={{flexDirection: 'row', justifyContent: "center"}}>
                <View style={{flex: 1}}>
                    { showLog ? <Button title={debugButtonTitle} color='green' onPress={onPressHideLog} style={styles.button}/>
                                : 
                                <Button title={debugButtonTitle} color='green' onPress={onPressShowLog} style={styles.button}/>         
                    }
                </View>
                <View style={{flex:7}}></View>
            </View>
            
            { showLog ? 
                    <View>
                        <Text>x: {number1}</Text>
                        <Text>y: {number2}</Text>
                        <Text>answer: {answer}</Text>
                        <Text>correct: {correct}</Text>
                        <Text>answered: {answered}</Text>
                        <Text>result: {result}</Text>
                    </View> 
                        : 
                        <></>

            }
           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column'
    },
    title: {
        color: 'blue',
        fontSize: 40,
    },
    subtitle: {
        fontSize: 30,
    },
    equation: {
        fontSize: 40,
        fontWeight: '500',
    },
    button: {
        flexDirection: 'row',
        width: '150',
    },
    toggleText: {
        color: 'red',
        fontSize: 20,
    }
});
  
export default Quiz2;