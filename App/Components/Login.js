/* @flow */
'use strict';

import React from 'react';
import {Component, TextInput, View, Image} from 'react-native';
import styles from '../Styles/style';
import login from '../Styles/login';
import ButtonRounded from './Widgets/ButtonRounded';
import {Actions} from 'react-native-router-flux';

export default class Login extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

    }

    render() {
        return(
            <View style={login.color}>
                <Image source={require('../img/shadow.png')} style={login.shadow}>
                    <View style={login.bg}>  
                        <View  style={{position:'relative',borderColor: 'white', borderWidth: 0.8, borderTopWidth: 0, borderRightWidth: 0, borderLeftWidth: 0, margin: 15, marginTop: 5,}}>   
                            <TextInput
                                style={login.textInput}
                                placeholder={'EMAIL'}
                                placeholderTextColor={'rgba(255, 255, 255, 0.7'} 
                                onChangeText={(value) => this.setState({value})}
                                value={this.state.value} />
                        </View>  
                        <View  style={{position:'relative',borderColor: 'white', borderWidth: 0.8, borderTopWidth: 0, borderRightWidth: 0, borderLeftWidth: 0, margin: 15, marginTop: 5,}}>  
                            <TextInput
                                style={login.textInput}
                                placeholder={'PASSWORD'}
                                secureTextEntry={true}
                                placeholderTextColor={'rgba(255, 255, 255, 0.7'} />
                        </View>
                        <ButtonRounded
                            onPress={()=>Actions.home({data:this.state.value })}
                            text="Login" />
                    </View>
                </Image>
            </View>
        );
    }
}
