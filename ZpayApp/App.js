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
// import Robot from './components/Robot';
// import MultipleGreetings from './components/MultipleGreetings';
// import Home from "./screens/Home/Home"
import MainCategory from "./screens/Category/MainCategory"
// import Demo from "./screens/Demo"

class App extends Component {
    render() {
        return (
            // <View style={styles.wrapper}>
            //     <Robot />
            //     <MultipleGreetings />
            //     <Home />
            // </View>
            <View style={styles.wrapper}>
                <ScrollView style={styles.scrollView} >
                    {/* <Home /> */}
                    <MainCategory />
                </ScrollView>


                {/* <Demo /> */}
            </View>

        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    scrollView: {
        // backgroundColor: "pink"
    },
})
export default App;
