import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Gravatar } from 'react-native-gravatar'
import styles from './styles'

class Author extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Gravatar options={{ email: this.props.email, secure: true }}
          style={styles.avatar}/>
        <Text style={styles.nickname}>{this.props.nickname}</Text>
      </View>
    )
  }
}

export default Author
