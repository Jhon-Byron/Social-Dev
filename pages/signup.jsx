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
import { object } from "joi"

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

  return(
    <>
      <ImageWithSpace>
        <H1># Social Dev</H1>
        <H4>Tudo que acontece no mundo dev, está aqui!</H4>
        <FormContainer>
          <H2>Crie sua Conta</H2>
          <Form onSubmit={handleSubmit(handleForm)}>
            <Input label="Nome" {...register('firstName')} error={errors.firstName}  />
            <Input label="Sobrenome" {...register('lastName')} error={errors.lastName} />
            <Input label="Usuario" {...register('user')} error={errors.user} />            
            <Input label="Email" type="email" {...register('email')} error={errors.email} />
            <Input label="Senha" type="password" {...register('password')} error={errors.password} />
            <Button type="submit" disabled={Object.keys(errors).length > 0}>Cadastrar</Button>
          </Form>
          <Text>Já possui uma conta? <Link href="/Login">Faça seu Login</Link></Text>
        </FormContainer>
      </ImageWithSpace>
    </>
  )
}


export default SignupPage