import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ActionCard = () => {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}></View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>This is the blog card header</Text>
        <Image
        source={{
            uri:'https://www.spicebangla.com/wp-content/uploads/2024/08/Spicy-Pasta-recipe-optimised-scaled.webp'
        }}
        style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
            <Text numberOfLines={3}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ex voluptatibus molestiae animi optio asperiores esse, dicta mollitia iusto reprehenderit aliquam est fugit, pariatur iste eius? Libero odit excepturi nam?</Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity
            onPress={() => {openWebsite('http://tsn.ca')}}
            >
                <Text style={styles.footerBtn}>Read More</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ActionCard

const styles = StyleSheet.create({
    headingText: {},
    card: {},
    elevatedCard: {},
    headerContainer: {},
    headerText: {},
    cardImage: {
        height: 200
    },
    bodyContainer: {
        paddingVertical: 20,
        paddingHorizontal: 5,
        backgroundColor: '#ffffff'
    },
    footerContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 50,
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    footerBtn: {
        
        fontSize: 15,
        color: 'white',
        fontWeight: 'semibold',
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: 'red',
        width: 150,
        borderRadius: 40,
        textAlign: 'center'
    }
})