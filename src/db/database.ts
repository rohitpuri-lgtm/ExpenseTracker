import SQLite from 'react-native-sqlite-storage';
import {
  DB_FILE_NAME,
  SQLITE_DB_LOCATION,
  CREATE_TABLE_QUERY,
  SELECT_ALL_EXPENSES_QUERY,
  INSERT_EXPENSE_QUERY,
} from '../constants/constants';

(SQLite as any).DEBUG(true);
SQLite.enablePromise(true);

let db: SQLite.SQLiteDatabase | null = null;

export type Expense = {
  id: number;
  category: string;
  amount: number;
  created_at: string;
};

export const getDBConnection = async (): Promise<SQLite.SQLiteDatabase> => {
  if (db) return db;
  db = await SQLite.openDatabase({
    name: DB_FILE_NAME,
    location: SQLITE_DB_LOCATION,
  });
  return db;
};

export const createTable = async (db: SQLite.SQLiteDatabase): Promise<void> => {
  await db.executeSql(CREATE_TABLE_QUERY);
};

export const addExpense = async (
  category: string,
  amount: number,
): Promise<void> => {
  const db = await getDBConnection();
  const createdAt = new Date().toISOString();
  await db.executeSql(INSERT_EXPENSE_QUERY, [category, amount, createdAt]);
};

export const getAllExpenses = async (): Promise<Expense[]> => {
  const db = await getDBConnection();
  const result = await db.executeSql(SELECT_ALL_EXPENSES_QUERY);

  const expenses: Expense[] = [];
  result.forEach((res: SQLite.ResultSet) => {
    for (let i = 0; i < res.rows.length; i++) {
      expenses.push(res.rows.item(i) as Expense);
    }
  });

  return expenses;
};
