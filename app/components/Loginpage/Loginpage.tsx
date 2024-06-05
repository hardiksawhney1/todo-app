import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Image} from 'expo-image'
import {LinearGradient} from 'expo-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'
const Loginpage = () => {
  return (
    <LinearGradient
    colors={['rgba(132, 155, 218, 0.3)', 'rgba(77, 98, 179, 0.4)']}
    style={styles.container}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    >
        <View style={styles.upper}>
            <Image source={require('../../../assets/Avatar.png')}
                alt="Avatar"
                style={styles.avatar}
                contentFit='contain'
            />
        </View>
        <View style={styles.lower}>
            <Image source={require('../../../assets/geekyants.png')}
                alt="Avatar"
                style={styles.geekyants}
                contentFit='contain'
            />
            <Text style={styles.para}>Login In To Your Account</Text>
            <Pressable style={styles.button}><Text>Button</Text></Pressable>
        </View>    
  </LinearGradient>

  )
}

export default Loginpage

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:'10%',
    },
    upper:{
        flex:1,
        justifyContent: 'flex-end'
    },
    lower:{
        flex:1
    },
    para:{
        color: 'white',
        fontSize: 24,
    },
    avatar:{
        height:200,
    },
    geekyants:{
        height:100,
        width:210,  
    },
    button:{
        height:100,
        width:300,
    }
})