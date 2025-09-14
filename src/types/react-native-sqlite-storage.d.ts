declare module 'react-native-sqlite-storage' {
  type ResultSet = any;
  type SQLiteDatabase = any;
  type Transaction = any;

  export function enablePromise(value: boolean): void;
  export function openDatabase(params: {
    name: string;
    location: string;
  }): Promise<SQLiteDatabase>;
}
