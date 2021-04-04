import React, {useState} from 'react'
import {FlatList, StyleSheet, Text, TextInput, View, TouchableOpacity  } from 'react-native';
function List({list, removeTask, completedtasks}) {
    return (
        <View style={styles.list}>
        <FlatList
          data={list}
          renderItem= { ({item}) => (
            <View style={styles.text}>
            <View style={styles.itemsLeft}>
                <TouchableOpacity onPress={() => {removeTask(item.keys)}}>
                  <Text style={styles.x}>x</Text>  
                </TouchableOpacity>
               <Text>{item.text}</Text>        
             </View>
             <TouchableOpacity style={styles.square} onPress={() => {completedtasks(item.keys)}}></TouchableOpacity>
            </View>
          )}/>
      </View>
    )
}
const styles = StyleSheet.create({
    container: { 
      flex: 1,
      backgroundColor: '#fff',
    },
    text: {
        padding: 10,
        borderRadius: 10,
        borderColor : "black",
        flexDirection : "row",
        flexWrap : 'wrap',
        justifyContent : 'space-between',
        alignItems : 'center',
        marginBottom : 10,
        backgroundColor: "white"
    },
    square: {
        width: 30,
        height : 30,
        backgroundColor: "skyblue",
        opacity: 0.4,
        borderRadius: 5
    },
    itemsLeft : {
        flexDirection : 'row',
        flexWrap : "wrap",
        alignItems : "center"
    },
    x : {
        marginHorizontal : 15,
        color: 'red'
    }
  });
export default List
