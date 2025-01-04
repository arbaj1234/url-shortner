import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema({
  originalUrl: { type: String, required: true },
  shortId: { type: String, unique: true, required: true },
  expirationDate: { type: Date },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Url', urlSchema);
