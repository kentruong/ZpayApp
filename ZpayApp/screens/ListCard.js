import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';

import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import ArrayCard from '../datas/arrayCard';

const Item = ({hour, icon, degress}) => {
  return (
    <View style={styles.itemsListCard}>
      {/* <IconAntDesign style={styles.iconTransaction} name={icon} size={30} />
      <IconAntDesign style={styles.iconTransaction} name={icon} size={30} /> */}
      {/* <View
        style={{
          padding: 8,
        }}> */}
        <Text style={styles.infoItems}>{hour}</Text>
        <IconFontAwesome5 style={styles.iconTransaction} name={icon} size={30} />
        <Text style={styles.infoItems}>{degress}°C</Text>
      {/* </View> */}
    </View>
  );
};

class ListCard extends Component {
  _doWork = param => () => {
    console.log(param);
  };
  render() {
    return (
      <View style={styles.containerListCard}>
        <View style={styles.screensBackground}>
          <Image
            style={styles.ImagesScreensBackground}
            source={{
              uri:
                'https://images.unsplash.com/photo-1564223288351-a96bea22b5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=670&q=80',
            }}
          />
        </View>
        <Text style={{color:"#fff",margin:12, fontSize: 21, fontWeight: "bold"}}>Weather forecasts</Text>
        <View style={styles.rowListCard}>
          <FlatList
            style={styles.flatListListCard}
            horizontal={true}
            data={ArrayCard}
            renderItem={({item, index}) => (
              <View style={styles.arrayTransaction}>
                <Item
                  hour={item.hour}
                  degress={item.degress}
                  icon={item.icon}
                />
              </View>
            )}
            keyExtractor={(item, index) => {
              return index.toString();
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screensBackground: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  ImagesScreensBackground: {
    flex: 1,
    flexDirection: 'column',
    width: null,
    height: null,
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  containerListCard: {
    flex: 1,
    flexDirection: 'column',
  },
  rowListCard: {
    height: 150,
  },
  itemsListCard: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: "space-between",
    width: 90,
    // height: 100,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    marginHorizontal: 4,
    marginVertical: 8,
    padding: 8
  },
  ImageCard: {
    width: 350,
    height: '100%',
    backgroundColor: 'gray',
    opacity: 1,
  },
  iconTransaction: {
    color: '#fff',
  },
  infoItems: {
    color: '#fff',
  },
  flatListListCard: {
    backgroundColor: 'gray',
    opacity: 0.8,
  },
});

export default ListCard;
