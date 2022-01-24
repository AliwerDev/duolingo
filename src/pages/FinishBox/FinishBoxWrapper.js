import styled from 'styled-components'

const FinishBoxWrapper = styled.div`
	display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  .scoreBox{
    display: flex;
    color: grey;
    font-size: 40px;
    margin-bottom: 20px;
  }
   
  button{
    svg{
      font-size: 60px;
    }
  }
`
export default FinishBoxWrapper;