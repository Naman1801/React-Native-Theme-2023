import { StyleSheet, Text, View,Switch,useColorScheme } from 'react-native'
import React,{useState} from 'react'
import Home from './src/screens/Home';
import { ThemeProvider } from './src/theme/ThemeProvider';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark'
  const [isDark,setIsDark] = useState(isDarkMode)
  return (
    <ThemeProvider>
      <Home/>
    </ThemeProvider>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    
  }
})