import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
// import RecordVideo from './index'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    record = () => {
        // RecordVideo.pickVideo()
        //     .then(data => {
        //         console.log("success reposne video", data);
        //         //success 
        //     })
        //     .catch(error => {
        //         console.log("errror reject", error);
        //         //failure
        //     });
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
                <TouchableOpacity onPress={() => this.record()}>
                    <Text> Record Video </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
