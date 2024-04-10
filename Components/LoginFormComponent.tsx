import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const LoginFormComponent = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [edit, setEdit] = useState<boolean>(true);

    return (
        <View>
            <Text style={{ paddingBottom: 25, fontSize: 35 }}>{edit ? 'Login Page' : 'Registration Page'}</Text>
            <TextInput
                style={styles.Input}
                placeholder='Username'
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.Input}
                placeholder='Password'
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
        </View>
    )
}

export default LoginFormComponent

const styles = StyleSheet.create({
    Input: {
        color: 'white'
    }
})