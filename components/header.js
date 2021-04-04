import React from 'react'
import {StyleSheet, Text, TextInput, View } from 'react-native';
function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>Today</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
      padding: 20,
      borderRadius: 5,
      justifyContent: 'space-around'
    },
    text: {
        fontSize: 35,        
        fontWeight : 'bold',
    }
  });

export default Header
