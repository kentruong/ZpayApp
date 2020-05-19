import React, { Component } from 'react';
import {
    Text,
    View,
} from 'react-native';
class Greetings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Nhận vào 1 Object
            showText: true,
        };
        // Hàm tự động thực hiện 1 nhiệm vụ sau 1 thời gian do mình set (hàm do react native hổ trợ)
        const timeByMe = 1000;
        var taskTodo = () => {
            this.setState(previousState => {
                return {
                    showText: !previousState.showText,
                }
            });
        };
        setInterval(taskTodo, timeByMe);
    }
    render() {
        let textToDisplay = this.state.showText ? this.props.inputText : '';
        let textHello = `Hello ${this.props.name}. How are you ?`
        return (
            <View style={{ textAlign: "center" }}>
                <Text>{textHello}</Text>
                <Text>{textToDisplay}</Text>
            </View>
        )
    }
}

class MultipleGreetings extends Component {
    render() {
        return (
            <View style={{ textAlign: "center" }}>
                <Greetings name="Khoa"></Greetings>
                <Greetings name="Nam"></Greetings>
                <Greetings name="Hoài"></Greetings>
                <Greetings inputText="Hello bla bla bla"></Greetings>
            </View>
        )
    }
}
export default MultipleGreetings; 