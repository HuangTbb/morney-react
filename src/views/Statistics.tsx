import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import Icon from '../components/Icons';
import {RecordItem, useRecords} from '../hooks/useRecords';
import dayjs from 'dayjs';

const TypeTab = styled.ul`
  display: flex;
  justify-content: center;
  padding: 10px 0;
  border-bottom: 1px solid rgba(51, 51, 51, 0.1);
  font-size: 16px;

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
`;
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

    .totalMoney {
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
`;
const Statistics = () => {
  const categoryMap = {'-': '支出', '+': '收入'};
  type Keys = keyof typeof categoryMap
  const [types] = useState<Keys[]>(['-', '+']);
  const [selectType, setSelectType] = useState<Keys>('-');
  const {records} = useRecords()
  const selectedRecords = records.filter(r=> r.category === selectType)
  const hash: {[K: string]: RecordItem[]} = {}
  selectedRecords.map(r=> {
    const key = r.date
    if(!(key in hash)){
      hash[key] = []
    }
    hash[key].push(r)
  })
  const array = Object.entries(hash).sort((a,b)=>{
    if(a[0]===b[0]) return 0
    if(a[0]>b[0]) return -1
    if(a[0]<b[0]) return 1
    return 0
  })
  const tagString = (tag:string[])=> {
    return tag.join('，')
  }
  function beautifulTitle(title: string) {
    const day = dayjs(title);
    const now = dayjs();
    if (day.isSame(now, 'day')) {
      return '今天';
    } else if (day.isSame(now.subtract(1, 'day'), 'day')) {
      return '昨天';
    } else if (day.isSame(now.subtract(2, 'day'), 'day')) {
      return '前天';
    } else if (day.isSame(now, 'year')) {
      return day.format('M-D');
    } else {
      return day.format('YYYY-M-D');
    }
  }
  return (
    <Layout>
      <TypeTab>
        {types.map(type => {
          return (
            <li key={type}
                className={selectType === type ? 'selected' : ''}
                onClick={() => setSelectType(type)}>
              {categoryMap[type]}
            </li>
          );
        })}
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
        {array.map(([date,records],key)=> {
          return (
            <li className="recordsBox" key={key}>
              <h3>{beautifulTitle(date)}<span>￥123</span></h3>
              <ol>
                {records.map((r,key) =>
                  <li className="detailsList" key={key}>
                    <span className="tagSpan">{tagString(r.tags)}</span>
                    <span className="noteSpan">{r.note}</span>
                    <span className="amountSpan">￥{r.amount}</span>
                  </li>
                )}
              </ol>
            </li>
          )
        })}
      </MorneyList>
    </Layout>
  );
};
export default Statistics;