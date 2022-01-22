import styled from 'styled-components';
import React, {useState} from 'react';

const TypeSection = styled.section`
  display: flex;
  justify-content: left;
  margin: 14px 0 0 14px;
 
  > div {
    padding: 0 4px;
    color: #a6a7ac;
    font-size: 16px;
    margin: 5px 10px;

    &.selected {
      font-weight: bold;
      border-bottom: 2px solid #232428;
      color: #232428;
    }
  }
`;

type Props = {
  value: '-' | '+';
  onChange: (value: ('-'|'+')) => void;
}

const Type: React.FC<Props> = (props: Props) => {
  const categoryMap = {'-':'支出','+':'收入'}
  type Keys = keyof typeof categoryMap
  const [types] = useState<Keys[]>(['-','+'])
  const selectedType = props.value

  return (
    <TypeSection className='type'>
      {types.map(type =>
        <div key={type}
             onClick={()=>props.onChange(type)}
             className={selectedType === type? 'selected': ''}>
          <p>{categoryMap[type]}</p>
        </div>
      )}
    </TypeSection>
  )
}
export {Type};
