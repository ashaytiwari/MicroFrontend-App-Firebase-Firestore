import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Products = () => {

  return (
    <View style={styles.viewContainer}>
      <Text style={styles.heading}>Products Page</Text>
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  viewContainer: {
    padding: 20
  },
  heading: {
    fontSize: 20
  }
});