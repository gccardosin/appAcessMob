import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AppLogin({navigation}) {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [hidePass, setHidePass] = useState(true)
    
    function validasubmit() {
        if ( login === '' || password === '') {
            alert('Preencha todos os campos!')
            return;
        } else {
            alert('Login Efetuado com sucesso!');
        }
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image style={styles.logo}
                    source={require('../assets/user.png')} />

                <TextInput placeholder="Login" value={login} style={styles.inputs} onChangeText={text => setLogin(text)} />

                <View style={styles.inputarea}>
                    <TextInput placeholder="Password" value={password} style={styles.inputSenha} onChangeText={text => setPassword(text)} secureTextEntry={hidePass} />
                    <TouchableOpacity onPress={() => setHidePass(!hidePass)}>
                        <Ionicons name="eye" color="#000" size={25} />
                    </TouchableOpacity>
                </View>


                <View style={styles.botoes}>
                <TouchableOpacity style={styles.cadastrar} onPress={() => navigation.navigate('CadUser')}>
                    <Text style={styles.alinhamento}>Cadastrar-se</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.enviar} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.alinhamento}>Entrar</Text>
                </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    )
}




const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60
    },
    botoes:{
        flexDirection: 'row',
        width: 350,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 15
    },
    inputs: {
        width: 350,
        height: 40,
        backgroundColor: '#d9d9d9',
        borderWidth: 3,
        borderRadius: 10,
        paddingLeft: 10,
        marginBottom: 10,
    },
    inputSenha: {
        width: '85%',
        height: 40,
    },
    inputarea: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 350,
        height: 40,
        backgroundColor: '#d9d9d9',
        borderWidth: 3,
        borderRadius: 10,
        paddingLeft: 10,
        marginBottom: 10,
    },
    logo: {
        margin: 25,
        width: 300,
        resizeMode: 'contain',
        height: 200
    },
    alinhamento: {
        textAlign: 'center',
    },
    cadastrar: {
        width: 160,
        height: 40,
        borderWidth: 3,
        borderRadius: 10,
        justifyContent: 'center',
        backgroundColor: '#d9d9d9'
    },
    enviar:{
        width: 160,
        height: 40,
        marginLeft: 20,
        borderWidth: 3,
        borderRadius: 10,
        justifyContent: 'center',
        backgroundColor: '#d9d9d9'
    },
    pergunta: {
        fontSize: 18,
        width: 350,
        marginTop: 15,
        marginBottom: 10,
        fontWeight: 'bold',
    },
});