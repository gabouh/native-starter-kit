'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';

import {openDrawer} from '../../actions/drawer';
import {Container, Header, Title, Content, Text, Button, Icon } from 'native-base';
import styles from './styles';

class Home extends Component {

    render() {
        return (
            <Container style={{backgroundColor: '#565051'}}>
                <Header style={{backgroundColor: '#322A2A'}} foregroundColor="#fff" >
                    <Button transparent onPress={() => Actions.login()}>
                        <Icon name="ios-arrow-back" />
                    </Button>
                    
                    <Title>Home</Title>
                    
                    <Button transparent onPress={this.props.openDrawer}>
                        <Icon name="ios-menu" />
                    </Button>
                </Header>
                
                <Content padder>
                    <Text style={styles.text}>Welcome!</Text>
                    <Text style={styles.text}>Native Starter Free Version!</Text>
                    
                    <Button style={styles.text} onPress={() => Actions.login()}>
                        Logout
                    </Button>
                </Content>
            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: ()=>dispatch(openDrawer())
    }
}

export default connect(null, bindAction)(Home);
