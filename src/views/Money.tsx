import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {Type} from './Money/Type';
import {Tags} from './Money/Tags';
import {NumberPad} from './Money/NumberPad';
import {EditInput} from './EditInput';
import {useRecords} from '../hooks/useRecords';
import {AlertItem} from '../components/AlertItem';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

type Category = '-' | '+'
const defaultFormData = {
  tagIds: [] as number[],
  note: "",
  date: "",
  category: '-' as Category,
  amount: '0'
}

function Money() {
  const {addRecord} = useRecords()
  const [selected, setSelected] = useState(defaultFormData);
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({...selected,...obj });
  };
  const Submit = () => {
    if(addRecord(selected)){
      alert('添加成功')
      setSelected(defaultFormData)
    }
  }
  return (
    <MyLayout>
      {JSON.stringify(selected)}
      <Tags value={selected.tagIds}
            onChange={tagIds => onChange({tagIds})}/>
      <EditInput name="备注" iconName="remarks" type="text" placeholder="请输入备注"
                 value={selected.note}
                 onChange={note => onChange({note})}/>
      <EditInput name="日期" iconName="date" type="date"
                 value={selected.date}
                 onChange={date => onChange({date})}/>
      <Type value={selected.category}
            onChange={category => onChange({category})}/>
      <NumberPad value={selected.amount}
                 onChange={amount => onChange({amount})}
                 onOk={()=>Submit()}/>
    </MyLayout>
  );
}
export default Money;
