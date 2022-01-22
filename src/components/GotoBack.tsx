import Icon from './Icons';
import styled from 'styled-components';
const IconDiv = styled.div`
  background: #fff;
  border-radius: 50%;
  margin: 14px;
  padding: 3px 5px;
  display: inline-block;
  > .icon{
    width: 2em;
    height: 2em;
    color: #232428;
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