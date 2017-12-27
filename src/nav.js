import { StackNavigator } from 'react-navigation';
import Home from './Components/home';

export const Nav = StackNavigator({
    home: { screen: Home },
})
