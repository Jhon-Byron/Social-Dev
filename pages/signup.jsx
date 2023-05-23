import { useState } from "react"
import styled from "styled-components"
import Link from "next/link"

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
const [firstName, setfirstName] = useState('')
const [lastName, setlastName] = useState('')
const [user, setuser] = useState('')                    
const [ email , setemail ] = useState('')                  
const [password, setpassword] = useState('')                     

const handleForm = (event) => {
  event.preventDefault()
  console.log({
    firstName,
    lastName,
    user,
    email,
    password
  })
}

  return(
    <>
      <ImageWithSpace>
        <H1># Social Dev</H1>
        <H4>Tudo que acontece no mundo dev, está aqui!</H4>
        <FormContainer>
          <H2>Crie sua Conta</H2>
          <Form onSubmit={handleForm}>
            <Input label="Nome" onChange={({ target }) => {setfirstName(target.value)}} />
            <Input label="Sobrenome" onChange={({ target }) => {setlastName(target.value)}}/>
            <Input label="Usuario" onChange={({ target }) => {setuser(target.value)}}/>            
            <Input label="Email" type="email" onChange={({ target }) => {setemail(target.value)}} />
            <Input label="Senha" type="password" onChange={({ target }) => {setpassword(target.value)}}/>
            <Button>Cadastrar</Button>
          </Form>
          <Text>Já possui uma conta? <Link href="/Login">Faça seu Login</Link></Text>
        </FormContainer>
      </ImageWithSpace>
    </>
  )
}


export default SignupPage