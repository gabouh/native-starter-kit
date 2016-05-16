/* @flow */
'use strict';

import React from 'react';
import {Component, View} from 'react-native';
import Navbar from './Widgets/Navbar';
import account from '../Styles/account';
import {brandPrimary as primary} from '../Styles/variable';

export default class Account extends Component {
	render() {
		return(
			<View style={account.color}>
				<Navbar
	     		    title="Accounts"
	     		    style={account.toolbar}/>				
			</View>

		);
	}

}
