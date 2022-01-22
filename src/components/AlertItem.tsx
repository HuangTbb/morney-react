import styled from 'styled-components';
import React from 'react';

const Alert = styled.div`
width: 100vw;
height: 100vh;
background: rgba(255,255,255,0);
position: absolute;
top: 0;
left: 0;
bottom: 0;
right: 0;
&.hide {
  display: none;
}
> .alertMessage{
  position: fixed;
  left: 50%;
  top: 50px;
  transform: translateX(-50%);
  background: #232428;
  border-radius: 10px;
  padding: 20px;
  white-space: nowrap;
  color: #fff;
  font-size: 14px;
}
`;
type Props = {
  visible: boolean;
  message: string;
}

const AlertItem: React.FC<Props> = (props: Props) => {
  return (
    <Alert className={props.visible ? '' : 'hide'}>
      <div className='alertMessage'>
        <p>{props.message}</p>
      </div>

    </Alert>
  );
};

export {AlertItem};