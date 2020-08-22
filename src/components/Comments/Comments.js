import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

class Comments extends Component {
  render () {
    let view = null
    if (this.props.comments) {
      view = this.props.comments.map((item, i) => {
        return (
          <View style={styles.commentContainer} key={i}>
            <Text style={styles.nickname}>{item.nickname}</Text>
            <Text style={styles.comment}>{item.comment}</Text>
          </View>
        )
      })
    }

    return (
      <View style={styles.container}>
        {view}
      </View>
    )
  }
}

export default Comments
