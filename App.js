import React, { Component } from 'react'
import { View } from 'react-native'
import Header from './src/components/Header'
import Post from './src/components/Post'
import image from './assets/imgs/fence.jpg'

class App extends Component {
  render () {
    const comments = [
      {
        nickname: 'User',
        comment: 'Lorem Ipsum'
      },
      {
        nickname: 'User',
        comment: 'Lorem Ipsum'
      },
      {
        nickname: 'User',
        comment: 'Lorem Ipsum'
      }
    ]

    return (
      <View style={{ flex: 1 }}>
        <Header />
        <Post image={image} comments={comments}/>
      </View>
    )
  }
}
export default App
