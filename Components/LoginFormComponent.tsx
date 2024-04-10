import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const LoginFormComponent = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [edit, setEdit] = useState<boolean>(true);

    const navigate = useNavigation();

    const handleSubmit = () => {
        const userData = {
            username: username,
            password: password
        }

        navigate.navigate("ProfileScreen")
    };

    return (
        <View style={styles.Container}>
            <Text style={{ paddingBottom: 25, fontSize: 35, fontWeight: 'bold' }}>{edit ? 'Login Page' : 'Registration Page'}</Text>
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
            <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '75%'}}>
                <Text style={{color: 'blue', textDecorationLine: 'underline', fontSize: 25}}>{edit ? 'Register': 'Login'}</Text>
                <Button title='Submit' onPress={handleSubmit} />
            </View>
        </View>
    )
}

export default LoginFormComponent

const styles = StyleSheet.create({
    Container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    Input: {
        width: 250,
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        backgroundColor: 'white',
        marginBottom: 10,
        paddingLeft: 10
    }
})