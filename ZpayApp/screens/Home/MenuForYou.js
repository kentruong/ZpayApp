import React, { Component } from 'react';
import {
    View,
    Text,
    ImageBackground,
    TextInput,
    StyleSheet,
    Image
} from 'react-native';

import IconFeather from 'react-native-vector-icons/Feather'
import IconEntypo from 'react-native-vector-icons/Entypo'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
class MenuForYou extends Component {
    render() {
        return (
            <View>
                <Text style={{ fontSize: 21, fontWeight: "bold", paddingLeft: 24 }}>Dành Cho Bạn</Text>
                <View style={styles.listBox}>
                    <View style={styles.containerBox}>
                        <View style={styles.itemBox}>
                            {/* <Image source={require('../../assets/images/shopping.png')} /> */}
                            <IconFeather name="shopping-bag" color="#fff" style={{ fontWeight: "bold" }} size={42} />
                        </View>
                        <Text style={styles.titleBox}>Shopping</Text>
                    </View>
                    <View style={styles.containerBox}>
                        <View style={styles.itemBox}>
                            <IconEntypo name="sports-club" color="#fff" style={{ fontWeight: "bold" }} size={42} />
                        </View>
                        <Text style={styles.titleBox}>Sport</Text>
                    </View>
                    <View style={styles.containerBox}>
                        <View style={styles.itemBox}>
                            <IconFontAwesome name="file-movie-o" color="#fff" style={{ fontWeight: "bold" }} size={42} />
                        </View>
                        <Text style={styles.titleBox}>Movie</Text>
                    </View>
                </View>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    listBox: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 24,
        paddingTop: 24,
    },
    containerBox: {
        justifyContent: "center",
        alignItems: "center",
    },
    itemBox: {
        width: 100,
        height: 100,
        backgroundColor: "#43B0D2",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    titleBox: {
        // fontWeight:"bold"
    }
})

export default MenuForYou;