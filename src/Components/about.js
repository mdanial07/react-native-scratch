import React, { Component } from 'react';
import { View, Text } from 'react-native';

class About extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View>
                <Text>About page</Text>
            </View>
        )
    }
}

export default About;
