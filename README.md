# 💰 Expense Tracker App

A React Native app to track your expenses using a local database (SQLite or Realm), visualize them with charts, and backup/restore data.

# 🎯 Objective

Build an expense tracking application that:

Allows adding new expense entries with category and amount

Stores data locally using SQLite or Realm

Displays a pie chart of expenses by category

Provides backup and restore functionality via the file system

✅ Features

✅ Add new expenses with category, amount, and timestamp

✅ Store data in a local database (SQLite or Realm)

✅ Visualize expenses by category using a pie chart

✅ Backup database to the file system

✅ Restore database from a backup file

✅ Structured data handling and performance optimizations

# ⚡ Concepts Covered

Local database integration (SQLite or Realm)

Charts visualization (react-native-chart-kit or similar)

File-based backup and restore (react-native-fs)

Efficient data management and retrieval

State management and performance optimization

# 🚀 Setup & Installation
1️⃣ Prerequisites

Node.js (Recommended ≥16.x)

React Native CLI (without Expo)

Android Studio or Xcode

2️⃣ Clone the Repository
git clone https://github.com/yourusername/expense-tracker-app.git
cd expense-tracker-app

3️⃣ Install Dependencies

npm install


Or with yarn:

yarn install

4️⃣ Link Native Modules (if using SQLite/Realm/Fs)

npx react-native link react-native-sqlite-storage
npx react-native link react-native-fs


Follow manual installation instructions if required by the library.

5️⃣ Run on Android
npx react-native run-android


Or run on iOS:

npx react-native run-ios
