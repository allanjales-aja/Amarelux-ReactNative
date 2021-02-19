import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../views/Login'
import Inicio from './Inicio'

const routeStack = createStackNavigator()

const Stack = () => {
    
    return (
        <routeStack.Navigator 
            initialRouteName="Login"  
            screenOptions={{
                    headerShown: false 
                }}
        >
            <routeStack.Screen name="Login" component={Login}/>
            <routeStack.Screen name="Inicio" component={Inicio}/>
           
        </routeStack.Navigator>
    )
}

export default Stack;