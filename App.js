import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import AudioList from './src/components/AudioPlayer/AudioList';


export default function App() {
  return(
    <View styles={styles.container}>
        <StatusBar style='auto'></StatusBar>
        <View style={{height:44}}></View>
        <AudioList></AudioList>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})