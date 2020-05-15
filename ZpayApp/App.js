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

import Home from './screens/Home';

class App extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <Home />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 16,
    }
})
export default App;
