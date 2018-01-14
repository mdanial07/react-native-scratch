/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Button,
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Home extends Component {
    static navigationOptions = {
        title: 'Home Page',
        headerTintColor: '#fff',
        headerStyle: {
            backgroundColor: 'red'
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={{ width: 100, height: 100 }}
                    source={{ uri: 'http://geekycentral.com/wp-content/uploads/2017/09/react-native.png' }}
                    />
                <Text style={styles.welcome}>
                    This is Home Page
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit App
                </Text>
                <Text style={styles.instructions}>
                    {instructions}
                </Text>
                <Button title='About us' onPress={() => this.props.navigation.navigate('about')} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
