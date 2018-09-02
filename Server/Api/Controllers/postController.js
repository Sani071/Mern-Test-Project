const Post = require("../Models/postModel")
const addPost = (req, res) => {
   const post= new Post({
       user_name: req.body.user_name,
       post: req.body.post
   })

      post.save()
   .then(data => {
       res.json({
           msg:`1 post added`,
           post:data
       })
   })
   .catch(err => console.log(err))

}

const getAllPost = (req,res)=>{
    Post.find()
    .then(
        data=>{
            res.json({
                TotalPost:data.length,
                Allpost:data
            })
        }
    )
    .catch(err=>console.log(err))
}
const getAPost = (req, res) => {
    var id = req.params.id
    Post.findById(id)
        .then(
            data => {
                res.json({
                    data,
                    user_name:data.user_name,
                    post: data.post,
                    like:data.like.length,
                    total_comment:data.cmnt.length,
                    comment:data.cmnt,
                    time:data.time
                })
            }
        )
        .catch(err => console.log(err))
}
const deletePost  = (req,res)=>{
    let id = req.params.id
    Post.findByIdAndRemove(id)
    .then(doc=>{
        res.json({
            msg:`Deleted Successfuly (${doc._id})`
        })
    })
    .catch(err=>console.log(err))
}
const editPost = (req, res) => {
    const id = req.params.id
    Post
        .findByIdAndUpdate(id, {
            $set: req.body
        })
        .then(() => {
            //console.log(Userr)
            const newContact = {
               post: req.body.post
            }
            res
                .status(200)
                .json(newContact)
        })
        .catch(err => {
            res
                .status(500)
                .josn(err)
        })
}
const cmnt = (req,res)=>{
    let id = req.params.id
Post.findByIdAndUpdate(id,{
            $push: req.body
        })
   .then(data => {
       res.json({
            cmnt:data
       })
   })
   .catch(err => console.log(err))
}
const like= (req, res) => {
    let id = req.params.id
    Post.findByIdAndUpdate(id, {
            $push: req.body
        })
        .then(data => {
            res.json({
                like: data.like
            })
        })
        .catch(err => console.log(err))
}

const searchPost = (req, res) => {
 
   Post
        .find({
            user_name: req.params.query 
        })
        .then(doc => {
            res.json({  
              user_name:doc[0].user_name,
              post:doc[0].post
              
            })
        })
        .catch((err) => {
            
               res.status(500).json({
                   err
               })
        })
}
module.exports={
    addPost,
    getAllPost,
    getAPost,
    deletePost,
    editPost,
    cmnt,
    like,
    searchPost
}