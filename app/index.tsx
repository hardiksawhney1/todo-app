import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import Loginpage from './components/Loginpage/Loginpage'



const index = () => {
  return (
    <View style={styles.container}> 
        {1 > 2 ? <Text>Hi</Text> : <View style={styles.login}><Loginpage /></View>}
        {/* <Link href="./components/Loginpage/Loginpage">Hi</Link> */}
    </View>
  )
}

export default index

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    login:{
        flex:1,
    }
})