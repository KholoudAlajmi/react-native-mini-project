import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';


const ProfileFirst = ({route}) => {
  
    const {id} = route.params
    return (
      <View style={styles.container}>
        <Text>Details {id}</Text>
        <StatusBar style="auto" />
        </View>
  )
}

export default ProfileFirst

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

