import styled from 'styled-components';
import {EditInput} from '../components/EditInput';
import {useEffect, useState} from 'react';
import {GotoBack} from '../components/GotoBack';
import {Button} from '../components/Button';
import {useParams} from 'react-router-dom';
import {useTags} from '../hooks/useTags';
import {AlertItem} from '../components/AlertItem';
import {Link} from 'react-router-dom'
const EditLabelDiv = styled.div`
  background: #f4f0ef;
  height: 100vh;

  > .back {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 13px;
    > .fill {
      width: 70px;
      height: 70px;
    }
  }

  > .changeTag {
    > .editButtons {
      display: flex;
      justify-content: space-evenly;
      margin: 40px 0;
    }
  }
  > .noExist{
    text-align: center;
    margin-top: 100px;
    color: #a6a7ac;
  }
`;
type Params = {
  id: string
}
const EditLabel = () => {
  const [newName, setNewName] = useState('');
  const {tags, findTag, updateTag, deleteTag} = useTags();
  let {id} = useParams<Params>();
  const tag = findTag(parseInt(id));
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');
  const setAlert = (alertmessage: string) => {
    setVisible(true);
    setMessage(alertmessage);
    setTimeout(() => {
      setVisible(false);
      setMessage('');
    }, 1600);
  };
  useEffect(()=> setNewName(tag.name),[]) // eslint-disable-line react-hooks/exhaustive-deps

  const tagContent = (tag: { id: number; name: string }) => (
    <div className="changeTag">
      <EditInput name="标签名" type="text"
                 placeholder="请输入标签名"
                 value={tag.name} onChange={name => setNewName(name)}/>
      <div className="editButtons">
        <Button name="修改" onClick={() => {
          if(tags.map(tag=>tag.name).indexOf(newName)>=0){
            setAlert('标签名已存在')
          }else if(newName.trim()=== ''){
            setAlert("标签名不能为空")
          }else if(newName.trim().length > 10){
            setAlert('标签名不能超过10个字符')
          }else {
            updateTag(tag.id, {name: newName.trim()});
            setAlert('修改成功')
          }
        }}/>
        <Button name="删除" onClick={() => {
          deleteTag(tag.id);
          setAlert("删除成功")
        }}/>
      </div>
    </div>
  );
  return (
    <EditLabelDiv>
      <div className="back">
        <Link to="/tags" replace>
          <GotoBack/>
        </Link>
        <span>编辑标签</span>
        <div className="fill" />
      </div>
      {tag ? tagContent(tag) : <h3 className="noExist">标签不存在</h3>}
      <AlertItem visible={visible} message={message}/>
    </EditLabelDiv>
  );
};
export {EditLabel};