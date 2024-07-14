   const Database = require('better-sqlite3');

   const db = new Database('mydatabase.db');

   // Функция для создания таблицы в базе данных
   const createTable = () => {
     db.exec(`
       CREATE TABLE IF NOT EXISTS users (
         id INTEGER PRIMARY KEY,
         username TEXT,
         coins INTEGER,
         referrals INTEGER
       )
     `);
   };

   // Функция для добавления пользователя в базу данных
   const addUser = (username, coins, referrals) => {
     const stmt = db.prepare('INSERT INTO users (username, coins, referrals) VALUES (?, ?, ?)');
     stmt.run(username, coins, referrals);
   };

   // Функция для получения данных пользователя из базы данных
   const getUser = (id) => {
     const stmt = db.prepare('SELECT * FROM users WHERE id = ?');
     return stmt.get(id);
   };

   module.exports = {
     createTable,
     addUser,
     getUser,
   };