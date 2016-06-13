
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';

import {closeDrawer} from '../../actions/drawer';
import {Text, List, ListItem, Content} from 'native-base';
import styles from "./style";

class SideBar extends Component {
    render(){
        return (
            <Content style={styles.sidebar} >
                <List  foregroundColor={"white"} >
                    <ListItem onPress={() => {this.props.closeDrawer(); Actions.home()}} >
                        <Text >Home</Text>
                    </ListItem>
                    <ListItem onPress={() => {this.props.closeDrawer(); Actions.blankPage()}} >
                        <Text>Blank Page</Text>
                    </ListItem>
                </List>
            </Content>
        );
    }
}

function bindAction(dispatch) {
    return {
        closeDrawer: ()=>dispatch(closeDrawer())
    }
}

export default connect(null, bindAction)(SideBar);
