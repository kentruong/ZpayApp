import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import Header from "./Header";
import Body from "./Body";

import MenuForYou from "./MenuForYou";
import BonusRecent from "./BonusRecent";


class Home extends Component {
    render() {
        return (
            <View style={styles.layoutHome}>
                <Header />
                <Body />
                <MenuForYou />
                <BonusRecent />
            </View>
        )
    }
}

const styles = StyleSheet.create({

});
export default Home;