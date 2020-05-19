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
import ListRecent from "./ListRecent"
import ListCard from "./ListCard"

import IconAntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="ListRecent"
            activeColor="red"
            inactiveColor="#3e2465"
            barStyle={{ backgroundColor: '#fff' }}
            style={styles.ListRecent}
        >
            <Tab.Screen
                name="ListRecent"
                component={ListRecent}
                options={{
                    // tabBarLabel: 'ListRecent',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} style={styles.iconTabBottom} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="ListCard"
                component={ListCard}
                options={{
                    // tabBarLabel: 'DetailRecent',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} style={styles.iconTabBottom} size={26} />
                    ),
                }}
            />
            {/* <Tab.Screen name="ListRecent" component={ListRecent} /> */}
            {/* <Tab.Screen name="DetailRecent" component={DetailRecent} /> */}
        </Tab.Navigator>
    );
}

class Home extends Component {

    _doWork = (param) => () => {
        console.log(param)
    }
    render() {
        return (
            <NavigationContainer>
                {/* <View style={styles.parentHome}>
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
                                    return index.toString();
                                }}
                            />
                        </View>
                    </View>
                </View> */}
                <MyTabs />
            </NavigationContainer>
        )
    }
}

const styles = StyleSheet.create({
    parentHome: {

    },
    ListRecent: {
        // padding: 16,
    },
    groupScan: {
        flexDirection: "row",
        backgroundColor: "#000267",
        // width: "100%",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "space-around",
        padding: 16,
        marginHorizontal: 16,
        marginTop: 16
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
    iconTabBottom: {
        fontWeight: "bold"
    }
})
export default Home;
