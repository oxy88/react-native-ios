/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AsyncStorage
} from 'react-native';

import Loading from './Screens/Loading'
import Login from './Screens/Login'
import Router from './Screens/Router'

export default class App extends Component<{}> {
  constructor(props) {
    super(props)
    this.state = {
      isSignedIn: false,
      checkedSignedIn: false
    }
  }

  async _login() {
    await AsyncStorage.setItem('token', 'yestoken')
    this.setState({ isSignedIn: true })
  }

  async _logout() {
    await AsyncStorage.removeItem('token')
    this.setState({ isSignedIn: false })
  }

  async componentWillMount() {
    const token = await AsyncStorage.getItem('token')
    if (token) {
      this.setState({ isSignedIn: true })
    }
    this.setState({ checkedSignedIn: true })
  }

  render() {
    const { isSignedIn, checkedSignedIn } = this.state

    if (!isSignedIn) {
      return <Login _login={this._login.bind(this)} />
    }
    if (isSignedIn) {
      return <Router _logout={this._logout.bind(this)} />
    }
  }
}
