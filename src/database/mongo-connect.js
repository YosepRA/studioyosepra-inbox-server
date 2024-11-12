const mongoose = require('mongoose');

function mongoConnect(mongoUrl) {
  mongoose.connect(mongoUrl).catch((error) => {
    console.log('Database initial connection error.', error.message);
  });

  const dbConnection = mongoose.connection;

  dbConnection.on('open', () => {
    console.log('Database is open.');
  });
  dbConnection.on('error', (error) => {
    console.log('Database connection error.', error.message);
  });
  dbConnection.on('connected', () => {
    console.log('Database is successfully connected.');
  });
  dbConnection.on('disconnected', () => {
    console.log('Database is disconnected.');
  });
  dbConnection.on('close', () => {
    console.log('Database connection is closed.');
  });

  return dbConnection;
}

module.exports = mongoConnect;
