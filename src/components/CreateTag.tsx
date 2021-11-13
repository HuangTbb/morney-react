import styled from 'styled-components';
import React, {useRef, useState} from 'react';
import {AlertItem} from './AlertItem';

const CreateTagDiv = styled.div`
  position: absolute;
  left: 50%;
  top: 100px;
  transform: translateX(-50%);
  background: #518C9E;
  border-radius: 20px;
  font-size: 18px;
  box-shadow: 2px -2px 2px rgb(81, 140, 158);
  width: 80%;

  &.hide {
    display: none;
  }

  > p {
    color: #fff;
    text-align: center;
    padding-top: 20px;
  }

  > input {
    color: #fff;
    border-bottom: 1px solid #fff;
    width: 100%;
    margin-top: 30px;
    padding-bottom: 30px;
    text-align: center;
    background: #518C9E;
  }

  > input::-webkit-input-placeholder {  
    color: #eee;
    font-size: 14px;
  }

  > button {
    color: #fff;
    background: transparent;
    border: none;
    width: 50%;
    height: 60px;

    &.cancel {
      border-right: 1px solid #fff;
    }
  }
  @media (min-width: 500px) {
    & {
      max-width: 300px;
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
    }, 1600)
  }
  const onAddTags= () => {
    const newTag = refInput.current!.value
    const tagNames = props.tagList.map(tag => tag.name)
    if(tagNames.indexOf(newTag) >= 0){
     setAlert("标签名已存在")
    }else if(newTag === ''){
      setAlert('标签名不能为空')
    }else if(newTag.indexOf(' ')>=0){
      setAlert("标签名不能含有空格")
    }else if(newTag.length > 30){
      setAlert('标签名不能超过30个字符')
    }else{
      props.onChangeTagList(newTag.trim())
      props.onChange(false)
    }
    refInput.current!.value = ''
  }
  return (
    <CreateTagDiv className={props.value?'':'hide'}>
      <p>标签名</p>
      <input type="text" placeholder="请输入标签名" ref={refInput}/>
      <button className="cancel" onClick={()=>props.onChange(false)}>取消</button>
      <button className="define" onClick={()=>onAddTags()}>确定</button>
      <AlertItem visible={visible} message={message}/>
    </CreateTagDiv>
  )
}
export {CreateTag}