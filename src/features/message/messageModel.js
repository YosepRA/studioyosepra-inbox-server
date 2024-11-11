const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const messageModelSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  body: { type: String, required: true },
  status: { type: String, enum: ['read', 'unread'] },
  createdAt: { type: 'Date', default: Date.now },
});

const Message = model('Message', messageModelSchema);

module.exports = Message;
