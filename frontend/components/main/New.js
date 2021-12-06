import React, { Component } from 'react'
import { View, Text, TextInput, Button, ScrollView } from 'react-native'



export default class New extends Component {
    render() {


        return (
            <View>
                <TextInput 
                    placeholder="Alter Name"
                    onChangeText={(name) => this.setState({ name })}
                />
                <TextInput 
                    placeholder="Alter Age"
                    onChangeText={(email) => this.setState({ email })}
                />
                <TextInput 
                    placeholder="Favorite Color"
                    onChangeText={(password) => this.setState({ password })}
                />

                <Button 
                    onPress={() => this.onSignUp()}
                    title="Sign Up"

                />
            </View>
        )
    }
}
