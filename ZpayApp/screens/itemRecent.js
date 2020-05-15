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


import ArrayTransaction from "../datas/arrayTransaction"
import ArrayRecentTransaction from "../datas/arrayRecentTransaction"

import IconAntDesign from 'react-native-vector-icons/AntDesign'

const Item = (props) => {
    const image = { uri: props.link };
    console.log(props.link);
    return (
        <TouchableOpacity>
            <View style={styles.parentItems}>
                <Image style={styles.ImageBackgrounds} source={image} />
                <View style={styles.containerContent}>
                    <Text style={styles.nameUser}>{props.name}</Text>
                    <Text style={styles.date}>{props.time}</Text>
                </View>
                <View style={styles.containerInfo}>
                    <Text style={styles.points}>{props.point}</Text>
                    <Text style={styles.status}>{props.status}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

class ItemRecent extends Component {

    _doWork = (param) => () => {
        console.log(param)
    }
    render() {
        return (
            <View style={styles.parentRecent}>
                <View>
                    <Text style={styles.titles}>Recent transaction</Text>
                </View>
                <View style={styles.groupRecent}>
                    <View style={styles.rowRecent}>
                        <FlatList
                            data={ArrayRecentTransaction}
                            renderItem={({ item, index }) => <Item link={item.link} name={item.name} time={item.time} point={item.point} status={item.status}
                                keyExtractor={(item, index) => {
                                    return index;
                                }}
                            />}
                        />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    parentItems: {
        flexDirection: "row",
        marginVertical: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,

        elevation: 1,
        backgroundColor: "#fff",
        borderRadius: 5,
    },
    ImageBackgrounds: {
        width: 50,
        height: 50,
        borderRadius: 5,
    },
    
    titles: {
        fontWeight: 'bold',
        fontSize: 18,
        color: "#000116",
        marginBottom: 8
    },
    ImageBackgrounds: {
        width: 50,
        height: 50,
        borderRadius: 5,
        margin: 12,
    },
    containerContent: {
        justifyContent: "space-between",
        marginVertical: 8,
        flex: 1,
    },
    nameUser: {
        color: "#000116",
        fontSize: 16
    },
    date: {
        fontSize: 14,
        color: "#94999F",
    },
    containerInfo: {
        alignItems: "flex-end",
        justifyContent: "space-between",
        marginVertical: 8,
        paddingRight: 16
    },
    points: {
        fontWeight: 'bold',
    },
    status: {
        color: "#39CB73"
    }
})
export default ItemRecent;
