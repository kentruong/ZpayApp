import React, { Component } from 'react';
import {
    View,
    Text,
    ImageBackground,
    TextInput,
    StyleSheet
} from 'react-native';

import ListCategory from "./Category/ListCategory";
import ListRecent from "./Category/ListRecent";
import ListFavorites from "./Category/ListFavorites";

class Body extends Component {
    render() {
        return (
            <View style={styles.body}>
                {/* <Text style={styles.titleBody}>Danh mục</Text> */}
                <ListCategory />
                <ListRecent />
                <ListFavorites />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    body: {
        paddingTop: 22,
        // paddingHorizontal: 24,
        paddingBottom: 22,
    },
    // titleBody: {
    //     fontSize: 24,
    //     fontWeight: "bold",
    //     paddingLeft: 24,
    // }
});
export default Body;