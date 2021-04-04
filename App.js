import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './components/header';
import Input from './components/input';
import List from './components/list';
import CompletedTask from './components/completedTask';

export default function App() {
  const [list, setList] = useState([
    {text : "wash the bathroom", checked : false, keys : "2417"},
    {text : "create an app", checked : false, keys : "417"},
    {text : "visit my girlfriend", checked : true, keys : "241"},
  ])
  const addTask = (task) => {
    setList((prev) => {
      return [
        {text : task, checked : false, keys : Math.random().toString()},
        ...prev
      ]
    })
  }
  const removeTask = (index) => {
    setList((prev) => {
      return prev.filter(({keys}) => (keys != index))
    })
  }
  const completetask = (index) => {
    const task = list.map(item => { return item.keys == index &&  {text : item.text}})
    console.log(task)
  }
     return (
    <View style={styles.container}>
      <Header />
      <List list={list} removeTask={removeTask} completedtasks={completetask}/>
      <CompletedTask />
      <Input addTask={addTask}/>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    paddingTop : 40,
    paddingHorizontal : 20,
  },
});
