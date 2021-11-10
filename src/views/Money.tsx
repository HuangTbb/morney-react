import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {Type} from './Money/Type';
import {Tags} from './Money/Tags';
import {NumberPad} from './Money/NumberPad';
import {EditInput} from './EditInput';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

type Category = '-' | '+'

function Money() {
  const [selected, setSelected] = useState({
    tags: [] as string[],
    note: '',
    date: '',
    category: '-' as Category,
    amount: '0'
  });
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({...selected,...obj });
  };
  return (
    <MyLayout>
      <Tags value={selected.tags}
            onChange={tags => onChange({tags})}/>
      <EditInput name="备注" iconName="remarks" inputType="text" placeHolder="请输入备注"
                 value={selected.note}
                 onChange={note => onChange({note})}/>
      <EditInput name="日期" iconName="date" inputType="date"
                 value={selected.date}
                 onChange={date => onChange({date})}/>
      <Type value={selected.category}
            onChange={category => onChange({category})}/>
      <NumberPad value={selected.amount}
                 onChange={amount => onChange({amount})}/>
    </MyLayout>
  );
}

export default Money;