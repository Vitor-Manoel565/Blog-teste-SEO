import Post from '../models/post.js';

export const CreatePost = async (req, res) => {
    const { title, text, date } = req.body;   
    console.log(req.body); 
    const newPost = {
        title,
        text,
        date
    }
    console.log(newPost);
    try {
        const post = await Post.create(newPost);
        res.status(201).json(post);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const GetPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}