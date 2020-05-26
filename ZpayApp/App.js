/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// import Home from './screens/Home';
import Robot from './components/Robot';
import MultipleGreetings from './components/MultipleGreetings';
import Home from "./screens/Home/Home"
// import MainCategory from './screens/Category/MainCategory';
import LayoutManageCard from "./screens/ManageCard/LayoutManageCard"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}

class App extends Component {
    render() {
        return (
            // <View style={styles.wrapper}>
            //     <ScrollView style={styles.scrollView} >
            //         <MainCategory />
            //     </ScrollView>
            // </View>
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={Home} />
                    <Tab.Screen name="Settings" component={MultipleGreetings} />
                    <Tab.Screen name="Card" component={LayoutManageCard} />
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    scrollView: {
        // backgroundColor: "pink"
    },
});
export default App;
