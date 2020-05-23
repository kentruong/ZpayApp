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
import { Avatar, Badge, withBadge } from 'react-native-elements'

class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <View style={styles.groupSearch}>
                    <IconEvilIcons style={styles.iconSearch} name="search" color="#ccc" size={20} />
                    <TextInput placeholder="Search" style={styles.inputSearch} placeholderTextColor="#ccc" />
                </View>
                <View style={styles.notification}>
                    <IconFontAwesome name="bell" color="#404040" size={21} />
                    <Badge status="error" containerStyle={{ position: 'absolute', top: 5, right: 5 }} />
                </View>
                <Avatar size={40} containerStyle={{ borderWidth: 2, borderColor: "#fff", marginLeft: 4 }} rounded source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg', }} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        width: "100%",
        overflow: "hidden",
        alignItems: "center",
        paddingHorizontal: 24,
        paddingVertical: 12
    },
    notification: {
        position: "relative",
        width: 39,
        height: 39,
        alignItems: "center",
        justifyContent: "center",
    },
    groupSearch: {
        flex: 1,
        flexDirection: "row",
        height: 34,
        borderColor: '#ccc',
        borderWidth: 1,
        backgroundColor: "#fff",
        borderRadius: 30,
        alignItems: "center",
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