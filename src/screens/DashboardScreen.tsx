import React, { useEffect } from 'react';
import {
  View,
  FlatList,
  Button,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { useExpenses } from '../hooks/useExpenses';
import ExpenseItem from '../components/ExpenseItem';
import { PieChart } from 'react-native-chart-kit';
import { useIsFocused } from '@react-navigation/native';
import {
  BUTTON_ADD_EXPENSE_TITLE,
  BUTTON_BACKUP_RESTORE_TITLE,
  NO_EXPENSES_TEXT,
  CHART_COLORS,
  CHART_LEGEND_FONT_COLOR,
  CHART_LEGEND_FONT_SIZE,
} from '../constants/constants';

export default function DashboardScreen({ navigation }: any) {
  const { expenses, fetchExpenses } = useExpenses();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      fetchExpenses();
    }
  }, [isFocused]);

  const categoryTotals = expenses.reduce((acc: any, exp) => {
    acc[exp.category] = (acc[exp.category] || 0) + exp.amount;
    return acc;
  }, {});

  const chartData = Object.keys(categoryTotals).map((category, index) => ({
    name: category,
    population: categoryTotals[category],
    color: CHART_COLORS[index % CHART_COLORS.length],
    legendFontColor: CHART_LEGEND_FONT_COLOR,
    legendFontSize: CHART_LEGEND_FONT_SIZE,
  }));

  return (
    <View style={styles.container}>
      <Button
        title={BUTTON_ADD_EXPENSE_TITLE}
        onPress={() => navigation.navigate('AddExpense')}
      />

      {expenses.length === 0 ? (
        <Text style={{ textAlign: 'center', marginTop: 20 }}>
          {NO_EXPENSES_TEXT}
        </Text>
      ) : (
        <>
          <PieChart
            data={chartData}
            width={Dimensions.get('window').width - 30}
            height={220}
            chartConfig={{
              backgroundColor: '#fff',
              backgroundGradientFrom: '#fff',
              backgroundGradientTo: '#fff',
              color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`,
            }}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute
          />

          <Button
            title={BUTTON_BACKUP_RESTORE_TITLE}
            onPress={() => navigation.navigate('BackupRestore')}
          />

          <FlatList
            data={expenses}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => <ExpenseItem item={item} />}
            contentContainerStyle={{ marginTop: 12 }}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
});
