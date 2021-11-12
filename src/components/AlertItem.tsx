import styled from 'styled-components';
import React from 'react';

const Alert = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
  padding: 25px;
  font-size: 14px;
  white-space: nowrap;
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
      {props.message}
    </Alert>
  )
}

export {AlertItem}