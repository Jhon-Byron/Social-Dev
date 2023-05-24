import { useState } from "react"
import styled from "styled-components"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { joiResolver } from '@hookform/resolvers/joi'

import { signupShema } from "../modules/user/user.shema"

import ImageWithSpace from "../src/components/layout/ImageWithSpace"
import H1 from "../src/components/typografhy/H1"
import H2 from "../src/components/typografhy/H2"
import H4 from "../src/components/typografhy/H4"
import Button from "../src/components/inputs/Button"
import Input from "../src/components/inputs/Input"

const FormContainer = styled.div`
  margin-top: 60px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  gap: 20px;
`

const Text = styled.p`
  text-align: center;
`

function SignupPage () {
  const { register, handleSubmit, formState: {errors}} = useForm({
    resolver: joiResolver(signupShema)
  })                    

const handleForm = (data) => {
 console.log(data)
}
console.log(errors)

  return(
    <>
      <ImageWithSpace>
        <H1># Social Dev</H1>
        <H4>Tudo que acontece no mundo dev, está aqui!</H4>
        <FormContainer>
          <H2>Crie sua Conta</H2>
          <Form onSubmit={handleSubmit(handleForm)}>
            <Input label="Nome" {...register('firstName')}  />
            <Input label="Sobrenome" {...register('lastName')}/>
            <Input label="Usuario" {...register('user')} />            
            <Input label="Email" type="email" {...register('email')} />
            <Input label="Senha" type="password" {...register('password')} />
            <Button type="submit">Cadastrar</Button>
          </Form>
          <Text>Já possui uma conta? <Link href="/Login">Faça seu Login</Link></Text>
        </FormContainer>
      </ImageWithSpace>
    </>
  )
}


export default SignupPage