import styled from "styled-components"

const Styledfather = styled.div`
@media (max-width: 420px) {
  font-size: 60px;
  font-weight: bold;
}
@media (max-width: 375px) {
  font-size: 57px;
  font-weight: bold;
  
}
`

const Styledchaves =styled.span`
position: relative;
top: 10px;
`

const StyledDev = styled.span`
 position: relative;
 top: 10px;
`

function SocialDev () {
  return (
    <>
    <Styledfather>
      <Styledchaves>
        <img src="./code-s-slash-svgrepo-com.svg" width="60px" />
      </Styledchaves>
           Social  
      <StyledDev>
        <img src="./dev-to-svgrepo-com.svg" width="60" />
      </StyledDev>
    </Styledfather>
     
   </>
  )
}


export default SocialDev