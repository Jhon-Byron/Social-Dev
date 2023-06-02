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