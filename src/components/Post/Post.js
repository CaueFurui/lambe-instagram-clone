import React, { Component } from 'react'
import { View, Image } from 'react-native'
import styles from './styles'
import Author from '../Author'
import Comments from '../Comments'
import AddComment from '../AddComment'

class Post extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Image source={this.props.image} style={styles.image}/>
        <Author
          email={this.props.email}
          nickname={this.props.nickname}
        />
        <Comments comments={this.props.comments} />
        <AddComment />
      </View>
    )
  }
}

export default Post
