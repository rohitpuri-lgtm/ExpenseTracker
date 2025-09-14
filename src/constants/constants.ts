import RNFS from 'react-native-fs';

export const DB_FILE_NAME = 'expense.db';
export const BACKUP_FILE_NAME = 'expense_backup.db';

export const DB_PATH = `${RNFS.DocumentDirectoryPath}/${DB_FILE_NAME}`;
export const BACKUP_PATH = `${RNFS.DocumentDirectoryPath}/${BACKUP_FILE_NAME}`;

export const SQLITE_DB_LOCATION = 'default';

export const TABLE_NAME = 'expenses';

export const CREATE_TABLE_QUERY = `
  CREATE TABLE IF NOT EXISTS expenses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    category TEXT NOT NULL,
    amount REAL NOT NULL,
    created_at TEXT NOT NULL
  );
`;

export const SELECT_ALL_EXPENSES_QUERY = `
  SELECT * FROM ${TABLE_NAME} ORDER BY created_at DESC
`;

export const INSERT_EXPENSE_QUERY = `
  INSERT INTO ${TABLE_NAME} (category, amount, created_at) VALUES (?, ?, ?)
`;

export const BUTTON_BACKUP_TITLE = 'Backup Database';
export const BUTTON_RESTORE_TITLE = 'Restore Database';

export const STATUS_BACKUP_SUCCESS = 'Backup Successful ';
export const STATUS_BACKUP_FAILED = 'Backup Failed ';
export const STATUS_RESTORE_SUCCESS = 'Restore Successful ';
export const STATUS_RESTORE_FAILED = 'Restore Failed ';

export const ALERT_BACKUP_TITLE = 'Backup';
export const ALERT_RESTORE_TITLE = 'Restore';
export const ALERT_BACKUP_SUCCESS_MESSAGE = 'Backup completed.';
export const ALERT_BACKUP_FAILED_MESSAGE = 'Backup failed.';
export const ALERT_RESTORE_SUCCESS_MESSAGE = 'Restore completed.';
export const ALERT_RESTORE_FAILED_MESSAGE = 'Restore failed.';

export const BUTTON_ADD_EXPENSE_TITLE = 'Add New Expense';
export const BUTTON_BACKUP_RESTORE_TITLE = 'Backup & Restore Database';
export const NO_EXPENSES_TEXT = 'No expenses found';

export const CHART_COLORS = ['#FF6384', '#36A2EB', '#FFCE56', '#8BC34A'];
export const CHART_LEGEND_FONT_COLOR = '#333';
export const CHART_LEGEND_FONT_SIZE = 14;
