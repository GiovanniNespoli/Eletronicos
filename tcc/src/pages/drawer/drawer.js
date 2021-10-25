import { createDrawerNavigator } from '@react-navigation/drawer';

import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';

import Home from '../Home/home'

const Drawer = createDrawerNavigator()

export default class drawer extends Component{
    constructor(props)
    {
        super(props);
        this.state = {}
    }

    render()
    {
        return(
            <Drawer.Navigator
            screenOptions={{
                headerTitle : 'Home',
                headerStyle : {
                    backgroundColor : 'green'
                },
                
                drawerActiveTintColor : '#FFF',
                drawerInactiveTintColor : '#FFF',
                drawerPosition : 'left',
                drawerStyle : {
                  backgroundColor :'#18384A',
                  borderRadius : 20,
                },
              }}>
                <Drawer.Screen name="Home" component={Home}/>
            </Drawer.Navigator>
        )
    }
}

const styles = StyleSheet.create({

});