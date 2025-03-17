import { Schema, model } from 'mongoose';

const journalSchema = new Schema({
  title: String,
  body: String,
  createdAt: { type: Date, default: Date.now },
});

const Journal = model('Journal', journalSchema);    

export default Journal;