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

    onStartRecord = async () => {

    }

    render() {

        let audioPath = AudioUtils.DocumentDirectoryPath + '/test.aac';

        AudioRecorder.prepareRecordingAtPath(audioPath, {
            SampleRate: 22050,
            Channels: 1,
            AudioQuality: "Low",
            AudioEncoding: "aac",
            MeteringEnabled: true
        });

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

                <Button title="Record"
                    onPress={() => {
                        AudioRecorder.prepareRecordingAtPath(AudioUtils.DocumentDirectoryPath + "/test.aac", {
                            SampleRate: 22050,
                            Channels: 1,
                            AudioQuality: "Low",
                            AudioEncoding: "aac"
                        });
                    }}


                ></Button>
            </View>
        )
    }


}