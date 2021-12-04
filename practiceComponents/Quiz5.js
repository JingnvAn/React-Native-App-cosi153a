import axios from 'axios'
import React, { useState } from 'react'
import { View, StyleSheet, Text, Button, FlatList, TouchableOpacity } from 'react-native'

const Item = ({ item, onPress}) => (
    <TouchableOpacity onPress={onPress} style={styles.itemList}>
      <Text style={styles.item}>{item}</Text>
    </TouchableOpacity>
);

const Quiz5 = () => {
    const [selectedBoard, setSelectedBoard] = useState(null);
    const [data, setData] = useState([]);
    const [posts, setPosts] = useState([]);

    const onPressRefreshBBoards = async () => {
        setPosts([]);
        setSelectedBoard(null);
        let result = await axios.get('https://glacial-hamlet-05511.herokuapp.com/bboardNames');
        console.log(result);
        if(result.status === 200){
            setData(result.data);
        }else{
            console.log('Error in getting data!', result);
        }   
    }

    async function onPressBB (bb) {
        const {data, status} = await axios.post(`https://glacial-hamlet-05511.herokuapp.com/posts`, {bboard:bb});
        if(status === 200){
            setPosts(data);
        }else{
            console.log('error in getting post!');
        }
    }

    const renderItem = ({ item }) => {   
        return (
          <Item
            item={item}
            onPress={async () => {
                onPressBB(item);
                setSelectedBoard(item);
            }}
          />
        );
    };
    
    const renderPost = ({ item }) => {
        return (
            <View style={styles.post}>
                <Text style={{fontSize: 25}}>{item.title}</Text>
                <Text>{item.text}</Text>
            </View>
        )
    }
    const postsString = JSON.stringify(posts);

    return (
        <View style={{flex:10, flexDirection:'colum'}}>
            <View style={{flex:1, backgroundColor: 'black', alignItems:'center', justifyContent:'center'}}>
                <Text style={{alignSelf: 'center', color:'red', fontSize:30}}>BBViewer</Text> 
            </View>
            <View style={{flex:0.4, flexDirection:'row'}}>
                <View style={{flex: 2}}>
                    <Button title='refresh bboards' color='blue' onPress={onPressRefreshBBoards}/>
                </View>
                <View style={{flex: 3}}>
                    <FlatList 
                        data={data}
                        renderItem={renderItem}
                        horizontal
                        extraData={onPressBB}
                    />
                    <View style={{flex:2}}></View>
                </View>
            </View>
            <View style={{flex:6}}>
                <View style={{flex:0.5, flexDirection:'row'}}>
                    <View>
                        <Text style={{fontSize: 30}}>Selected bboard:</Text>
                    </View>
                    <View>
                        {!selectedBoard ? <></> : 
                        <View style={{flex:12}}>
                            <View style={{flex:10}}>
                                <TouchableOpacity style={styles.itemList2}>
                                    <Text style={styles.item2}>{selectedBoard}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex:3}}></View>
                        </View>
                        }
                    </View>
                
                </View>
                <View style={{flex:5.5}}>
                    <FlatList 
                        data={posts}
                        renderItem={renderPost}
                    />
                </View>
            </View>
            <View style={{flex:2}}>
                <Text>DEBUGGING</Text>
                <Text>bb: {selectedBoard}</Text>
                <Text>show:{selectedBoard ? 'true' : 'false'}</Text>
                <Text>bbs.length = {data.length}</Text>
                <Text>posts = {postsString}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        color: 'red',
        alignSelf:'center',
        marginLeft:5,
        marginRight:5
    },
    item2: {
        color: 'red',
        fontSize: 27,
        alignSelf:'center',
    },
    itemList: {
        flex:5,
        alignItems:'center', 
        justifyContent:'center',
        backgroundColor: 'black',
        marginBottom:5,
        marginTop:5,
        marginLeft:5,
    },
    itemList2: {
        flex:5,
        justifyContent:'center',
        backgroundColor: 'black',
    },
    post: {
        padding: 20,
        marginVertical: 20,
        marginLeft:15,
        marginRight:90,
        backgroundColor: '#EAEAEA',
      },
})

export default Quiz5
