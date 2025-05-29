import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { syncData } from '../services/syncData';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../styles/colors';

const Home = () => {

  const navigation = useNavigation<any>();

  useEffect(() => {
    syncData();
  }, []);

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

  function launchAlert() {
    Alert.alert('Welcome Alert', 'Welcome to React Native Firebase! To get started, you must first setup a Firebase project and install the "app" module.', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏠 Welcome to the Home Screen</Text>
      <Text style={styles.subtitle}>This is a dummy screen for testing UI and navigation.</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation?.navigate('Products')}>
        <Text style={styles.buttonText}>Go to Details</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={launchAlert}>
        <Text style={styles.buttonText}>Launch Alert</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f9ff',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    marginBottom: 20
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
  },
});