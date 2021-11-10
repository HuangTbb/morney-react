import styled from 'styled-components';
import {EditInput} from './EditInput';
import {useState} from 'react';
import {GotoBack} from '../components/GotoBack';
import {Button} from '../components/Button';

const EditLabelDiv = styled.div`
  background: #f5f5f5;
  height: 100vh;
  > .back {
    display: flex;
    align-items: center;
    background: #ffffff;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
    margin-bottom: 13px;
  }
  > .editButtons {
    display: flex;
    justify-content: space-around;
    margin: 40px 0;
  }
`
function EditLabel() {
  const [newName, setNewName] = useState("")
  return (
    <EditLabelDiv>
      <div className="back">
        <GotoBack/>
        <span>编辑标签</span>
      </div>
      <EditInput name="标签名" iconName="labelname" inputType="text"
                 placeHolder="请输入标签名"
                 value={newName} onChange={()=>setNewName(newName)} />
    <div className="editButtons">
      <Button name="修改"/>
      <Button name="删除"/>
    </div>
    </EditLabelDiv>

  )
}
export {EditLabel}