import React, { Component } from 'react'
import{View,ScrollView} from "react-native"
import FoodList from "../component/FoodList"
export default class FoodScreen extends Component {
    render() {
        return (
            <View style={{flex:1,paddingHorizontal:20,backgroundColor:"white"}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                <FoodList/>
                </ScrollView>
            </View>
        )
    }
}
