import React from 'react';
import { View, Text, Button } from "react-native";
import RNSoundLevel from "react-native-sound-level";
import { AudioRecorder, AudioUtils } from 'react-native-audio';

export default class Mic extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: ''
        }
    }


    componentDidMount() {
        RNSoundLevel.start()
        RNSoundLevel.onNewFrame = (data) => {
            console.log("sound level info", data)
            this.setState({
                data: data.rawValue,
                dataTwo: data.id
            })
        }
    }

    componentWillUnmount() {
        RNSoundLevel.stop();
    }

    render() {

        return (
            <View>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>

                <Text>Frame Level: {this.state.dataTwo}</Text>

                <Text>
                    Mic Input: {this.state.data}
                </Text>

                <Button title="Record"></Button>
            </View>
        )
    }


}