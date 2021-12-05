import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const Task = (props) => {
    const paidPerson = props.paidPerson;
    const amount = props.amount;
    const timestamp = props.timestamp;
    const description = props.text;

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}>
                    {paidPerson === 'Jingnu' ? 
                    <ImageBackground source={require('../assets/cartonProfilePic-circle.png')} resizeMode="cover" style={styles.square}/>
                    :
                    <ImageBackground source={require('../assets/chris-circle.png')} resizeMode="cover" style={styles.square}/>
                }
                     
                </View>
                <View style={{flex:3}}>
                    <Text style={styles.itemTextTitle}>{description}</Text>
                    <Text style={styles.itemText}>{timestamp}</Text>
                </View>
                <View style={{flex:1}}>
                    <Text style={styles.itemTextAmount}>${(parseFloat(amount)/2).toFixed(2)}</Text>
                </View>
            </View>
            {/* <View style={styles.circular}></View> */}
        </View>
    )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  square: {
    width: 39,
    height: 39,
    borderRadius: 5,
    marginRight: 15,
  },
  itemTextTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  itemTextAmount: {
    fontSize: 18,
  },
  itemText: {
    maxWidth: '80%',
    color: 'grey',
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Task;