import React, { Component } from 'react';
import {
    View,
    Text,
    ImageBackground,
    TextInput,
    StyleSheet
} from 'react-native';

import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import IconEvilIcons from 'react-native-vector-icons/EvilIcons'

// cài gói npm i react-native-elements --save
import { Avatar, Badge, withBadge } from 'react-native-elements'

const image = { uri: "https://images.unsplash.com/photo-1532152734721-b08cb57943aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" };
class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <ImageBackground source={image} style={styles.image}>
                    <View style={styles.infoHeader}>
                        <Text style={styles.text}>Hello, NamKun !</Text>
                        <View style={styles.rightHeader}>
                            <View style={styles.notification}>
                                <IconFontAwesome name="bell" color="#eee" size={21} />
                                <Badge status="error" containerStyle={{ position: 'absolute', top: 5, right: 5 }} />
                            </View>
                            <Avatar size={40} containerStyle={{ borderWidth: 2, borderColor: "#fff", marginLeft: 4 }} rounded source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg', }} />
                        </View>
                    </View>
                    <View style={styles.groupSearch}>
                        <IconEvilIcons style={styles.iconSearch} name="search" color="#ccc" size={20} />
                        <TextInput placeholder="Search" style={styles.inputSearch} placeholderTextColor="#ccc" />
                    </View>
                    <TextInput placeholder="Search" style={styles.inputSearch} />
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
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
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 24,
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
        width: 39,
        height: 39,
        alignItems: "center",
        justifyContent: "center",
    },
    imgAvatar: {

    },
    text: {
        color: "#fff",
        fontSize: 18,
        flex: 1,
    },
    groupSearch: {
        flexDirection: "row",
        height: 34,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: "#fff",
        borderRadius: 30,
        alignItems: "center",
        padding: 0,
        marginTop: 16,
    },
    iconSearch: {
        fontWeight: "100",
        paddingRight: 8,
        paddingLeft: 8,
    },
    inputSearch: {
        flex: 1,
        fontSize: 14,
        padding: 0,
    }
});
export default Header;