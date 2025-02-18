import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ContactList = () => {
    const contacts = [
        {
            uid: 1,
            name: 'James Alafriz',
            status: 'Offline and also online',
            imageURL: 'https://randomuser.me/api/portraits/women/65.jpg',
        },
        {
            uid: 2,
            name: 'Mr. Tedesco',
            status: 'You what it is, bitch.',
            imageURL: 'https://randomuser.me/api/portraits/women/30.jpg',
        },
        {
            uid: 3,
            name: 'Roulette Amulet',
            status: 'Ancient aliens are da bomb',
            imageURL: 'https://randomuser.me/api/portraits/women/16.jpg',
        },
        {
            uid: 4,
            name: 'Nathaniel Essex',
            status: 'You will find me in Westchester',
            imageURL: 'https://randomuser.me/api/portraits/women/29.jpg',
        },
    ]
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView 
      style={styles.container}
      scrollEnabled={false}
      >
            {contacts.map(({uid, name, status, imageURL}) => (
                <View key={uid} style={styles.userCard}>
                <Image
                source={{
                    uri: imageURL
                }} 
                style={styles.userImage }
                />
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>
                </View>
            ))}
            
      </ScrollView>
    </View>
  )
}

export default ContactList

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#999999'
    },
    headingText: {

    },
    container: {},
    userCard: {},
    userImage: {
        height: 60,
        width: 60,
        borderRadius: 60 / 2
    },
    userName: {},
    userStatus: {}
})