import Carousel from 'react-native-snap-carousel';
import React, { Component } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    View,
    Text,
    StatusBar,
    ImageBackground,
} from 'react-native';

class ListRecent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            carouselItems: [
                {
                    title: "California fitness",
                    text: "Text 1",
                    link: "https://lh3.googleusercontent.com/proxy/dSe9SUgVJ3NmCa4eNeJ3LeQNxIEBVPNLtnZM7TWoNbCdp8LZOVn0xZAMuyDXOti2-zHfdWYXYSKjrPbg5DGsn_OzPVAyH56QcPBB1wwYd0_asQA",
                    backgroundColor: "#000"
                },
                {
                    title: "PornHub",
                    text: "Text 2",
                    link: "https://vi.vpnmentor.com/wp-content/uploads/2020/03/Designs_March-29-768x403.jpg",
                    backgroundColor: "#000"
                },
                {
                    title: "Coopmart",
                    text: "Text 3",
                    link: "https://www.blupond.com/wp-content/uploads/2019/07/VIP-Card-768x494.png",
                    backgroundColor: "#000"
                },
                {
                    title: "Vint ID",
                    text: "Text 4",
                    link: "https://www.mapway.vn/wp-content/uploads/2019/03/Vinhomes-Central-Park-880x660.jpg",
                    backgroundColor: "#000"
                },
                {
                    title: "Zsolution VIP",
                    text: "Text 5",
                    link: "https://specials-images.forbesimg.com/imageserve/1137376687/960x0.jpg?fit=scale",
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
                    {/* <Text>{item.text}</Text */}
                </ImageBackground>
            </View>
        )
    }

    render() {
        return (
            <SafeAreaView style={{ backgroundColor: '#43B0D2' , paddingBottom: 24, borderBottomLeftRadius: 20, borderTopLeftRadius: 20 }}>
                {/* <ScrollView style={styles.scrollView}> */}
                <Text style={styles.tileInterests}>Gần đây</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
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

                    </View>
                {/* </ScrollView> */}
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    scrollView: {

    },
    tileInterests: {
        fontSize: 24,
        color: "#fff",
        fontWeight: "bold",
        paddingLeft: 24,
        marginBottom: 24,
        paddingTop: 14,
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
    }
})
export default ListRecent;