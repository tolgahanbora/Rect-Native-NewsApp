import React from 'react'
import { Image, View, StyleSheet} from 'react-native'

const styles = StyleSheet.create({ 

    Images: {
        margin: 0,
        padding: 0,
        width: 500,
        height: 200
    }
})

function BannerImage(item) {
  return (
  <View>
    <Image source={{uri: item.item.imageUrl}}  style={styles.Images}  />
  </View>
  )
}

export default BannerImage