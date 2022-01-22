import styled from 'styled-components';
import Icon from '../../components/Icons';
import React from 'react';
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > .type {
    margin-bottom: 18px;
  }
  .showEchart {
    margin-right: 14px;
    .icon {
      color: #232428;
      width: 1.8em;
      height: 1.8em;
    }
  }

`
const MorneyList = styled.ol`
  > .message {
    display: flex;
    justify-content: center;
    margin-bottom: 18px;

    .totalMoney {
      display: flex;
      align-items: center;

      > span {
        margin-left: 10px;
        font-weight: bold;
        font-size: 18px;
      }
    }
  }

  .recordsBox {
    margin-bottom: 10px;
    padding: 10px 0;
    line-height: 30px;
    font-size: 14px;
    background: #ffffff;
    border-radius: 20px;

    > h3 {
      padding: 0 16px;
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
        color: #a6a7ac;
      }
    }
  }
`;
const NoRecordDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40%;
  color: #a6a7ac;
  > p {
    margin-top: 20px;
    font-weight: bold;
  }
  > .icon{
    width: 3em;
    height:3em;
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
      <p>快去记录一笔帐吧！</p>
    </NoRecordDiv>
  )
}
export {MorneyList,NoRecord, Top};