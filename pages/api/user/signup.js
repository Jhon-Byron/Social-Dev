import { withIronSessionApiRoute } from 'iron-session/next'

import createHandler from '../../../lib/middlewares/nextConnect'
import validate from '../../../lib/middlewares/validation'
import { signupUser } from "../../../modules/user/user.service"
import { ironConfig } from '../../../lib/middlewares/ironSession'
import { signupShema } from '../../../modules/user/user.shema'
import { object } from 'joi'


const signup = createHandler()

  signup.post(validate({ body: signupShema }), async (req, res) => {
  try {
      const user = await signupUser(req.body)

      req.session.user = {
        id: user._id,
        user: user.user
      }
      await req.session.save()

      res.status(201).json({ ok: true })
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).send({
        code: 11000,
        duplicatedkey: Object.keys(err.keyPattern)[0]
      })
    }
    throw err
  }
 } )

export default withIronSessionApiRoute(signup, ironConfig)