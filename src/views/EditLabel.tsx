import styled from 'styled-components';
import {EditInput} from './EditInput';
import {useState} from 'react';
import {GotoBack} from '../components/GotoBack';
import {Button} from '../components/Button';
import {useParams} from 'react-router-dom';
import {useTags} from '../hooks/useTags';

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
  > .changeTag {
    > .editButtons {
      display: flex;
      justify-content: space-around;
      margin: 40px 0;
    }
  }
`;
type Params = {
  id: string
}
const EditLabel = () => {
  const [newName, setNewName] = useState('');
  const [visible,setVisible] = useState(false)
  const [message,setMessage] = useState('')
  const setAlert = (alertmessage: string) => {
    setVisible(true)
    setMessage(alertmessage)
    setTimeout(()=>{
      setVisible(false)
      setMessage("")
    }, 1600)
  }
  const {findTag, updateTag, deleteTag} = useTags();
  let {id} = useParams<Params>();
  const tag = findTag(parseInt(id));
  const tagContent = (tag: {id: number; name: string}) => (
    <div className="changeTag">
      <EditInput name="标签名" iconName="labelname" type="text"
                 placeholder="请输入标签名"
                 value={tag.name} onChange={() => setNewName(newName)}/>
      <div className="editButtons">
        <Button name="修改" onClick={() => {updateTag(tag.id, {name: newName});}}/>
        <Button name="删除" onClick={() => {deleteTag(tag.id);}}/>
      </div>
    </div>
  )
  return (
    <EditLabelDiv>
      <div className="back">
        <GotoBack/>
        <span>编辑标签</span>
      </div>
      {tag ? tagContent(tag): <div>tag不存在</div>}
    </EditLabelDiv>
  );
};
export {EditLabel};