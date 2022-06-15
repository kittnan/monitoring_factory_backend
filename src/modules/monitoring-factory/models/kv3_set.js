import mongoose from 'mongoose';
const { Schema } = mongoose;

let obj = new Schema({
    key: String,
    max: Number,
    typ: Number,
    min: Number,
    date: Date
}, {
    collection: 'kv3_set',
    versionKey: false
});

export default mongoose.model('kv3_set', obj);