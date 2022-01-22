import styled from 'styled-components';
import React, {useRef} from 'react';

const DateSection = styled.section`
  margin-bottom: 10px;
  > label {
    font-size: 14px;
    display: flex;
    align-items: center;
    background: #ffffff;
    border-radius: 20px;
    padding: 3px 0;
    > p {
      white-space: nowrap;
      padding-left: 20px;
      padding-right: 10px;
    }
    > input {
      height: 50px;
      flex-grow: 1;
      padding: 0 8px;
      border-radius: 10px;
    }
  }
`;
type Props = {
  name: string;
  type: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}
const EditInput: React.FC<Props> = (props: Props) => {
  const refInput = useRef<HTMLInputElement>(null)
  const onBlur = () => {
    if(refInput.current !== null){
      props.onChange(refInput.current.value)
    }
  }
  return (
    <DateSection>
      <label>
        <p>{props.name}</p>
        <input
          type={props.type}
          placeholder={props.placeholder}
          defaultValue={props.value}
          onBlur={onBlur}
          ref={refInput}
        />
      </label>
    </DateSection>
  )
}
export {EditInput};