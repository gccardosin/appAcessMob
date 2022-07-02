import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AppCadastroRestaurante({navigation}) {
    const [nomeLoja, setNomeLoja] = useState('')
    const [cnpj, setCNPJ] = useState('')
    const [estado, setEstado] = useState('')
    const [cidade, setCidade] = useState('')
    const [rua, setRua] = useState('')
    const [acessibilidade, setAcess] = useState('')
    
    function validasubmit() {
        if (nomeLoja === '' || cnpj === '' || estado === '' || cidade === '' || rua ==='' || acessibilidade ==='') {
            alert('Preencha todos os campos!')
            return;
        } else {
            alert('Cadastro Efetuado com sucesso!');
        }
    }
    return (
        <ScrollView>
             <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('Restaurantes')} >
                    <Text style={styles.alinhamentoback}>Voltar</Text>
                </TouchableOpacity>
            <View style={styles.container}>
                <Image style={styles.logo}
                    source={require('../assets/logo.png')} />

                <Text style={styles.title}>Cadastro de Restaurante</Text>

                <TextInput placeholder="Nome do Restaurante" value={nomeLoja} style={styles.inputs} onChangeText={text => setNomeLoja(text)} />

                <TextInput placeholder="CNPJ" value={cnpj} style={styles.inputs} onChangeText={text => setCNPJ(text)} />

                <TextInput placeholder="Estado" value={estado} style={styles.inputs} onChangeText={text => setEstado(text)} />

                <TextInput placeholder="Cidade" value={cidade} style={styles.inputs} onChangeText={text => setCidade(text)} />

                <TextInput placeholder="Rua" value={rua} style={styles.inputs} onChangeText={text => setRua(text)} />

                <Text style={styles.pergunta}>Quais são os tipos de acessibilidade que o seu restaurante oferece?</Text>
                <TextInput placeholder="Ex: Rampa de acesso" value={acessibilidade} style={styles.inputAcess} onChangeText={text => setAcess(text)} />
                <TouchableOpacity style={styles.cadastrar} onPress={() => validasubmit()}>
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
    title: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 15
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