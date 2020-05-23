import Carousel from 'react-native-snap-carousel';
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground,
    StyleSheet
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ArrayBonus = [
    { title: "Grab", bonus: "Đặt ngay hôm nay nhận ngay ưu đải giảm 20%", color: "#009938", link: "https://st.quantrimang.com/photos/image/2017/05/06/GrabBike-goi-xe-om-logo200.jpg" },
    { title: "GoViet", bonus: "Giảm 30% cho lần thanh toán đầu tiên", color: "#f8160d", link: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDbkusOtgDzU5pjHJSgNdb3U2Op6Zg0Lc5zGN9fo1kfRz7ZD5h&usqp=CAU" },
    { title: "Momo", bonus: "Nạp thẻ mobile được ưu đãi giảm 25%", color: "#ae2070", link: "https://static.mservice.io/img/logo-momo.png" },
    { title: "CGV", bonus: "Mua 3 vé tặng 1 vé", color: "#e72410", link: "https://lh3.googleusercontent.com/dVQ6d8I7XDOkr72-jcAUHsCfQ_ih9p9HUaca82obM6LlmJOKAA8BuY776Xns40Nifg" },
    { title: "Phuc Long", bonus: "Giảm 30% cho lý thứ 2", color: "#fff", link: "https://phuclong.com.vn/images/logo_2.png" },
    { title: "Aoen", bonus: "Siêu khuyến mãi cho tất cả các mặt hàng điện tử", color: "#b22080", link: "https://cdn.itviec.com/employers/aeon/logo/w170/SAuHZQj1gARUWiM9UsMAw634/aeon-logo.png" },
    { title: "Now", bonus: "Thứ hai giảm 20% ch ocasc món ăn", color: "#f03232", link: "data:image/png;base64,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" },
];

function Item(props) {
    const image = { uri: props.link };
    return (
        <View style={[styles.item]}>
            <View style={styles.containerImage}>
                <Image source={{ uri: props.link }} style={{ width: 50, height: 50 }} />
            </View>
            <Text style={styles.bonus}>{props.bonus}</Text>
        </View>
    );
}


class BonusRecent extends Component {
    render() {
        return (
            <View>
                <Text style={styles.title}>Ưu đãi gần đây</Text>
                <FlatList
                    data={ArrayBonus}
                    renderItem={({ item }) =>
                        <Item title={item.title} backgroundColor={item.color} link={item.link} bonus={item.bonus} />}
                    keyExtractor={item => item.title}
                >
                </FlatList>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "bold",
        paddingLeft: 24,
        marginBottom: 12,
        paddingTop: 16,
    },
    item: {
        // width: "100%",
        height: 66,
        borderRadius: 5,
        backgroundColor: "#fff",
        marginVertical: 4,
        marginHorizontal: 24,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        alignItems: "center",
        paddingHorizontal: 8,
        flexDirection: "row",
    },
    bonus: {
        fontSize: 14,
        fontWeight: "bold",
        paddingLeft: 16,
    },
    containerImage: {
        borderRadius: 10,
        overflow: "hidden",
        width: 50,
        height: 50,
    }

})

export default BonusRecent; 