import Carousel from 'react-native-snap-carousel';
import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

class MyCarousel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            carouselItems: [
                {
                    title: "Item 1",
                    text: "Text 1",
                    color: "red",
                },
                {
                    title: "Item 2",
                    text: "Text 2",
                    color: "pink",
                },
                {
                    title: "Item 3",
                    text: "Text 3",
                    color: "blue",
                },
                {
                    title: "Item 4",
                    text: "Text 4",
                    color: "green",
                },
                {
                    title: "Item 5",
                    text: "Text 5",
                    color: "yellow",
                },
            ]
        }
    }

    _renderItem({ item, index }) {
        return (
            <View style={{
                backgroundColor: item.color,
                borderRadius: 5,
                scaleX: -1,
                height: 250,
                padding: 50,
                marginLeft: 25,
            }}>
                <Text style={{ fontSize: 30 }}>{item.title}</Text>
                <Text>{item.text}</Text>
            </View>
        )
    }

    render() {
        return (
            <SafeAreaView style={{ backgroundColor: 'rebeccapurple', }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Carousel
                    loop={true}
                        layout={'stack'} 
                        layoutCardOffset={18}
                        ref={ref => this.carousel = ref}
                        data={this.state.carouselItems}
                        sliderWidth={200}
                        itemWidth={400}
                        activeSlideOffset={1}
                        firstItem={this.state.carouselItems.length - 1}
                        containerCustomStyle={{
                            transform: [{ scaleX: -1 }]
                        }}
                        renderItem={this._renderItem}
                        onSnapToItem={index => this.setState({ activeIndex: index })} />
                        
                </View>
            </SafeAreaView>
        );
    }
}

export default MyCarousel;