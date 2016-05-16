/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

'use strict';

import React from 'react';
import { AppRegistry, Component, StatusBar } from 'react-native';

import RootRouter from './App/Components/RootRouter';
StatusBar.setBarStyle('light-content');

class NativeStarter extends Component {
    render() {
        return (
            <RootRouter />
        );
    }
}

AppRegistry.registerComponent('NativeStarter', () => NativeStarter);

