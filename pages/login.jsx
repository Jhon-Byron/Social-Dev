import styled from "styled-components"
import Link from "next/link"
import { useForm } from "react-hook-form" //criar formulario
import { joiResolver } from "@hookform/resolvers/joi" //validar formulario
import axios from "axios" //fazer coxeção frontend com backend
import { useRouter } from "next/router" //levar usuario para proxima rota se der tudo certo

import { LoginSchema } from "../modules/user/user.shema"

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

function LoginPage () {
  const router = useRouter()
  const { control, handleSubmit, formState: {errors}, setError } = useForm({
    resolver: joiResolver(LoginSchema)
  })  

  const onSubmit = async (data) => {
    try{
      const { status } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/login`, data)
      if (status === 200) {
        router.push('/')
      }
    } catch ({ response }) {
      if (response.data === 'incorrect password') {
        setError('password', {
          message: 'Senha Incorreta',
        })
      }
      else if (response.data === 'not found') {
        setError('userOrEmail', {
          message: 'Usuario ou email não encontrado'
        })
      }
      console.log(response.data)
    }
  }

  return(
    <>
      <ImageWithSpace>
        <H1># Social Dev</H1>
        <H4>Tudo que acontece no mundo dev, está aqui!</H4>
        <FormContainer>
          <H2>Entre em sua conta</H2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input label="Email ou Usuario" name="userOrEmail" control={control} />
            <Input label="Senha" type="password" name="password" control={control} />
            <Button type="submit" disabled={Object.keys(errors).length > 0}>Entrar</Button>
          </Form>
          <Text>Não possui uma conta? <Link href="/signup">Faça seu cadastro</Link></Text>
        </FormContainer>
      </ImageWithSpace>
    </>
  )
}


export default LoginPage
