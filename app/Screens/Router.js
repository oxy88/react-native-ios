import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

class Router extends React.Component {
  render() {
    return (
      <View>
        <Text>Router</Text>
        <TouchableOpacity onPress={this.props._logout} style={styles.button}>
          <Text>Logout</Text>
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

export default Router
