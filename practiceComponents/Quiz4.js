import React, { useState, useEffect } from "react";
import { Text, TextInput, View, FlatList, StyleSheet } from "react-native";
import {Octokit} from "octokit";
import { getGithubApiAuth } from "../tokens";

const octokit = new Octokit({auth: getGithubApiAuth()})

const Quiz4 = () => {
    const [githubName, setGithubName] = useState('');
    const [text, setText] = useState('');
    const [data, setData] = useState([{id: '12345', name:'None'}]);
    const [hide, setHide] = useState(false);
    const [debbugHide, setDebbugHide] = useState('false');

    useEffect(() => {
        getRepoData(githubName);
    }, [githubName])

    const getRepoData = async (githubName) => {
        if(githubName != ''){
            let { data:fetchData, status } = await octokit.request('GET /users/{username}/repos', {username: githubName});
            if(status !== 200){
                console.log(`error in get github repos: ${status}`)
            }else{
                console.log('data', fetchData)
                const processedData = []
                fetchData.forEach(entry => {
                    processedData.push({id: entry.id.toString(), name: entry.name})
                })
                console.log('processed data', processedData)
                setData(processedData);
            }
        }
        
    }

    const renderItem = ({item}) => {
        return (
            <View style={styles.item}>
                <Text style={styles.title}>{item.name}</Text>
            </View>
        )
    }

    const onPressHide = () => {
        setGithubName(text);
        console.log('change hide');
        hide ? setHide(false) : setHide(true);
        hide ? setDebbugHide('false') : setDebbugHide('true');  
    }

    let clickableText = <Text></Text>
    if(hide){
        clickableText = <Text onPress={onPressHide} style={{color: 'blue'}}>show repositories</Text> 
    }else{
        clickableText = <Text onPress={onPressHide} style={{color: 'blue'}}>hide repositories</Text> 
    }

    return (
       <View style={{flexDirection: 'column'}}>
           <View style={{backgroundColor: 'black', alignItems:'center', justifyContent:'center'}}>
                <Text style={{color: 'red', fontSize: 25, marginTop:15, marginBottom:15}}>Github Viewer</Text>
           </View>
           <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 25, marginTop: 5, marginBottom: 5}}>github Id: </Text>
                <TextInput
                    placeholder='userid' 
                    onChangeText={text => setText(text)}
                />
           </View>
           <View>{clickableText}</View>
           <View>
               {hide ? <></> : 
                            <FlatList 
                                data={data}
                                renderItem={renderItem}
                                keyExtractor={item => item.id}
                            />
               }
           </View>
           <View>
               <Text>DEBUGGING</Text>
               <Text>userId:{githubName}</Text>
               <Text>showReps:{debbugHide}</Text>
               <Text>repos.length={data.length}</Text>
           </View>
       </View>
    )
}

const styles = StyleSheet.create({
    item: {
      backgroundColor: 'grey',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });

  
export default Quiz4;