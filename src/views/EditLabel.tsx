import styled from 'styled-components';
import {EditInput} from './EditInput';
import {useState} from 'react';
import {GotoBack} from '../components/GotoBack';
import {Button} from '../components/Button';
import {useParams} from 'react-router-dom'
import {useTags} from '../components/useTags';

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
type Params = {
  id: string
}
const EditLabel = () => {
  const [newName, setNewName] = useState("")
  const {findTag, updateTag} = useTags();
  let {id} = useParams<Params>();
  const tag = findTag(parseInt(id))
  return (
    <EditLabelDiv>
      <div className="back">
        <GotoBack/>
        <span>编辑标签</span>
      </div>
      <EditInput name="标签名" iconName="labelname" type="text"
                 placeholder="请输入标签名"
                 value={tag.name} onChange={()=>setNewName(newName)} />
      <div className="editButtons">
        <div onClick={() => {
          updateTag(tag.id, {name: newName})
        }}>
          <Button name="修改"/>
        </div>

        <Button name="删除"/>
      </div>
    </EditLabelDiv>
  )
}
export {EditLabel}