import React, { Component } from 'react'
import { View, Image } from 'react-native'
import styles from './styles'
import Author from '../Author'
import Comments from '../Comments'

class Post extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Image source={this.props.image} style={styles.image}/>
        <Author email='email@email.com' nickname='nickname' />
        <Comments comments={this.props.comments} />
      </View>
    )
  }
}

export default Post
