const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const { Schema, model } = mongoose;

const messageModelSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  body: { type: String, required: true },
  status: { type: String, enum: ['read', 'unread'], default: 'unread' },
  createdAt: { type: 'Date', default: Date.now },
});

messageModelSchema.plugin(mongoosePaginate);

const Message = model('Message', messageModelSchema);

module.exports = Message;
