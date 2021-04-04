import React, {useState} from 'react'
import {StyleSheet, Text, TextInput, View, KeyboardAvoidingView, TouchableOpacity } from 'react-native';

function Input({addTask}) {
    const [task, setTask] = useState("")

    const handleChange = (val) => {
        setTask(val)
    }
    return (
     <KeyboardAvoidingView
          style={styles.inputField}>
     <View style={styles.input}>
         <TextInput 
         placeholder="Add Task..."
         value={task}
         onChangeText={handleChange}/>
    </View> 
    <TouchableOpacity style={styles.add} onPress={() => {addTask(task)}}>
        <Text>+</Text>
    </TouchableOpacity>
        </KeyboardAvoidingView>
    
    )
}
const styles = StyleSheet.create({
    inputField: {
      flexDirection : "row",
      position: 'absolute',
      justifyContent : "space-between",
      alignItems : "center",
      bottom : 10,
      width : "100%",
      paddingHorizontal : 10
    },
    add : {
        backgroundColor : "white",
        borderRadius : 50,
        width : 50,
        alignItems : 'center',
        paddingVertical : 15,
        paddingHorizontal : 15,
        borderColor: '#C0C0C0',

    },
    input : {
        borderRadius : 30,
        borderWidth : 1,
        borderColor : "#C0C0C0",
        paddingVertical : 8,
        alignItems : 'center',
        paddingHorizontal : 8,
        justifyContent : 'center',
        width : "80%",
        backgroundColor: '#fff',
    }

  });
export default Input
