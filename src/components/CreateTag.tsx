import styled from 'styled-components';
import React, {useRef, useState} from 'react';
import {AlertItem} from './AlertItem';

const CreateTagDiv = styled.div`
width: 100vw;
height: 100vh;
background: rgba(255,255,255,0.8);
position: absolute;
top: 0;
left: 0;
bottom: 0;
right: 0;
&.hide {
  display: none;
}
.createTagBox{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  background: #232428;
  border-radius: 20px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  > .labelname {
    color: #fff;
    border-bottom: 2px solid #ffffff;
    width: 80%;
    margin: 50px 0 30px 0;
    padding: 0 0 15px 0;
    text-align: center;
    background: transparent;
    font-size: 16px;

  }
  > input::-webkit-input-placeholder {  
    font-size: 14px;
  }
  > div{
    margin-bottom: 20px;
    margin-top: 10px;
    font-size: 14px;
    button {
      color: #fff;
      background: transparent;
      border: 2px solid #ffffff;
      padding: 6px 20px;
      border-radius: 10px;
      &.cancel {
        margin-right: 20px;
      }
    }
  }

  @media (min-width: 500px) {
    & {
      max-width: 300px;
    }
  }
}
`
type Props = {
  value: boolean;
  onChange: (visible: boolean) => void;
  tagList: {id: number, name: string}[];
  onChangeTagList: (newtag: string) => void
}

const CreateTag: React.FC<Props> = (props:Props) => {
  const refInput = useRef<HTMLInputElement>(null)
  const [visible,setVisible] = useState(false)
  const [message,setMessage] = useState('')
  const setAlert = (alertmessage: string) => {
    setVisible(true)
    setMessage(alertmessage)
    setTimeout(()=>{
      setVisible(false)
      setMessage("")
    }, 800)
  }
  const onAddTags= () => {
    const newTag = refInput.current!.value
    const tagNames = props.tagList.map(tag => tag.name)
    if(tagNames.indexOf(newTag) >= 0){
     setAlert("标签名已存在")
    }else if(newTag.trim() === ''){
      setAlert('标签名不能为空')
    }else if(newTag.trim().length > 10){
      setAlert('标签名不能超过10个字符')
    }else{
      props.onChangeTagList(newTag.trim())
      props.onChange(false)
    }
    refInput.current!.value = ''
  }
  return (
    <CreateTagDiv className={props.value?'':'hide'}>
      <div className='createTagBox'>
        <input className='labelname' type="text" placeholder="请输入标签名" ref={refInput}/>
        <div>
          <button className="cancel" onClick={()=>props.onChange(false)}>取消</button>
          <button className="define" onClick={()=>onAddTags()}>确定</button>
        </div>
      </div>
      <AlertItem visible={visible} message={message}/>
    </CreateTagDiv>
  )
}
export {CreateTag}