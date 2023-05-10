import styled from "styled-components";

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

function Post () {
  return (
    <PostContainer>
      <StyledUsername>@username</StyledUsername>
      <StyledDate>10 de maio de 2023</StyledDate>
      <ContainerText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eligendi totam temporibus dolores veritatis aperiam aliquam tenetur, iure reprehenderit facilis possimus distinctio perspiciatis. Nostrum autem ipsa dolor explicabo sapiente consequatur!
      </ContainerText>
    </PostContainer>
  )
}

export default Post