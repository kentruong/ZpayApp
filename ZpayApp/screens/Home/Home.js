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

class Home extends Component {
    render() {
        return (
            <View style={styles.layoutHome}>
                <Header />
            </View>

        )
    }
}

const styles = StyleSheet.create({

});
export default Home;