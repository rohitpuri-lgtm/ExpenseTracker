import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from './style';

export default function ExpenseItem({ item }: { item: any }) {
  return (
    <View style={styles.container}>
      <Text style={styles.category}>{item.category}</Text>
      <Text style={styles.amount}>${item.amount.toFixed(2)}</Text>
    </View>
  );
}
