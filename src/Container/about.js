import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CustomHeader from '../Components/header'

class About extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        const title = 'ABout US Page';
        return (
            <View>
                <CustomHeader title={title} />
                <Text>About page</Text>
            </View>
        )
    }
}

export default About;
