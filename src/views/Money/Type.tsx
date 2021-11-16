import styled from 'styled-components';
import Icon from '../../components/Icons';
import React, {useState} from 'react';

const TypeSection = styled.section`
  border-bottom: 1px solid rgba(51, 51, 51, 0.1);
  display: flex;
  justify-content: center;
  padding: 10px 0;
 
  > div {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    > p {
      margin-left: 5px;
    }

    &.selected {
      color: #ffa115;
      font-weight: bold;
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
    <TypeSection>
      {types.map(type =>
        <div key={type}
             onClick={()=>props.onChange(type)}
             className={selectedType === type? 'selected': ''}>
          <Icon name={selectedType === type? 'choose': 'nochoose'}/>
          <p>{categoryMap[type]}</p>
        </div>
      )}
    </TypeSection>
  )
}
export {Type};
