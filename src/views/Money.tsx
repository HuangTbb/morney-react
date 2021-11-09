import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';
import {Type} from './Money/Type';
import {Tags} from './Money/Tags';
import {NumberPad} from './Money/NumberPad';
import {EditInput} from './EditInput';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;
const Money = () => {
  return (
    <MyLayout>
      <Tags/>
      <EditInput name="备注" iconName="remarks" inputType="text" placeHolder="请输入备注"/>
      <EditInput name="日期" iconName="date" inputType="date"/>
      <Type/>
      <NumberPad/>
    </MyLayout>
  );
};
export default Money;