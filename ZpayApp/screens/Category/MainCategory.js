import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
} from 'react-native';

import Header from "./Header";
import ListCategory from "./ListCategory";


class MainCategory extends Component {
    render() {
        return (
            <View style={styles.layoutMainCategory}>
                <Header />
                <ListCategory />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    layoutMainCategory: {

    }
});
export default MainCategory;