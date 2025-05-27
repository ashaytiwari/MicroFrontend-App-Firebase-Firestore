import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Home = () => {

  return (
    <View style={styles.viewContainer}>
      <Text style={styles.heading}>Home Page</Text>
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