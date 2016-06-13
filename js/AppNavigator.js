/**
 * Created by kylefang on 4/28/16.
 * @flow
 */

'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash/core';
import {Scene, Router, TabBar, Schema, Actions, Reducer} from 'react-native-router-flux';
import {Drawer} from 'native-base';
import {BackAndroid} from 'react-native';
import {closeDrawer} from './actions/drawer';

import Login from './components/login/';
import Home from './components/home/';
import SideBar from './components/sideBar';
import BlankPage from './components/blankPage/';

const searchResultRegexp = /^search\/(.*)$/;

const reducerCreate = params=>{
    const defaultReducer = Reducer(params);
    return (state, action)=>{
        console.log("ACTION:", action);
        var currentState = state;

        if(currentState){
          while (currentState.children){
            currentState = currentState.children[currentState.index]
          }
        }
        
        return defaultReducer(state, action);
    }
};

const drawerStyle  = { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3};
class AppNavigator extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.store.subscribe(() => {
            console.log("store changed", this.props.store.getState());
            if(this.props.store.getState().drawer.drawerState == 'opened')
                this.openDrawer();

            if(this.props.store.getState().drawer.drawerState == 'closed')
                this._drawer.close()
        });

        BackAndroid.addEventListener('hardwareBackPress', function() {
            Actions.pop();
            return true;
        });
    }

    openDrawer() {
        this._drawer.open();
    }

    closeDrawer() {
        if(this.props.store.getState().drawer.drawerState == 'opened') {
            this._drawer.close();
            this.props.closeDrawer();
        }
    }

    render() {
        return (
            <Drawer
                ref={(ref) => this._drawer = ref}
                type="overlay"
                content={<SideBar />}
                tapToClose={true}
                acceptPan={false}
                onClose={() => this.closeDrawer()}
                openDrawerOffset={0.2}
                panCloseMask={0.2}
                negotiatePan={true}>
                <Router createReducer={reducerCreate} >
                    <Scene key="root" hideNavBar={true} >
                        <Scene key="login" type="reset" component={Login} title="Login" />
                        <Scene key="home" type="replace" component={Home} title="Home" />
                        <Scene key="blankPage" component={BlankPage} title="BlankPage" />
                    </Scene>
                </Router>
            </Drawer>
        );


    }
}

function bindAction(dispatch) {
    return {
        closeDrawer: () => dispatch(closeDrawer())
    }
}

const mapStateToProps = (state) => {
    console.log(state);
  return {
    drawerState: state.drawer.drawerState
  }
}

export default connect(mapStateToProps, bindAction) (AppNavigator);
