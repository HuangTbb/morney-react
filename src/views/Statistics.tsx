import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';
import Icon from '../components/Icons';
const TypeTab = styled.ul`
  display: flex;
  justify-content: center;
  padding: 10px 0;
  border-bottom: 1px solid rgba(51, 51, 51, 0.1);
  > li {
    margin: 0 25px;
    padding: 0 4px;
    &.selected {
      font-weight: bolder;
      font-size: 18px;
      color: #76CBE5;
      border-bottom: 3px solid #76CBE5;
    }
  }
`
const MorneyList = styled.ol`
  > .message {
    padding: 8px 16px;
    border-bottom: 10px solid #f5f5f5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .showEchart {
      color: #518C9E;
      display: flex;
    }
    .totalMoney{
      display: flex;
      align-items: center;
      color: #F4C738;
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
    font-size: 14px;

    > h3 {
      padding: 0 16px;
      color: #F4C738;
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
`
const Statistics = () => {
  return (
    <Layout>
      <TypeTab>
        <li className="selected">支出</li>
        <li>收入</li>
      </TypeTab>
      <MorneyList>
        <li className="message">
          <div className="totalMoney">
            <Icon name="countin"/>
            <span>100</span>
          </div>
          <div className="showEchart">
            <Icon name="chart"/>
          </div>
        </li>
        <li className="recordsBox">
          <h3>11月11日<span>￥123</span></h3>
          <ol>
            <li className="detailsList">
              <span className="tagSpan">住</span>
              <span className="noteSpan">买了一套房子</span>
              <span className="amountSpan">￥1000</span>
            </li>
          </ol>
        </li>
      </MorneyList>
    </Layout>

  );
}
export default Statistics;