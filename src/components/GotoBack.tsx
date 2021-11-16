import Icon from './Icons';
import styled from 'styled-components';
const IconDiv = styled.div`
  background: #fff;
  > .icon{
    margin: 12px;
  }
`
const GotoBack = () => {

  return (
    <IconDiv>
      <Icon name="back"/>
    </IconDiv>
  )
}
export {GotoBack}