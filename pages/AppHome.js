import React from 'react';
import { View, Image, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
export default function AppHome({navigation}) {
    return (
        <ScrollView>
            <View style={styles.tela}>
            <Image
                style={styles.logo}
                source={require('../assets/logo.png')}
                />
                <TouchableOpacity
                onPress={() => navigation.navigate('Restaurantes')}
                style={styles.container}>
                <Image
                style={styles.imagens}
                source={require('../assets/shop.png')}
                />
                <Text style={styles.text}>Restaurantes</Text>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={() => navigation.navigate('Favoritos')}
                style={styles.container}>
                <Image
                style={styles.imagens}
                source={require('../assets/heart.webp')}
                />
                <Text style={styles.text}>Favoritos</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    tela: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    container: {
        backgroundColor: '#f8f8ff',
        width: 200,
        height: 190,
        borderWidth: 2,
        borderRadius: 5,
        padding: 10,
        marginBottom: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imagens: {
        width: 150,
        height: 150,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    logo: {
        margin: 25,
        width: 300,
        height: 200 
    }
});