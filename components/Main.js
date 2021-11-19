import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUser } from '../redux/actions/index'

const Tab = createMaterialBottomTabNavigator();




const EmptyScreen = () => {
    return(null)
}

export class Main extends Component {

    componentDidMount(){
        this.props.fetchUser()
    }
    render() {
        return (
            <Tab.Navigator initialRouteName="MainDashoard" labeled={false}>
                <Tab.Screen name="MainProfile" component={EmptyScreen} 
                listeners={({ navigation }) => ({
                    tabPress: event => {
                        event.preventDefault()
                        navigation.navigate("Profile")
                    }
                })}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="account-circle" color={color} size={26}/>
                    ),
                }}/>
                <Tab.Screen name="MainDashboard" component={EmptyScreen}
                listeners={({ navigation }) => ({
                    tabPress: event => {
                        event.preventDefault()
                        navigation.navigate("Dashboard")
                    }
                })}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="view-dashboard-variant" color={color} size={26}/>
                    ),
                }}/>
                 <Tab.Screen name="MainAdd" component={EmptyScreen}
                 listeners={({ navigation }) => ({
                    tabPress: event => {
                        event.preventDefault()
                        navigation.navigate("Add")
                    }
                })} 
                options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="plus-box" color={color} size={26}/>
                    ),
                }}/>
                <Tab.Screen name="MainNotifications" component={EmptyScreen}
                listeners={({ navigation }) => ({
                    tabPress: event => {
                        event.preventDefault()
                        navigation.navigate("Notifications")
                    }
                })} 
                options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="bell-circle" color={color} size={26}/>
                    ),
                }}/>
                
            </Tab.Navigator>
        )
    }
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
})

const mapDispatchProps = (dispatch) => bindActionCreators({fetchUser}, dispatch)

export default connect(mapStateToProps, mapDispatchProps)(Main)
