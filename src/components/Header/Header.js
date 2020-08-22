import React, { Component } from 'react'
import {
  Text,
  View,
  Image
} from 'react-native'
import styles from './styles'
import icon from '../../../assets/imgs/icon.png'

class Header extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <Image source={icon} style={styles.image}/>
          <Text style={styles.title}> Lambe Lambe </Text>
        </View>

      </View>
    )
  }
}

export default Header
