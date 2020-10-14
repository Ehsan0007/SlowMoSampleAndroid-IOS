import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Platform, NativeModules } from 'react-native';
// import RecordVideo from './index'
import SlowRecordMotion from './index'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    record = () => {

        if (Platform.OS == 'ios') {
            NativeModules.SlowRecordMotion.launchSlowmoVideoRecorder(res=>{
                console.log("response    ",res)
            })

        } else {
            NativeModules.RecordVideo.pickVideo().then(res=>{
                console.log("response    ",res)
            }).catch(err => {
                console.log(err)
            })
        }
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
