import { StackNavigator } from 'react-navigation';
import Home from './Container/home';
import About from './Container/about'

export const Nav = StackNavigator({
    home: { screen: Home },
    about: { screen: About },
})
