import React, { Component } from 'react'
import{View} from "react-native"
import {announcementData} from "../utils"
import ShowAnnouncement from "../component/ShowAnnouncement"
export default class AnnouncementScreen extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <ShowAnnouncement accordainData={announcementData}/>
            </View>
        )
    }
}
