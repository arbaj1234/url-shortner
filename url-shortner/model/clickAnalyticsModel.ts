import mongoose from 'mongoose';

const clickAnalyticsSchema = new mongoose.Schema({
  shortId: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  country: { type: String }
});

export default mongoose.model('ClickAnalytics', clickAnalyticsSchema);
