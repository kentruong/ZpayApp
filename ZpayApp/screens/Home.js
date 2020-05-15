import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    FlatList,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import ArrayTransaction from "../datas/arrayTransaction"
import ItemRecent from "./itemRecent"

import IconAntDesign from 'react-native-vector-icons/AntDesign'

const Item = ({ title, icon, backgroundColor, onHandlePress }) => {
    return (
        <TouchableOpacity onPress={onHandlePress}>
            <View style={styles.itemsTransaction}>
                <IconAntDesign style={[styles.iconTransaction, { backgroundColor: backgroundColor }]} name={icon} color="#eee" size={30} />
                <Text style={styles.textTransaction}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
};

// const ItemRecent = (props) => {
//     const image = { uri: props.link };
//     console.log(props.link);
//     return (
//         <TouchableOpacity>
//             <View>
//                 <View>
//                     <ImageBackground style={styles.ImageBackgrounds} source={image}></ImageBackground>
//                     <Text>{props.name}</Text>
//                 </View>
//             </View>
//         </TouchableOpacity>
//     )
// }

// const ArrayTransaction = [
//     {
//         title: "Tranfer",
//         icon: "linechart",
//         backgroundColor: "#9A71F3",
//     },
//     {
//         title: "Exchange",
//         icon: "export",
//         backgroundColor: "#FFC757",
//     },
//     {
//         title: "Rate",
//         icon: "API",
//         backgroundColor: "#F3D671",
//     },
//     {
//         title: "Withdraw",
//         icon: "swap",
//         backgroundColor: "#85E8BC",
//     },
//     {
//         title: "Request",
//         icon: "codepen",
//         backgroundColor: "#5599FF",
//     },
//     {
//         title: "Recent",
//         icon: "tago",
//         backgroundColor: "#FE724F",
//     },
// ];

class Home extends Component {

    _doWork = (param) => () => {
        console.log(param)
    }
    render() {
        return (
            <View style={styles.parentHome}>
                <View style={styles.groupScan}>
                    <View style={styles.Scan}>
                        <IconAntDesign name="scan1" color="#eee" size={45} />
                        <Text style={styles.titleScan}>Scan QR</Text>
                    </View>
                    <View style={styles.Scan}>
                        <IconAntDesign name="qrcode" color="#eee" size={45} />
                        <Text style={styles.titleScan}>Payment Code</Text>
                    </View>
                </View>
                <View style={styles.groupTransaction}>
                    <View style={styles.rowTransaction}>
                        <FlatList
                            data={ArrayTransaction}
                            renderItem={({ item, index }) => <View style={styles.arrayTransaction}>
                                <Item title={item.title} icon={item.icon} backgroundColor={item.backgroundColor} />
                            </View>}
                            numColumns={3}
                            keyExtractor={(item, index) => {
                                return index;
                            }}
                        />
                    </View>
                </View>
                <View style={styles.groupTransaction}>
                    <ItemRecent />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    parentHome: {

    },
    groupScan: {
        flexDirection: "row",
        backgroundColor: "#000267",
        width: "100%",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "space-around",
        paddingVertical: 16,
    },
    Scan: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        textAlign: "center",
    },
    titleScan: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    groupTransaction: {
        width: "100%",
    },
    rowTransaction: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 8,
        width: "100%",
    },
    arrayTransaction: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        flex: 1,
    },
    itemsTransaction: {
        alignItems: "center",
        justifyContent: "center",
        margin: 8,
        flex: 1,
    },
    iconTransaction: {
        padding: 12,
        borderRadius: 10,
    },
    textTransaction: {
        color: "#000267",
        marginTop: 4,
        fontSize: 18
    },
})
export default Home;
