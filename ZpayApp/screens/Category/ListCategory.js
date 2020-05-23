import React, { Component } from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet
} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign'
import IconEntypo from 'react-native-vector-icons/Entypo'
import LinearGradient from "react-native-linear-gradient";

class ListCategory extends Component {
    render() {
        const image = { uri: "../../a" };
        return (
            <View style={styles.containerListCategory}>
                <Text style={styles.titleListCategory}>Danh Mục</Text>
                <View style={styles.listCategory}>
                    <ImageBackground source={require('../../assets/images/sportBox.png')} style={styles.itemCategory}>
                        {/* <Text style={styles.text}>Inside</Text> */}
                    </ImageBackground>
                    <ImageBackground source={require('../../assets/images/shopping.png')} style={styles.itemCategory}>
                        <Text style={styles.textItemCategory}>shopping</Text>
                        <Text style={styles.textItemCategory}>8 thẻ</Text>
                    </ImageBackground>
                    <ImageBackground source={require('../../assets/images/movie.png')} style={styles.itemCategory}>
                        <Text style={styles.textItemCategory}>movies</Text>
                        <Text style={styles.textItemCategory}>3 thẻ</Text>
                    </ImageBackground>
                </View>
                <View style={styles.favoritesCategory}>
                    <ImageBackground source={require('../../assets/images/itemfavoritesCategory.png')} style={styles.itemfavoritesCategory}>
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#f7f6f64a', '#f7f6f633']} style={styles.backgroundFavoritesCategory}>
                            <Text style={styles.textFavoritesCategory}>Lưu giữ thẻ dịch vụ ăn uống</Text>
                        </LinearGradient>
                        <View style={styles.Action}>
                            <View style={styles.itemAction}>
                                <IconAntDesign style={styles.iconSearch} name="pushpin" color="#F2994A" size={20} />
                            </View>
                            <View style={styles.itemAction}>
                                <IconAntDesign style={styles.iconSearch} name="edit" color="#F2C94C" size={20} />
                            </View>
                            <View style={styles.itemAction}>
                                <IconAntDesign style={styles.iconSearch} name="link" color="#DA5353" size={20} />
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.listCategory}>
                    <ImageBackground source={require('../../assets/images/travel.png')} style={styles.itemCategory}>
                        <Text style={styles.textItemCategory}>travel</Text>
                        <Text style={styles.textItemCategory}>4 thẻ</Text>
                    </ImageBackground>
                    <ImageBackground source={require('../../assets/images/client.png')} style={styles.itemCategory}>
                        <Text style={styles.textItemCategory}>client</Text>
                        <Text style={styles.textItemCategory}>5 thẻ</Text>
                    </ImageBackground>
                    <ImageBackground source={require('../../assets/images/coffee.png')} style={styles.itemCategory}>
                        <Text style={styles.textItemCategory}>coffee</Text>
                        <Text style={styles.textItemCategory}>5 thẻ</Text>
                    </ImageBackground>
                </View>
                <View style={styles.listCategory}>
                    <ImageBackground source={require('../../assets/images/banking.png')} style={styles.itemCategory}>
                        <Text style={styles.textItemCategory}>banking</Text>
                        <Text style={styles.textItemCategory}>10 thẻ</Text>
                    </ImageBackground>
                    <ImageBackground source={require('../../assets/images/entertainment.png')} style={styles.itemCategory}>
                        {/* <Text style={styles.textItemCategory}>shopping</Text> */}
                        {/* <Text style={styles.textItemCategory}>8 thẻ</Text> */}
                    </ImageBackground>
                    <ImageBackground source={require('../../assets/images/tech.png')} style={styles.itemCategory}>
                        {/* <Text style={styles.textItemCategory}>tech</Text>
                        <Text style={styles.textItemCategory}>3 thẻ</Text> */}
                    </ImageBackground>
                </View>
                <View style={styles.addItemCategory}>
                    <View style={styles.buttonAdd}>
                        <View style={styles.borderButton}>
                            <IconEntypo style={styles.iconAdd} name="plus" color="#fff" size={20} />
                        </View>

                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerListCategory: {
        paddingHorizontal: 24,
        paddingBottom: 30,
    },
    titleListCategory: {
        fontWeight: "bold",
        fontSize: 24,
        marginBottom: 12,
    },
    listCategory: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 12,
        borderRadius: 10,
        overflow: "hidden"
    },
    itemCategory: {
        width: 118,
        height: 118,
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 4,
    },
    textItemCategory: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        textShadowColor: '#585858',
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 10,
    },
    favoritesCategory: {
        marginBottom: 12,
        borderRadius: 10,
        overflow: "hidden"
    },
    backgroundFavoritesCategory: {
        marginTop: 52,
        marginLeft: 16,
        borderRadius: 50,
        padding: 8,
        width: "100%",
    },
    textFavoritesCategory: {
        fontSize: 18,
        color: "#fff",
    },
    itemfavoritesCategory: {
        width: "100%",
        height: 183,
    },
    Action: {
        flexDirection: "row",
        width: "100%",
        marginTop: 30,
        alignItems: "center",
        justifyContent: "flex-end",
        paddingRight: 24,
    },
    itemAction: {
        backgroundColor: "#f7f6f64a",
        height: 50,
        width: 50,
        borderRadius: 10,
        marginLeft: 12,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    addItemCategory: {
        alignItems: "flex-end",
        justifyContent: "center",
    },
    buttonAdd: {
        // width: 118,
        // height: 56,
        backgroundColor: "#27E978",
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    borderButton: {
        // dashed
        borderStyle: 'dashed',
        borderWidth: 2,
        borderColor: "#fff",
        paddingHorizontal: 30,
        paddingVertical: 6,
        margin: 12,
        borderRadius: 10,
    },
    iconAdd: {
        fontWeight: "bold"
    }
});

export default ListCategory;