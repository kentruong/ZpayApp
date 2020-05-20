import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import Header from "./Header"
import Body from "./Body"


class Home extends Component {
    render() {
        return (
            <View style={styles.layoutHome}>
                <Header />
                <Body />
            </View>
        )
    }
}

const styles = StyleSheet.create({

});
export default Home;