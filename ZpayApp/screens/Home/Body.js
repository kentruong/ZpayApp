import React, { Component } from 'react';
import {
    View,
    Text,
    ImageBackground,
    TextInput,
    StyleSheet
} from 'react-native';

class Body extends Component {
    render() {
        return (
            <View style={styles.body}>
                <Text style={styles.titleBody}>Danh mục</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    body: {
        paddingTop: 22,
        paddingHorizontal: 24
    },
    titleBody: {
        fontSize: 24,
        fontWeight: "bold",
    }
});
export default Body;