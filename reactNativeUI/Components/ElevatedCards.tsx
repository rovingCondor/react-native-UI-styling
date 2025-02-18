import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>to`</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>even</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>more...</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default ElevatedCards


const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight:  'bold',
        paddingHorizontal: 8,
        color: '#ffffff'
    },
    container: {
      padding: 8
    },
    card: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: 100,
      height: 100,
      borderRadius: 4,
      marginHorizontal: 8
    },
    cardElevated: {
      backgroundColor: '#CAD5E2',
      elevation: 3,
      shadowOffset: {
        width: 1,
        height: 1
      },
      shadowColor: '#00000'
    }
})