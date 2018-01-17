import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

const CustomHeader = ({ title }) => (
    <View style={{ height: 55, width: '100%', backgroundColor: 'blue' }}>
        <Text style={styles.Text}> {title} </Text>
    </View>
)

CustomHeader.propTypes = {
    title: PropTypes.string,
};

export default CustomHeader;


const styles = StyleSheet.create({
    Text: {
        color: '#fff',
        fontSize: 22,
        margin: 10,
    }
})
