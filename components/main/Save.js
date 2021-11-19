import  React, { useState } from 'react'
import { View, TextInput, Image, Button } from 'react-native'

import firebase from 'firebase/compat/app'
require("firebase/firestore")
require("@firebase/storage")


export default function Save(props) {
    // const [caption, setcaption] = useState("")

    // const uploadImage = async () => {
    //     const uri = props.route.params.image;
    //     const childPath = `post/${firebase.auth().currentUser.uid}/${Math.random().toString(36)}`
    //     console.log(childPath)

    //     const response = await fetch(uri);
    //     const blob = await response.blob();
    //     const task = firebase
    //         .storage()
    //         .ref()
    //         .child(childPath)
    //         .put(blob);

    //     const taskProgress = snapshot => {
    //         console.log(`transferred: ${snapshot.bytesTransferred}`)
    //     }

    //     const taskCompleted = () => { 
    //         task.snapshot.ref.getDownloadURL().then((snapshot) => {
    //             console.log(snapshot)
    //         })
    //     }

    //     const taskError = snapshot => {
    //         console.log(snapshot)
    //     }

    //     task.on("state_changed", taskProgress, taskError, taskCompleted);
    // }
    console.log(props)
    return (
        <View style={{flex: 1}}>
            <Image source={{uri: props.route.params.image}}/>
            <TextInput
                placeholder="Write a Caption . . ."
                onChangeText={(caption) => setcaption(caption)}
                />

                <Button title="Save" onPress={() => uploadImage()}/>
        </View>
    )
}