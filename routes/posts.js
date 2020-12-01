const { json } = require('body-parser')
const { response } = require('express')
const express = require('express')
const Post = require('../models/Post')
const router = express.Router()


// Get back all the posts 
router.get('/', async (req, res) => {
    try {
        let posts = await Post.find()

        posts = posts.map( (select) => {
            return select.description 
        })

        let title = posts.pop()

        res.render('content', { posts, title })
    }
    catch (err){
        res.json({message:err})
    }
})

//Submits a post 
router.post('/create', async (req,res) => {
    res.render('createpost')
    try{
    const savedPost = await post.save()
    res.json(savedPost)
    }
    catch (err) {
        res.json({message: err})
    }
})

// ids
router.get('/:postId', async (req, res) => {
    try{
    const post = await Post.findById(req.params.postId)
    res.json(post)
    }
    catch (err){
        res.json({message:err})
    }
})

//Delete
router.delete('/:postId', async (req,res) =>{
    try {
        const removePost = await Post.remove({ _id: req.params.postId })
        res.json(removePost)
    }
    catch (err){
        res.json({message:err})
    }
})


// update 
router.patch('/:postId', async (req,res) => {
    try {
        const updatedPost = await Post.updateOne({ _id: req.params.postId }, {$set: {title: req.body.title}})
        res.json(updatedPost)
    }
    catch (err){
        res.json({message:err})
    }
})

module.exports = router