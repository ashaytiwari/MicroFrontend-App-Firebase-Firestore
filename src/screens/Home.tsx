import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const Home = () => {

  async function addUserToDB() {
    try {
      const userRef = await firestore()
        .collection('users')
        .add({
          name: 'Amit',
          email: 'amit@kritin.in',
          age: 10,
          createdAt: firestore.FieldValue.serverTimestamp(),
        });

      console.log('User added with ID:', userRef.id);
    } catch (error) {
      console.error('Error adding user:', error);
    }
  }

  return (
    <View style={styles.viewContainer}>
      <Text style={styles.heading}>Home Page</Text>
      <Button onPress={addUserToDB} title='Add User' />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  viewContainer: {
    padding: 20
  },
  heading: {
    fontSize: 20
  }
});