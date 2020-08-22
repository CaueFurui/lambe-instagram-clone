import { StyleSheet, Platform } from 'react-native'

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#bbb'
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    height: 30,
    width: 30,
    resizeMode: 'contain'
  },
  title: {
    color: '#000',
    fontFamily: 'Raleway',
    height: 30,
    fontSize: 24
  }
})

export default styles
