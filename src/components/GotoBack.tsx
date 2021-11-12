import Icon from './Icons';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom'
const IconDiv = styled.div`
  background: #fff;
  > .icon{
    width: 2.2em;
    height: 2.2em;
    margin: 8px;
  }
`
const GotoBack = () => {
  const onClick= () => {
    useHistory().goBack()
  }
  return (
    <IconDiv>
      <Icon name="back" onClick={()=>onClick()}/>
    </IconDiv>
  )
}
export {GotoBack}