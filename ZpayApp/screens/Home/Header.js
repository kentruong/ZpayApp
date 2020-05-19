import React, { Component } from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet
} from 'react-native';

import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5'

// cài gói npm i react-native-elements --save
import { Avatar, Badge, withBadge } from 'react-native-elements'

const image = { uri: "https://images.unsplash.com/photo-1526666923127-b2970f64b422?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80" };
class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <ImageBackground source={image} style={styles.image}>
                    <View style={styles.infoHeader}>
                        <Text style={styles.text}>Hello, NamKun !</Text>
                        <View style={styles.rightHeader}>
                            <View style={styles.notification}>
                                <IconFontAwesome5 name="bell" color="#eee" size={21} />
                                <Badge status="error" containerStyle={{ position: 'absolute', top: 0, right: 0 }} />
                            </View>
                            <Avatar size={40} containerStyle={{ borderWidth: 2, borderColor: "#fff", marginLeft: 4}} rounded source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg', }} />
                        </View>
                    </View>
                </ImageBackground>

                {/* <ImageBackground style={{ height: 100, width: 100, borderRadius: 50 }} source={{ uri: 'https://images.unsplash.com/photo-1496065187959-7f07b8353c55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80' }} >
                    <Text style={styles.text}>Inside</Text>
                </ImageBackground> */}
            </View>

        )
    }
}

const styles = StyleSheet.create({
    header: {
        // flex: 1,
        flexDirection: "column",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: "green",
        width: "100%",
        height: 140,
        overflow: "hidden",
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        // height: 140,
        // width: 100,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 24
    },
    infoHeader: {
        flexDirection: "row",
    },
    rightHeader: {
        flexDirection: "row",
        alignItems: "center",
    },
    notification: {
        position: "relative",
        // backgroundColor: "red",
        width: 39,
        height: 39,
        alignItems: "center",
        justifyContent: "center",
    },
    imgAvatar: {
        // borderWidth: 2,
        // borderColor: "#fff",
    },
    text: {
        color: "#fff",
        fontSize: 18,
        flex: 1,
        // fontWeight: "bold"
    }
});
export default Header;