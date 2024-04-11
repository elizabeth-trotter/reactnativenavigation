import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginFormComponent from '../Components/LoginFormComponent'

const LoginScreen = () => {
  return (
    <ImageBackground source={require('../assets/unsp.jpg')} style={styles.background}>
        <View style={styles.Container}>
            <LoginFormComponent />
        </View>
    </ImageBackground>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Container: {
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderRadius: 10
    }
})