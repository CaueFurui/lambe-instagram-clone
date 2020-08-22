import React, { Component } from 'react'
import { FlatList, View } from 'react-native'
import Header from '../../components/Header'
import Post from '../../components/Post'
import styles from './styles'

class Feed extends Component {
  state = {
    posts: [
      {
        id: Math.random(),
        nickname: 'User 1',
        email: 'email1@email.com.br',
        image: require('../../../assets/imgs/fence.jpg'),
        comments: [
          {
          nickname: 'User 2',
          comment: 'Awesome'
          },
          {
            nickname: 'User 3',
            comment: 'Stunning!'
          },
          {
            nickname: 'User 4',
            comment: 'Perfect!'
          },
        ]
      },
      {
        id: Math.random(),
        nickname: 'User 5',
        email: 'email1@email.com.br',
        image: require('../../../assets/imgs/bw.jpg'),
        comments: []
      }
    ]
  }

  render () {
    return (
      <View style={styles.container}>
        <Header />
        <FlatList
          data={this.state.posts}
          keyExtractor={item => `${item.id}`}
          renderItem={({ item }) =>
            <Post key={item.id} {...item} /> }
        />

      </View>
    )
  }
}

export default Feed
