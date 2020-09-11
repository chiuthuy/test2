import React, { Component } from 'react'
import {StyleSheet, Text, View} from 'react-native'

export default class Styless extends Component {
    render() {
        return (
            <View>
                <Text style={styles.container}>first</Text>
                <Text style={styles.firsText}>second</Text>
                <Text style={[styles.firsText,styles.secondText]}>second</Text>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container: {
        marginTop: 20,
        borderColor:'#123456',
        backgroundColor:'#28b846'
    },
    firsText:{
        color: 'yellow'
    },
    secondText: {
        color: 'red'
    }
})
