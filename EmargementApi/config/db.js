import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/emargement', { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB', err));