import styled from 'styled-components';
import Icon from '../../components/Icons';
import React from 'react';

const TypeTab = styled.ul`
  display: flex;
  justify-content: center;
  padding: 14px 0;
  border-bottom: 1px solid rgba(51, 51, 51, 0.1);
  font-size: 16px;

  > li {
    margin: 0 25px;
    padding: 0 4px;

    &.selected {
      font-weight: bolder;
      color: #ffa115;
      border-bottom: 3px solid #ffa115;
    }
  }
`;
const MorneyList = styled.ol`
  > .message {
    padding: 8px 16px;
    border-bottom: 10px solid #f5f5f5;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .showEchart {
      display: flex;
    }

    .totalMoney {
      display: flex;
      align-items: center;
      color: #ffa115;

      > span {
        margin-left: 10px;
        font-weight: bold;
        font-size: 18px;
      }
    }
  }

  .recordsBox {
    padding: 10px 0;
    border-bottom: 10px solid #f5f5f5;
    line-height: 30px;

    > h3 {
      font-size: 16px;
      padding: 0 16px;
      color: #518C9E;
      display: flex;
      justify-content: space-between;
    }

    .detailsList {
      margin: 0 16px;
      display: flex;
      justify-content: space-between;

      > .noteSpan {
        margin-right: auto;
        padding-left: 14px;
        padding-right: 14px;
        color: #999;
      }
    }
  }
`;
const NoRecordDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  color: rgb(0,0,0,0.2);
  > h3 {
    color: #8a8a8a;
  }
  > .icon{
    width: 6em;
    height:6em;
    margin-bottom: 30px;
  }
  &.hide {
    display: none;
  }
`
type Props ={
  visible: boolean
}
const NoRecord = (props: Props) => {
  return (
    <NoRecordDiv className={props.visible?'hide':''}>
      <Icon name="noresult"/>
      <h3>快去记录一笔帐吧！</h3>
    </NoRecordDiv>
  )
}
export {TypeTab,MorneyList,NoRecord};