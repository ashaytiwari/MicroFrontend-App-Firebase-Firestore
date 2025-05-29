import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Posts = () => {

  return (
    <View style={styles.viewContainer}>
      <Text style={styles.heading}>Posts Page</Text>
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({
  viewContainer: {
    padding: 20
  },
  heading: {
    fontSize: 20
  }
});