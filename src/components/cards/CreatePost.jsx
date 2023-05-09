import styled from "styled-components"

import H4 from "../typografhy/H4"
import TextArea from "../inputs/TextArea"
import Button from "../inputs/Button"

const PostContainer = styled.div`
  background-color: ${props => props.theme.white};
  padding: 20px 40px;

  @media (max-width: 500px) {
    padding: 20px;
  }
`

const Title = styled.span`
  font-weight: bold;
  text-align: center;
`

const TextContainer = styled.div`
  margin: 20px 0;
  width: 100%;
`
const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  @media (max-width: 500px) {
    flex-direction: column-reverse;
  }
`
const BottomTex = styled.p`
  flex: 1;
`

function CreatePost () {
  return (
    <PostContainer>
      <H4>
        <Title>
          No que você está pensando, @nick?
        </Title>
      </H4>
      <TextContainer>
        <TextArea placeholder="Digite sua mensagem" rows="4" />
      </TextContainer>
      <BottomContainer>
        <BottomTex>A sua mensagem será publica</BottomTex>
        <Button>Enviar Mensagem</Button>
      </BottomContainer>
    </PostContainer>
  )
}

export default CreatePost