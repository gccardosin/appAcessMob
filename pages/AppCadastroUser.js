import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const axios = require('axios').default;
import api from '../api';



export default function AppUser({navigation}) {
    const [username, setusername] = useState('')
    const [email, setEmail] = useState('')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [acessibilidade, setAcess] = useState('')
    const [hidePass, setHidePass] = useState(true)
    

    const postCadastrar = async () => {
    
       api.post('https://apiceet.herokuapp.com/api/user', {
          username: username,
          //password:password,
        })
        .then(function (res) {
          console.log(res);
          alert("Cadastro Realizado com Sucesso");
        })
        .catch(function (e) {
          console.log(e);
          alert(e.message);
        })
        .finally(()=>{
            database.close();
        })
    };


    function validasubmit() {
        if (username === '' || email === '' || login === '' || password === '' || acessibilidade === '') {
            alert('Preencha todos os campos!')
            return;
        } else {
            alert('Cadastro Efetuado com sucesso!');
        }
    }
    return (
        <ScrollView>
             <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('Login')} >
                    <Text style={styles.alinhamentoback}>Voltar</Text>
                </TouchableOpacity>
            <View style={styles.container}>
                <Image style={styles.logo}
                    source={require('../assets/logo.png')} />

                <Text style={styles.title}>Cadastro de Usuário</Text>

                <TextInput placeholder="username" value={username} style={styles.inputs} onChangeText={text => setusername(text)} />

                <TextInput placeholder="E-mail" value={email} style={styles.inputs} onChangeText={text => setEmail(text)} />

                <TextInput placeholder="Login" value={login} style={styles.inputs} onChangeText={text => setLogin(text)} />

                <View style={styles.inputarea}>
                    <TextInput placeholder="Password" value={password} style={styles.inputpassword} onChangeText={text => setPassword(text)} secureTextEntry={hidePass} />
                    <TouchableOpacity onPress={() => setHidePass(!hidePass)}>
                        <Ionicons name="eye" color="#000" size={25} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.pergunta}>Quais são os tipos de acessibilidade que você procura?</Text>
                <TextInput placeholder="Ex: Rampa de acesso" value={acessibilidade} style={styles.inputAcess} onChangeText={text => setAcess(text)} />


                <TouchableOpacity style={styles.cadastrar} onPress={() => postCadastrar()}>
                    <Text style={styles.alinhamento}>CADASTRAR</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}




const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputAcess:{
        height: 100,
        width: 340,
        backgroundColor: '#d9d9d9',
        borderWidth: 3,
        borderRadius: 10,
        paddingLeft: 10,
        marginBottom: 10,
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
    inputpassword: {
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
        height: 200
    },
    alinhamento: {
        textAlign: 'center',
    },
    cadastrar: {
        width: 200,
        height: 40,
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
    alinhamentoback:{
        marginLeft: 15,
        textAlign: 'left',
        marginTop: 50
    },
    back:{
        fontSize: 18,
        color: 'black'
    }
});
