import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useExpenses } from '../hooks/useExpenses';

export default function AddExpenseScreen({ navigation }: any) {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const { addNewExpense } = useExpenses();

  const submitExpense = () => {
    if (category && amount) {
      addNewExpense(category, parseFloat(amount));
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Category"
        style={styles.input}
        value={category}
        onChangeText={setCategory}
      />
      <TextInput
        placeholder="Amount"
        style={styles.input}
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />
      <Button title="Add Expense" onPress={submitExpense} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16 },
  input: { borderWidth: 1, borderColor: '#ccc', marginBottom: 12, padding: 10 },
});
