import styled from 'styled-components';
import React from 'react';
import Icon from './Icons';

const Alert = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background:  #518C9E;
  border-radius: 10px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.25);
  padding: 25px;
  white-space: nowrap;
  color: #fff;
  > div {
    display: flex;
    align-items: center;
    > p {
      padding-top: 4px;
      padding-left: 10px;
    }
  }
  &.hide{
    display: none;
  }
`
type Props = {
  visible: boolean;
  message: string;
}
const AlertItem: React.FC<Props> = (props: Props) => {
  return (
    <Alert className={props.visible?'': 'hide'}>
      <div>
        <Icon name="alert"/>
        <p>{props.message}</p>
      </div>
    </Alert>
  )
}
export {AlertItem}