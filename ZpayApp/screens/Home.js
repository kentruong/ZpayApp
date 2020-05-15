import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import IconAntDesign from 'react-native-vector-icons/AntDesign'

const Item = ({title, icon, backgroundColor, onHandlePress}) => {
    return(
        <TouchableOpacity onPress={onHandlePress}>
            <View style={styles.itemsTransaction}>
                <IconAntDesign style={[styles.iconTransaction, { backgroundColor: backgroundColor }]} name={icon} color="#eee" size={30} />
                <Text style={styles.textWhite}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

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
                        {/* <TouchableOpacity>
                            <View style={styles.itemsTransaction}>
                                <IconAntDesign style={[styles.iconTransaction, { backgroundColor: "#9A71F3" }]} name="qrcode" color="#eee" size={30} />
                                <Text style={styles.textWhite}>Tranfer</Text>
                            </View>
                        </TouchableOpacity> */}
                        {new Array(3).fill().map((value, index) => {
                             return <Item title={'Tranfer'} icon={'qrcode'} backgroundColor={'#9A71F3'} onHandlePress={() => {}}/>
                        })}
                       
                        {/* <Item title={'Exchange'} icon={'qrcode'} backgroundColor={'#FFC757'} onHandlePress={() => {}}/>
                        <Item title={'Exchange'} icon={'qrcode'} backgroundColor={'#FFC757'} onHandlePress={() => {}}/>
                        <Item title={'Exchange'} icon={'qrcode'} backgroundColor={'#FFC757'} onHandlePress={() => {}}/>
                        <Item title={'Exchange'} icon={'qrcode'} backgroundColor={'#FFC757'} onHandlePress={() => {}}/>
                        <Item title={'Exchange'} icon={'qrcode'} backgroundColor={'#FFC757'} onHandlePress={() => {}}/> */}
                        {/* <TouchableOpacity>
                            <View style={styles.itemsTransaction}>
                                <IconAntDesign style={[styles.iconTransaction, { backgroundColor: "#FFC757" }]} name="qrcode" color="#eee" size={30} />
                                <Text style={styles.textWhite}>Exchange</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.itemsTransaction}>
                            <IconAntDesign style={[styles.iconTransaction, { backgroundColor: "#F3D671" }]} name="qrcode" color="#eee" size={30} />
                            <Text style={styles.textWhite}>Rate</Text>
                        </View> */}
                    </View>
                    <View style={styles.rowTransaction}>
                        {/* <TouchableOpacity>
                            <View style={styles.itemsTransaction}>
                                <IconAntDesign style={[styles.iconTransaction, { backgroundColor: "#9A71F3" }]} name="qrcode" color="#eee" size={30} />
                                <Text style={styles.textWhite}>Tranfer</Text>
                            </View>
                        </TouchableOpacity> */}
                        {new Array(3).fill().map((value, index) => {
                             return <Item title={'Tranfer'} icon={'qrcode'} backgroundColor={'#9A71F3'} onHandlePress={() => {}}/>
                        })}
                       
                        {/* <Item title={'Exchange'} icon={'qrcode'} backgroundColor={'#FFC757'} onHandlePress={() => {}}/>
                        <Item title={'Exchange'} icon={'qrcode'} backgroundColor={'#FFC757'} onHandlePress={() => {}}/>
                        <Item title={'Exchange'} icon={'qrcode'} backgroundColor={'#FFC757'} onHandlePress={() => {}}/>
                        <Item title={'Exchange'} icon={'qrcode'} backgroundColor={'#FFC757'} onHandlePress={() => {}}/>
                        <Item title={'Exchange'} icon={'qrcode'} backgroundColor={'#FFC757'} onHandlePress={() => {}}/> */}
                        {/* <TouchableOpacity>
                            <View style={styles.itemsTransaction}>
                                <IconAntDesign style={[styles.iconTransaction, { backgroundColor: "#FFC757" }]} name="qrcode" color="#eee" size={30} />
                                <Text style={styles.textWhite}>Exchange</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.itemsTransaction}>
                            <IconAntDesign style={[styles.iconTransaction, { backgroundColor: "#F3D671" }]} name="qrcode" color="#eee" size={30} />
                            <Text style={styles.textWhite}>Rate</Text>
                        </View> */}
                    </View>
                    {/* <View style={styles.rowTransaction}>
                        <View style={styles.itemsTransaction}>
                            <IconAntDesign style={[styles.iconTransaction, { backgroundColor: "#85E8BC" }]} name="qrcode" color="#eee" size={30} />
                            <Text style={styles.textWhite}>Widraww</Text>
                        </View>
                        <View style={styles.itemsTransaction}>
                            <IconAntDesign style={[styles.iconTransaction, { backgroundColor: "#5599FF" }]} name="qrcode" color="#eee" size={30} />
                            <Text style={styles.textWhite}>Request</Text>
                        </View>
                        <View style={styles.itemsTransaction}>
                            <IconAntDesign style={[styles.iconTransaction, { backgroundColor: "#FE724F" }]} name="qrcode" color="#eee" size={30} />
                            <Text style={styles.textWhite}>Recent</Text>
                        </View>
                    </View> */}
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
        padding: 4
    },
    rowTransaction: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 8,
        paddingHorizontal: 16,
    },
    itemsTransaction: {
        alignItems: "center",
        justifyContent: "center",
        margin: 8
    },
    iconTransaction: {
        padding: 12,
        borderRadius: 10,
    },
    textWhite: {
        color: "#000267",
        marginTop: 4,
        fontSize: 18
    }
})
export default Home;
