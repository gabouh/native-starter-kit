/* @flow */
'use strict';

import React from 'react';
import {Component, Text, View} from 'react-native';
import ToolbarAndroid from 'ToolbarAndroid';
import {brandPrimary as primary} from '../../Styles/variable';
import AppEventEmitter from '../../Services/AppEventEmitter';

export default class Navbar extends Component {
    open () {

        AppEventEmitter.emit('hamburger.click');

    }
    render() {
        return(
            <ToolbarAndroid   
                actions={[{title: ' ',  icon: require('../../img/menu.png'),show: 'always'}]}
                title={this.props.title}
                titleColor="#fff"
                style={this.props.style}
                onActionSelected={this.open}
                />            
        );
    }
}
