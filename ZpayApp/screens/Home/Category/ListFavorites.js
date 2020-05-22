import Carousel from 'react-native-snap-carousel';
import React, { Component } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    View,
    Text,
    ImageBackground,
} from 'react-native';

import IconAntDesign from 'react-native-vector-icons/AntDesign'

class ListFavorites extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            carouselItems: [
                {
                    title: "Marvel will make Thor 4",
                    text: "Thor",
                    link: "https://i.ytimg.com/vi/visGb2twgNY/maxresdefault.jpg",
                    backgroundColor: "#000"
                },
                {
                    title: "PornHub",
                    text: "Best Ragini MMS Returns Episodes | Episode Ninja",
                    link: "https://cdn.episode.ninja/file/episodeninja/show/336984-thumb.jpg",
                    backgroundColor: "#000"
                },
                {
                    title: "How to stream Iron Man online ...",
                    text: "Iron Man",
                    link: "https://cdn.mos.cms.futurecdn.net/wxZwTUav8sVrCdMm3WrtdE.png",
                    backgroundColor: "#000"
                },
                {
                    title: "MCU Fans Solve...",
                    text: "Captain America",
                    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRTefiEyJF-ZMLS5yALaQVdZ8_bi8eb9D7TODkJYsR4yqqAH_p2&usqp=CAU",
                    backgroundColor: "#000"
                },
                {
                    title: "Elizabeth Olsen's 'Avengers'",
                    text: "Zsolution VIP",
                    link: "https://mtv.mtvnimages.com/uri/mgid:ao:image:mtv.com:91092?quality=0.8&format=jpg",
                    backgroundColor: "#01579B"
                },
            ]
        }
    }

    _renderItem({ item, index }) {
        const image = { uri: item.link };
        return (
            <View style={{
                backgroundColor: item.backgroundColor,
                borderRadius: 10,
                overflow: "hidden",
                scaleX: -1,
                height: 185,
                // padding: 14,
                marginLeft: 50,


                shadowColor: "red",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
            }}>
                <ImageBackground source={image} style={styles.imageBackground}>
                    <Text style={styles.tileCard}>{item.title}</Text>
                    <Text style={styles.tileSubCard}>{item.text}</Text>
                </ImageBackground>
            </View>
        )
    }

    render() {
        return (
            <SafeAreaView style={{ paddingBottom: 24, borderBottomLeftRadius: 20, borderTopLeftRadius: 20 }}>
                <Text style={styles.tileFavorites}>Yêu thích</Text>
                <View style={{ position: "relative", flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Carousel
                        loop={true}
                        layout={'stack'}
                        layoutCardOffset={50}
                        ref={ref => this.carousel = ref}
                        data={this.state.carouselItems}
                        sliderWidth={200}
                        itemWidth={425}
                        activeSlideOffset={1}
                        firstItem={this.state.carouselItems.length - 1}
                        containerCustomStyle={{
                            transform: [{ scaleX: -1 }]
                        }}
                        renderItem={this._renderItem}
                        onSnapToItem={index => this.setState({ activeIndex: index })} />
                    <View style={styles.buttonAdd}>
                        <IconAntDesign name="plus" color="#fff" style={{ fontWeight: "bold" }} size={42} />
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    tileFavorites: {
        fontSize: 24,
        fontWeight: "bold",
        paddingLeft: 24,
        marginBottom: 14,
        paddingTop: 8,
    },
    imageBackground: {
        flex: 1,
        justifyContent: "flex-end",
        paddingBottom: 16,
        paddingLeft: 30,

        shadowColor: "red",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    tileCard: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
    },
    tileSubCard: {
        color: "#fff",
    },
    buttonAdd: {
        width: 84,
        height: 84,
        borderRadius: 50,
        backgroundColor: "#36D579",
        position: "absolute",
        right: 22,
        bottom: -42,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
})
export default ListFavorites;
