import mongoose from "mongoose"

import User from '../user/user.model'

const PostShema = new mongoose.Schema({
  text: { type: String, required: true, maxlength: 256 },
  createDate: { type: Date, required: true },
  createBy: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' }
})

export default mongoose.models.Post || mongoose.model('Post', PostShema)