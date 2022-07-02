import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AppHome from "./AppHome";
import AppLojas from "./AppLojas";
import AppFavoritos from "./AppFavoritos";
import AppLogin from "./AppLogin";
import AppCadastroRestaurante from "./AppCadastroLojas";
import AppUser from "./AppCadastroUser";


const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
        <Tab.Navigator
            initialRouteName="Login"
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#c7c7c7',
                    borderTopColor: 'transparent',
                    paddingBottom: 5,
                    paddingTop: 5,
                },
                tabBarActiveTintColor: 'black',
            }}
        >


            <Tab.Screen
                name="Home"
                component={AppHome}
                options={{
                    tabBarStyle: {
                        display: 'none'
                    },
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="Restaurantes"
                component={AppLojas}
                options={{
                    tabBarStyle: {
                        display: 'none'
                    },
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="Favoritos"
                component={AppFavoritos}
                options={{
                    tabBarStyle: {
                        display: 'none'
                    },
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="Login"
                component={AppLogin}
                options={{
                    tabBarStyle: {
                        display: 'none'
                    },
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="Cadastrar Restaurante"
                component={AppCadastroRestaurante}
                options={{
                    tabBarStyle: {
                        display: 'none'
                    },
                    headerShown: false
                }}
            />
            <Tab.Screen 
            name="CadUser"
            component={AppUser}
            options={{
                tabBarStyle: {
                    display: 'none'
                },
                headerShown:false
            }}
            />
        </Tab.Navigator>
    )
}