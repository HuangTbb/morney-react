import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {Type} from './Money/Type';
import {Tags} from './Money/Tags';
import {NumberPad} from './Money/NumberPad';
import {EditInput} from '../components/EditInput';
import {useRecords} from '../hooks/useRecords';
import {AlertItem} from '../components/AlertItem';
import {setTimeout} from 'timers';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

type Category = '-' | '+'
const defaultFormData = {
  tags: [] as string[],
  note: "",
  date: (new Date()).toISOString().split('T')[0],
  category: '-' as Category,
  amount: '0'
}

function Money() {
  const {addRecord} = useRecords()
  const [selected, setSelected] = useState(defaultFormData);
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');

  const setAlert = (alertmessage: string) => {
    setVisible(true);
    setMessage(alertmessage);
    setTimeout(() => {
      setVisible(false);
      setMessage('');
    }, 800);
  };
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({...selected,...obj });
  };
  const Submit = () => {
    if(selected.amount === '0'){
      setAlert('请输入金额')
    }else if(selected.tags.length===0){
      setAlert('请至少选择一个标签')
    }else{
      if(addRecord(selected)){
        setAlert('添加成功')
      }
    }
  }
  return (
    <MyLayout>
      <Type value={selected.category}
            onChange={category => onChange({category})}/>
      <Tags value={selected.tags}
            onChange={tags => onChange({tags})}/>
      <EditInput name="备注" type="text" placeholder="请输入备注"
                 value={selected.note}
                 onChange={note => onChange({note})}/>
      <EditInput name="日期" type="date"
                 value={selected.date}
                 onChange={date => onChange({date})}/>
      
      <NumberPad value={selected.amount}
                 onChange={amount => onChange({amount})}
                 onOk={()=>Submit()}/>
      <AlertItem visible={visible} message={message}/>
    </MyLayout>
  );
}
export {Money};
