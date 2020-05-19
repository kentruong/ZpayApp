import React, { Component } from 'react';

import {
    Image,
} from 'react-native';

class Robot extends Component {
    render() {
        const imageSource = {uri:"https://www.softbankrobotics.com/emea/themes/custom/softbank/images/full-nao.png"}
        return (
            <Image source={imageSource} style={{height: 200, width: 100}}
            ></Image>
        )
    }
}
export default Robot;
