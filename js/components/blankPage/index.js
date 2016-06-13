'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';

import {openDrawer} from '../../actions/drawer';
import {Container, Header, Title, Button, Icon } from 'native-base';

class BlankPage extends Component {

    render() {
        return (
            <Container style={{backgroundColor: '#565051'}}>
                <Header style={{backgroundColor: '#322A2A'}} foregroundColor="#fff">
                    <Button transparent onPress={() => Actions.pop()}>
                        <Icon name="ios-arrow-back" />
                    </Button>
                    
                    <Title>Blank Page</Title>
                    
                    <Button transparent onPress={this.props.openDrawer}>
                        <Icon name="ios-menu" />
                    </Button>
                </Header>
            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: ()=>dispatch(openDrawer())
    }
}

export default connect(null, bindAction)(BlankPage);
