import styled from 'styled-components';
import Icon from '../components/Icons';
import React, {useRef} from 'react';

const DateSection = styled.section`
  border-bottom: 1px solid rgba(51, 51, 51, 0.1);
  padding: 0 16px;
  background: #fff;
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
      font-family: inherit;
      font-size: 14px;
    }
  }
`;
type Props = {
  name: string;
  iconName: string;
  inputType: string;
  placeHolder?: string;
  value: string;
  onChange: (value: string) => void;
}
const EditInput: React.FC<Props> = (props: Props) => {
  const value = props.value
  const refInput = useRef<HTMLInputElement>(null)
  const onBlur = () => {
    if(refInput.current !== null){
      props.onChange(refInput.current.value)
    }
  }
  return (
    <DateSection>
      <label>
        <Icon name={props.iconName}/>
        <p>{props.name}</p>
        <input
          type={props.inputType}
          placeholder={props.placeHolder || ''}
          defaultValue={value}
          onBlur={onBlur}
          ref={refInput}
        />
      </label>
    </DateSection>
  )
}
export {EditInput};