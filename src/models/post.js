import mongoose from 'mongoose';

const Post = new mongoose.model('Posts', {
    title: String,
    text: String,
    date: String ,
});

export default Post