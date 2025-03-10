import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: String, required: true },
  location: { type: String, required: true },
  category: { type: String, required: true },
});

export default mongoose.model('Event', eventSchema);