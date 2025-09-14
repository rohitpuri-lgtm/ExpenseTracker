import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, Alert } from 'react-native';
import { backupDatabase, restoreDatabase } from '../db/backup';
import {
  BUTTON_BACKUP_TITLE,
  BUTTON_RESTORE_TITLE,
  STATUS_BACKUP_SUCCESS,
  STATUS_BACKUP_FAILED,
  STATUS_RESTORE_SUCCESS,
  STATUS_RESTORE_FAILED,
  ALERT_BACKUP_TITLE,
  ALERT_RESTORE_TITLE,
  ALERT_BACKUP_SUCCESS_MESSAGE,
  ALERT_BACKUP_FAILED_MESSAGE,
  ALERT_RESTORE_SUCCESS_MESSAGE,
  ALERT_RESTORE_FAILED_MESSAGE,
} from '../constants/constants';

export default function BackupRestoreScreen() {
  const [status, setStatus] = useState('');

  const handleBackup = async () => {
    const success = await backupDatabase();
    setStatus(success ? STATUS_BACKUP_SUCCESS : STATUS_BACKUP_FAILED);
    Alert.alert(
      ALERT_BACKUP_TITLE,
      success ? ALERT_BACKUP_SUCCESS_MESSAGE : ALERT_BACKUP_FAILED_MESSAGE,
    );
  };

  const handleRestore = async () => {
    const success = await restoreDatabase();
    setStatus(success ? STATUS_RESTORE_SUCCESS : STATUS_RESTORE_FAILED);
    Alert.alert(
      ALERT_RESTORE_TITLE,
      success ? ALERT_RESTORE_SUCCESS_MESSAGE : ALERT_RESTORE_FAILED_MESSAGE,
    );
  };

  return (
    <View style={styles.container}>
      <Button title={BUTTON_BACKUP_TITLE} onPress={handleBackup} />
      <View style={{ marginVertical: 12 }} />
      <Button title={BUTTON_RESTORE_TITLE} onPress={handleRestore} />
      <Text style={styles.status}>{status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  status: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
