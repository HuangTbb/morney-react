import styled from 'styled-components';
import Icon from '../components/Icons';
import React from 'react';

const DateSection = styled.section`
  border-bottom: 1px solid rgba(51, 51, 51, 0.1);
  padding: 0 16px;

  > label {
    display: flex;
    align-items: center;
    
    > p {
      padding-right: 16px;
      white-space: nowrap;
      padding-left: 8px;
    }

    > input {
      height: 50px;
      flex-grow: 1;
      background: #fff;
    }
  }
`;
type Props = {
  name: string, iconName: string, inputType: string, placeHolder?: string
}
const EditInput = (props: Props) => {
  return (
    <DateSection>
      <label>
        <Icon name={props.iconName}/>
        <p>{props.name}</p>
        <input type={props.inputType} placeholder={props.placeHolder || ''}/>
      </label>
    </DateSection>
  )
}
export default EditInput;