import Post from './post.model'

export const createPost = async (body, user) => {
  return await Post.create({
    text: body.text,
    createDate: new Date(),
    createBy: user.id
  })
}

export const getPosts = async (limit = 10) => {
  return await Post.find()
   .populate('createBy', 'user')
   .sort({ createDate: -1 })
   .limit(limit)
}

export const deletePost = async (id, user) => {
  return await Post.findOneAndDelete({
    _id: id,
    createBy: user.id
  })
}

export const editPost = async (body, user) => {
  return Post.findOneAndUpdate({
    _id: body.id,
    createBy: user.id
  }, {
    text: body.text
  }, {
    new: true
  })
}