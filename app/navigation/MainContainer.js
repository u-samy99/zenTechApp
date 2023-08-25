import * as React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

//Screens
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import ContactUs from './screens/ContactUs';
import { Component } from 'react/cjs/react.production.min';

//Screen names
const homeName = 'Home';
const settingsName = 'Settings';
const contactUsName = 'Contact Us';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
    return(
        <NavigationContainer>
            <Tab.Navigator
            screenOptions= {({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === homeName) {
                        iconName = focused ? 'home' : 'home-outline'; 
                    } else if (rn === settingsName) {
                        iconName = focused ? 'settings' : 'settings-outline'; 
                    } else if (rn === contactUsName) {
                        iconName = focused ? 'list' : 'list-outline'; 
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>

                },
                
            })}
            
>

            <Tab.Screen name={homeName} component={HomeScreen}/>
            <Tab.Screen name={settingsName} component={SettingsScreen}/>
            <Tab.Screen name={contactUsName} component={ContactUs}/>


            </Tab.Navigator>
        </NavigationContainer>
    );
}