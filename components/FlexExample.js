import React, { Component } from 'react'
import { View, Text} from 'react-native'

export default class FlexExample extends Component {
    render() {
        return (
            <View style={ { flex:1,
             flexDirection:'row', 
             //justifyContent:'flex-end'
                alignItems:'flex-end'
                //alignItems: "stretch"
             }}>
                <View style={{ width: 50, height:50,  backgroundColor: 'red',marginRight:5 }}></View>
                <View style={{ width: 50, height:50, backgroundColor: 'blue',marginRight:5 }}></View>
                <View style={{ width: 50, height:50, backgroundColor: 'green' }}></View>
                
            </View>
        )
    }
}
