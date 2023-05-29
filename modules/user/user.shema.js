import Joi from "joi"

export const signupShema = Joi.object({
  firstName: Joi.string().required().max(35).message("máximo de {{#limit}} caracteres"),
  lastName: Joi.string().required().max(35).message("máximo de {{#limit}} caracteres"),
  user: Joi.string().required().max(40).message("máximo de {{#limit}} caracteres"),
  email: Joi.string().email({ tlds: {allow: false} }).required().max(100).message("máximo de {{#limit}} caracteres"),
  password: Joi.string().required()
   .max(75).message("máximo de {{#limit}} caracteres")
   .min(6).message("mínimo de {{#limit}} caracteres"),
})


export const LoginSchema = Joi.object({
  userOrEmail: Joi.string().required(),
  password: Joi.string().required()
   .max(75).message("máximo de {{#limit}} caracteres")
   .min(6).message("mínimo de {{#limit}} caracteres"),
})