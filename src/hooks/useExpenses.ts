import { useEffect, useState } from 'react';
import {
  addExpense,
  createTable,
  getAllExpenses,
  getDBConnection,
} from '../db/database';

export function useExpenses() {
  const [expenses, setExpenses] = useState<any[]>([]);

  const fetchExpenses = async () => {
    const db = await getDBConnection();
    await createTable(db);
    const data = await getAllExpenses();
    setExpenses(data);
  };

  const addNewExpense = async (category: string, amount: number) => {
    await addExpense(category, amount);
    fetchExpenses();
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return { expenses, addNewExpense, fetchExpenses };
}
