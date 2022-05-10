import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button} from 'react-native';
import {db }from './core/dbLight';
import {  ref, update, } from "firebase/database";
import { useState } from 'react';
export default function App() {
const [isOn,setIsOn]=useState(1);
  function Update(i) {

    update(ref(db, '/'), {
      Light: i,
     
    }).then(()=>{
    
    }).catch((err)=>{
      alert(err);
    });
    setIsOn(i===0 ? 1:0);
  }
  return (
    <View style={styles.container}>
      <Text>Smart Energy Mangament App</Text>
      <Button onPress={()=>{Update(isOn);}} title={isOn===1 ? 'On':'Off'} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
