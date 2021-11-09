import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';
import Icon from '../components/Icons';

const MoneySection = styled.section`
  display: flex;
  flex-direction: column-reverse;
`
const TagsSection = styled.section`
  padding: 10px 0;
  color: #fff;
  border-bottom: 1px solid rgba(51, 51, 51, 0.1);
  > ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    > li {
      height: 24px;
      line-height: 24px;
      border-radius: 12px;
      padding: 0 16px;
      margin: 10px;
      background: #518C9E;
    }
  }
`;

const NotesSection = styled.section`
  border-bottom: 1px solid rgba(51, 51, 51, 0.1);
  display: flex;
  align-items: center;
  padding:0 16px;
  > p {
    padding-right: 16px;
    white-space: nowrap;
    padding-left: 8px;
  }
  > input {
    height: 50px;
    flex-grow: 1;
  }
`;

const DateSection = styled.section`
  border-bottom: 1px solid rgba(51, 51, 51, 0.1);
  display: flex;
  align-items: center;
  padding:0 16px;
  > p {
    padding-right: 16px;
    white-space: nowrap;
    padding-left: 8px;
  }
  > input {
    height: 50px;
    flex-grow: 1;
  }
`;

const TypeSection = styled.section`
  border-bottom: 1px solid rgba(51, 51, 51, 0.1);
  display: flex;
  justify-content: center;
  padding: 10px 0;
  > div {
    font-size: 16px;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    > p {
      margin-left: 5px;
    }
    > .icon {
      width: 1.3em;
      height: 1.3em;
    }
  }
`;
const NumberPadSection = styled.section`
  > div:first-child{
    padding: 8px 14px 0;
    font-size: 18px;
    text-align: right;
  }
  > div:nth-child(2){
    padding: 0 14px;
    font-size: 20px;
    word-break: break-all;
    text-align: right;
  }
  > div:nth-child(3){
    padding: 2px;
    background: rgba(51, 51, 51, 0.1);
    > button {
      font-size: 18px;
      width: 20%;
      height: 60px;
      background: #fff;
      float: left;
      border: 2px solid rgba(51, 51, 51, 0.1);
      border-radius: 10px;
    }
    > .ok{
      height: 120px;
      float: right;
    }
    > .zero{
      width: 40%;
    }
  }
  > div:nth-child(3)::after{
    content: "";
    clear: both;
    display: block;
  }
`;
const Money = () => {
  return (
    <Layout>
      <MoneySection>
        <NumberPadSection>
          <div>0</div>
          <div>0</div>
          <div>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>+</button>
            <button>清除</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>-</button>
            <button>清空</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>×</button>
            <button className="ok">确定</button>
            <button className="zero">0</button>
            <button>.</button>
            <button>÷</button>
          </div>
        </NumberPadSection>
        <TypeSection>
          <div><Icon name="choose"/><p>支出</p></div>
          <div><Icon name="nochoose"/><p>收入</p></div>
        </TypeSection>
        <DateSection>
          <Icon name="date"/>
          <p>日期</p>
          <input type="date"/>
        </DateSection>
        <NotesSection>
          <Icon name="remarks"/>
          <p>备注</p>
          <input type="text"/>
        </NotesSection>
        <TagsSection>
          <ul>
            <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
          </ul>
        </TagsSection>
      </MoneySection>
    </Layout>
  );
};
export default Money;