import React from 'react'
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import Home from './Container/home';
import About from './Container/about'
import DrawerContent from './Components/drawer';


const drawer = DrawerNavigator({
    HomePage: { screen: Home },
    AboutUS: { screen: About },
},
    {
        headerMode: 'none',
        contentComponent: ({ navigation }) => <DrawerContent navigation={navigation} />,
    }
)

export const Nav = StackNavigator({
    drawer: {
        screen: drawer,
        navigationOptions: {
            header: null
        }
    }
})
