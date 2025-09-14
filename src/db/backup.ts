import RNFS from 'react-native-fs';
import { DB_PATH, BACKUP_PATH } from '../constants/constants';

export const backupDatabase = async () => {
  try {
    await RNFS.copyFile(DB_PATH, BACKUP_PATH);
    console.log('Backup successful:', BACKUP_PATH);
    return true;
  } catch (error) {
    console.error('Backup failed:', error);
    return false;
  }
};

export const restoreDatabase = async () => {
  try {
    const backupExists = await RNFS.exists(BACKUP_PATH);
    if (!backupExists) {
      console.warn('Backup file does not exist');
      return false;
    }

    await RNFS.copyFile(BACKUP_PATH, DB_PATH);
    console.log('Restore successful');
    return true;
  } catch (error) {
    console.error('Restore failed:', error);
    return false;
  }
};
