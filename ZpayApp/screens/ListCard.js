import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    TouchableOpacity,
    ImageBackground,
    Image
} from 'react-native';

import ArrayRecentTransaction from "../datas/arrayRecentTransaction";
import Item from "./ListRecent"

class ListCard extends Component {

    _doWork = (param) => () => {
        console.log(param)
    }
    render() {
        return (
            <View style={styles.parentRecent}>
                <View style={styles.groupRecent}>
                    <View style={styles.rowRecent}>
                        <Text>DetailRecent</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})

export default ListCard;