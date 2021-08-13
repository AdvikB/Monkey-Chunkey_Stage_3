import * as React from 'react';
import { Text, View, StyleSheet, Platform, StatusBar, TextInput, TouchableOpacity, Image} from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import db from '../localdb';
import {Audio} from 'expo-av';

class PhonicSoundButton extends React.Component{

    playSound = async(soundChunk)=>{
        var soundLink = 'https://s3-whitehatjrcontent.whjr.online/phones/' + soundChunk +'.mp3';
        await Audio.Sound.createAsync(
            {
                uri : soundLink
            },
            {shouldPlay : true}
        )
    }
    render(){
        return(
            <View style={{alignSelf:'center',}}>
            <TouchableOpacity style={styles.button} onPress = {() => this.playSound(this.props.soundChunk)}>
            <Text style={styles.text}> {this.props.wordChunk}</Text>
            </TouchableOpacity>
            </View>
            )
    }
        
   
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 20,
        backgroundColor: "blue",
        width: 50,
        height: 50,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginRight: 20,
    },
    text: {
        fontSize: 40,

    }
    
})






export default PhonicSoundButton;