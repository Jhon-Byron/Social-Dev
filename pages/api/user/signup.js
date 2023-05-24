import { withIronSessionApiRoute } from 'iron-session/next'

import createHandler from '../../../lib/middlewares/nextConnect'
import validate from '../../../lib/middlewares/validation'
import { signupUser } from "../../../modules/user/user.service"
import { ironConfig } from '../../../lib/middlewares/ironSession'
import { signupShema } from "../modules/user/user.shema"


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
    throw err
  }
 } )

export default withIronSessionApiRoute(signup, ironConfig)