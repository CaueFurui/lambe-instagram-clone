import React, { Component } from 'react'
import { View } from 'react-native'
import Header from './src/components/Header'
import Post from './src/components/Post'
import image from './assets/imgs/fence.jpg'

class App extends Component {
  render () {
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <Post image={image}/>
      </View>
    )
  }
}
export default App
