import React, { useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator, useHeaderHeight } from '@react-navigation/stack'
import { NavigationContainer, getFocusedRouteNameFromRoute, useNavigation } from '@react-navigation/native'


import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import GLOBAL from './AppConstant'

import HomeScreen from './Screens/TabScreens/HomeScreen'
import AboutScreen from './Screens/TabScreens/About'
import AddScreen from './Screens/TabScreens/AddScreen'

import LoginScreen from './Screens/AuthScreens/LoginScreen'
import RegistrationScreen from './Screens/AuthScreens/RegistrationScreen'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();



const BottomTab = () => {
    return (

        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeBackgroundColor: GLOBAL.COLOR.GRAY,
                activeTintColor: GLOBAL.COLOR.BLACK,
                style: { backgroundColor: GLOBAL.COLOR.YELLOW }
            }}

        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: () => (
                        <Entypo name="home" size={24} color={GLOBAL.COLOR.BLACK} />
                    ),
                    tabBarLabel: () => { return null },
                }} />
            <Tab.Screen
                name="Add"
                component={AddScreen}
                options={{
                    tabBarIcon: () => (
                        <Entypo name="plus" size={24} color={GLOBAL.COLOR.BLACK} />
                    ),
                    tabBarLabel: () => { return null },
                }} />


            <Tab.Screen
                name="Login"
                component={Auth}
                options={{
                    tabBarIcon: () => (
                        <Entypo name="user" size={24} color="black" />
                    ),
                    tabBarLabel: () => { return null },
                }} />


            <Tab.Screen
                name="About"
                component={AboutScreen}
                options={{
                    tabBarIcon: () => (
                        <Entypo name="info" size={24} color={GLOBAL.COLOR.BLACK} />
                    ),
                    tabBarLabel: () => { return null },
                }} />



        </Tab.Navigator>

    );
}


const Stack = createStackNavigator();

function getHeaderTitle(route) {


    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home'
    console.log(routeName)
    switch (routeName) {
        case 'Home':
            return 'Home'
        case 'Add':
            return 'Add Details'
        case 'List':
            return 'Search'
        case 'About':
            return 'About'
        case 'Login':
            return ''

    }
}

const Auth = () => {

    const height = useHeaderHeight();
    height.toPrecision(2)
    console.log("Height " + height)
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen}
                options={{ headerShown: false, }}></Stack.Screen>
            <Stack.Screen name="Registration" component={RegistrationScreen} options={{ headerShown: false }}></Stack.Screen>
        </Stack.Navigator >
    )
}


export default function Navigation() {

    // useEffect(() => {
    //     AsyncStorage.getItem("user_id").then((value) => {
    //         console.log("Here printint" + value)
    //         navigation.navigate("BottomNavigation")
    //     })
    // })

    return (

        <NavigationContainer >

            <Stack.Navigator
                initialRouteName="BottomNavigation"
                screenOptions={{ headerStyle: { backgroundColor: GLOBAL.COLOR.YELLOW, height: GLOBAL.STATUS_HEIGHT } }}
            >
                <Stack.Screen name="BottomNavigation" component={BottomTab} options={({ route }) => ({
                    headerBackTitle: '',//getHeaderTitle(route),
                    headerTitle: '',//getHeaderTitle(route)
                })} ></Stack.Screen>

            </Stack.Navigator >
        </NavigationContainer >
    );


}