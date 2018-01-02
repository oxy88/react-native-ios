import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

class Login extends React.Component {

  render() {
    return (
      <View>
        <Text>Login</Text>
        <TouchableOpacity onPress={this.props._login} style={styles.button}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: 'gray'
  }
})

export default Login
