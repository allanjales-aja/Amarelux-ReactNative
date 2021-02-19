import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'



import Home from '../views/Home';
import Produtos from '../views/Produtos';


const routeTab = createBottomTabNavigator()

const Inicio = () => {
    return (
        <routeTab.Navigator 
    
            initialRouteName='Home'
            tabBarOptions={{
                activeTintColor:'#f4d010',
                inactiveTintColor: '#041e50',
                labelStyle: {fontSize: 25, marginBottom: 10}
            }}
        >
            <routeTab.Screen name="Home" component={Home}/>
            <routeTab.Screen name="Produtos" component={Produtos}/>
        </routeTab.Navigator>
    )
}

export default Inicio;