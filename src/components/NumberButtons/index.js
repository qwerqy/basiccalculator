//React Modules
import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableNativeFeedback,
    TouchableHighlight
} from 'react-native';

//Styles
import styles from './styles';

export default class NumberButtons extends Component {

    //This is for optimization
    //Component should render only once
    shouldComponentUpdate(nextProps, nextState){
        return false;
    }

    //This will call the bound function from its parent component
    //to handle button press action/event
    _handleOnPress = (value) => {
        requestAnimationFrame(() => {
            this.props.onBtnPress(value);
        });
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    this.props.buttons.map((row, index) => (
                        <View key={index} style={styles.contRow}>
                            {
                                row.map((col,index) => (
                                    <TouchableHighlight
                                        style={{flex: 1}}
                                        key={index}
                                        onPress={() => this._handleOnPress(col)}
                                        underlayColor="#34495e">
                                        <View style={index >= 3 ? styles.contButtonHighlight : styles.contButton}>
                                            <Text style={styles.txtDefault}>{col}</Text>
                                        </View>
                                    </TouchableHighlight>
                                ))
                            }
                        </View>
                    ))
                }
            </View>
        );
    }
}
