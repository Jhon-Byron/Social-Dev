import styled from "styled-components";
import moment from "moment"

import Menu from "../navigation/Menu"

const PostContainer = styled.div`
  background-color: ${props => props.theme.white};
  padding: 20px;
  border-radius: 10px;
`

const StyledUsername = styled.p`
  font-weight: bold;
  font-size: 18px;
`

const StyledDate = styled.p`
  font-size: 12px;
`

const ContainerText = styled.div`
  margin-top: 20px;
`

const ContainerMenu = styled.div`
  float: right;
`


function Post ({ user, date, text }) {
  const handleEdit = () => {
    console.log("editar post")
  }

  const handleDelete = () => {
    console.log("deletar post")
  }

  return (
    <PostContainer>
      <ContainerMenu>
        <Menu 
          options={[
            {
              text: 'editar publicação',
              onClick: handleEdit
            },
            {
              text: 'deletar publicação',
              onClick: handleDelete
            }
          ]}
        />
      </ContainerMenu>
      <StyledUsername>@{user}</StyledUsername>
      <StyledDate>{moment(date).format('LLL')}</StyledDate>
      <ContainerText>
        {text}
      </ContainerText>
    </PostContainer>
  )
}

export default Post