import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    TouchableOpacity,
    ImageBackground,
    Image,
} from 'react-native';

// import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import ListCard from '../../../datas/ListCard';

class ListCategory extends Component {
    render() {
        return (
            <View style={styles.containerListCard}>
                <Text style={{fontSize: 21, fontWeight: "bold", paddingLeft: 24 }}>Danh Mục</Text>
                <View style={styles.rowListCard}>
                    <FlatList
                        style={styles.flatListListCard}
                        horizontal={true}
                        data={ListCard}
                        renderItem={({ item, index }) => (
                            <View style={styles.arrayTransaction}>
                                <View style={styles.ListCategory}>
                                    <ImageBackground source={{ uri: item.link }} style={styles.imageBackground}>
                                        <Text style={styles.title}>{item.title}</Text>
                                    </ImageBackground>
                                </View>
                            </View>
                        )}
                        keyExtractor={(item, index) => {
                            return index.toString();
                        }}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    // containerCategory: {
    //     flex: 1,
    //     flexDirection: 'column',
    // },
    // rowListCard: {

    // },
    flatListListCard:{
        padding: 24,
        margin: 0,
    },
    ListCategory: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: "space-between",
        width: 113,
        height: 171,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        marginHorizontal: 4,
        // marginVertical: 8,
        overflow: "hidden",
    },
    imageBackground: {
        height: "100%",
        width: "100%",
        flexDirection: "column",
        alignContent: "flex-end",
        justifyContent: "flex-end",
    },
    title: {
        color: '#fff',
        fontSize: 18,
        marginLeft:14,
        marginBottom: 18
    }
    
});

export default ListCategory;
