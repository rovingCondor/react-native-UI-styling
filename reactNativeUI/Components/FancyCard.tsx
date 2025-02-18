import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>FancyCard</Text>
      <View style={[styles.card, styles.cardElevated]}>
      <Image
        style={styles.cardImage}
        source={{
          uri: 'https://w7.pngwing.com/pngs/364/1024/png-transparent-lion-the-rise-of-voltron-red-paladin-anime-lion-blue-animals-fictional-character-thumbnail.png',
        }}
      />
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>Mr. Tedesco</Text>
        <Text style={styles.cardLabel}>Toronto, ON</Text>
        <Text style={styles.cardDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tempora suscipit possimus tenetur! Temporibus cupiditate ea, quasi voluptatum omnis iure in eos laboriosam, nihil inventore accusantium, odio doloremque. Laboriosam, sunt?
        </Text>
        <Text style={styles.cardFooter}>
            Lorem ipsum dolor si
        </Text>
      </View>
      </View>
    </View>
  )
}

export default FancyCard

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 330,
        height: 380,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    cardElevated: {
        backgroundColor: '#ffffff'
    },
    cardImage: {
        width: 160,
        height: 160
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12
    },
    cardTitle: {
        color: '#000000',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 12
    },
    cardLabel: {
        color: '#000000',
        fontSize: 12,
        marginBottom: 5
    },
    cardDescription: {
        color: '#000000',
        fontSize: 15,
        marginBottom: 15
    },
    cardFooter: {
        color: '#000000'
    }
})