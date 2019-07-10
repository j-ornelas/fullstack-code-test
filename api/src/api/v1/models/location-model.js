import mongoose from 'mongoose';
import { db } from '../../../config';

const { mongoose: { outputOptions } } = db;

const locationSchema = mongoose.Schema({
  dateCreated: Number,
  position: {
    longitude: String,
    latitude: String,
  },
}, { ...outputOptions, capped: { size: 10240, max: 100 } });

export default mongoose.model('Location', locationSchema);
