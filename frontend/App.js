import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';

import { View, Text } from 'react-native'
import * as Font from "expo-font"
import { AppLoading } from 'expo'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './redux/reducers'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk));

const firebaseConfig = {
  apiKey: "AIzaSyD86M1KfAn9I6XzXjzfvx_zE5v3P_dQZ_s",
  authDomain: "multi-c6238.firebaseapp.com",
  projectId: "multi-c6238",
  storageBucket: "multi-c6238.appspot.com",
  messagingSenderId: "376710698827",
  appId: "1:376710698827:web:b2702f47aaafb08862bace",
  measurementId: "G-8WFFS683TN"
};

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig);
}


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from './components/auth/Landing'
import RegisterScreen from './components/auth/Register'
import LoginScreen from './components/auth/Login'

import MainScreen from './components/Main'
import AddScreen from './components/main/Add'
import SaveScreen from './components/main/Save'
import CommentScreen from './components/main/Comment'

const fetchFont = () => {
  Font.loadAsync({
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf')
  });
};

const Stack = createStackNavigator();

export class App extends Component {

  
  constructor(props){
    super(props);
    this.state = {
      loaded: false,
    }
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) => {
      if(!user){
        this.setState({
          loggedIn: false,
          loaded: true,
        })
      }else {
          this.setState({
            loggedIn: true,
            loaded: true,
          })
        }
    })
  }

  render() {
    const { loggedIn, loaded } = this.state;
      if(!loaded){
        return(
          <View style={{ flex: 1, justifyContent: 'center'}}>
            <Text>Loading</Text>
          </View>
        )
      }

      if(!loggedIn) {
      return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName = "Landing">
              <Stack.Screen name = "Landing" component={LandingScreen}/>
              <Stack.Screen name = "Register" component={RegisterScreen}/>
              <Stack.Screen name = "Login" component={LoginScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
      );
    }

    return(
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName = "Main">
              <Stack.Screen name = "Main" component={MainScreen} options={{ headerShown: false }}/>
              <Stack.Screen name = "Add" component={AddScreen} navigation={this.props.navigation} />
              <Stack.Screen name = "Save" component={SaveScreen} navigation={this.props.navigation}/>
              <Stack.Screen name = "Comment" component={CommentScreen} navigation={this.props.navigation}/>

            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
          
    )
  }
}

export default App

