import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

var navItems = [
    {
        name: 'Home',
        nav: 'HomePage'
    },
    {
        name: 'About',
        nav: 'AboutUS',
    }
]

class DrawerContent extends Component {
    render() {
        return (
            <View>
                <View style={{ width: '100%', height: 150, backgroundColor: 'green' }}>
                    <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                        <Image source={require('../images/logo.png')}
                            style={{ width: 50, height: 50, marginTop: 45, marginLeft: 30 }} />
                        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#fff', marginTop: 50, marginLeft: 30 }}> Welcome </Text>
                    </View>
                </View >
                <View>
                    {
                        navItems.map((l, i) => {
                            return (
                                <TouchableOpacity
                                    key={i}
                                    onPress={() => { this.props.navigation.navigate(l.nav) }}
                                >
                                    <View style={{ height: 50, paddingLeft: 20 }}>
                                        <Text style={{ fontSize: 16, marginTop: 10, color: 'green' }} >
                                            {l.name}
                                        </Text>
                                    </View>

                                </TouchableOpacity>

                            )
                        })
                    }
                </View>
            </View>
        )
    }
}
export default DrawerContent;

