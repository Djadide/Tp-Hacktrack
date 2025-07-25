import mongoose from 'mongoose';

const sessionSchema = new mongoose.Schema({
    courseName: String,
    date: Date,
    attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

const Session = mongoose.model('Session', sessionSchema);

export default Session;
