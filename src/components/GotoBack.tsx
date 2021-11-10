import {Link} from 'react-router-dom';
import Icon from './Icons';
import styled from 'styled-components';
const IconDiv = styled.div`
  background: #fff;
  > .icon{
    width: 2.2em;
    height: 2.2em;
    margin: 8px;
  }
`
const GotoBack = (props: any) => {
  return (
    <Link to={``}>
      <IconDiv>
        <Icon name="back"/>
      </IconDiv>
    </Link>
  )
}
export {GotoBack}