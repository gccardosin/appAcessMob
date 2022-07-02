import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';


export default function AppLojas({ navigation }) {

    const [pesquisa, setPesquisa] = useState('')

    return (
        <ScrollView>
                <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('Home')} >
                    <Text style={styles.alinhamento}>Voltar</Text>
                </TouchableOpacity>
            <View style={styles.container}>
                <Text style={styles.title}>Restaurantes</Text>
                <TextInput placeholder="O que você está procurando?" value={pesquisa} style={styles.inputs} onChangeText={text => setPesquisa(text)} />
                <TouchableOpacity style={styles.card}>
                    <Image
                        style={styles.cardImage}
                        source={require('../assets/mahai.jpg')} />
                    <View style={styles.infos}>
                        <Text style={styles.title}>
                            Mahai
                        </Text>
                        <Text style={styles.cardText}>-Rampa de acesso</Text>
                        <Text style={styles.cardText}>-Elevador</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.card}>
                    <Image
                        style={styles.cardImage}
                        source={require('../assets/outback.jpg')} />
                    <View style={styles.infos}>
                        <Text style={styles.title}>
                            Outback
                        </Text>
                        <Text style={styles.cardText}>- Comunicação em Libras</Text>
                        <Text style={styles.cardText}>- Rampa de acesso</Text>
                        <Text style={styles.cardText}>- Elevador</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.cadastrar}
                    onPress={() => navigation.navigate('Cadastrar Restaurante')}
                >
                    <Text>Cadastrar Restaurante</Text>
                    <Image
                        style={styles.icons}
                        source={require('../assets/plus.webp')} />
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        alignItems: 'center'
    },
    icons: {
        width: 30,
        height: 30,
    },
    cadastrar: {
        flexDirection: 'row',
        width: 200,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d9d9d9',
        borderWidth: 1,
        borderRadius: 5,
    },
    inputs: {
        width: 350,
        height: 40,
        borderWidth: 3,
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom: 10,
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderBottomWidth: 2,
        borderTopWidth: 2,
        marginBottom: 20,
        width: '100%',
    },
    infos: {
        padding: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    cardText: {
        color: 'black',
        fontSize: 15,
    },
    cardImage: {
        width: 200,
        height: 150,
    },
    alinhamento:{
        marginLeft: 15,
        textAlign: 'left',
        marginTop: 50
    },
    back:{
        fontSize: 18,
        color: 'black'
    }
});