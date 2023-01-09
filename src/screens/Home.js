import { StyleSheet, Text, View,Switch, Button } from 'react-native'
import React from 'react'
import { useTheme } from '../theme/ThemeProvider';
import MyScreen from './MyScreen';
export default function Home() {
    console.log("useTheme",useTheme());
    const {dark,colors,setScheme} = useTheme()
    const toggleTheme = ()=>{
      dark ? setScheme('light') :setScheme('dark')
    }
  return (
    <View style={[styles.container,{backgroundColor:colors.primary}]}>
      <Switch value={dark} onValueChange={toggleTheme} />
      <Text style={{fontSize:16,fontWeight:'800',color:colors.text}}>Home.js</Text>
      <Button title="Go to another" onPress={()=><MyScreen/> } />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    
  }
})