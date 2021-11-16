import Layout from '../components/Layout';
import React, {useState} from 'react';
import Icon from '../components/Icons';
import {RecordItem, useRecords} from '../hooks/useRecords';
import {MorneyList, TypeTab} from './Money/Statistics/StatisticsStyle';
import {BeautifulTitle} from './Money/Statistics/BeautifulTitle';


const Statistics = () => {
  const categoryMap = {'-': '支出', '+': '收入'};
  type Keys = keyof typeof categoryMap
  const [types] = useState<Keys[]>(['-', '+']);
  const [selectType, setSelectType] = useState<Keys>('-');
  const {records} = useRecords();
  const selectedRecords = records.filter(r => r.category === selectType);
  const hash: { [K: string]: RecordItem[] } = {};
  selectedRecords.forEach(r => {
    const key = r.date;
    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key].push(r);
  });
  const array = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) return 0;
    if (a[0] > b[0]) return -1;
    if (a[0] < b[0]) return 1;
    return 0;
  });
  const dayTotal = (records: RecordItem[]) => {
    let total = 0
    records.forEach(t => {
      total += parseFloat(t.amount)})
    return total
  }
  const categoryTotal = ()=> {
    let total = 0
    array.forEach(item=> item[1].forEach(t=>{
      total+=parseFloat(t.amount)
    }))
    return total
  }
  const tagString = (tag: string[]) => {
    return tag.join('，');
  };

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
            <Icon name={selectType === '-'? 'countout':'countin'}/>
            <span>{categoryTotal()}</span>
          </div>
          <div className="showEchart">
            <Icon name="chart"/>
          </div>
        </li>
        {array.map(([date, records], key) => {
          return (
            <li className="recordsBox" key={key}>
              <h3>{BeautifulTitle(date)}<span>￥{dayTotal(records)}</span></h3>
              <ol>
                {records.map((r, key) =>
                  <li className="detailsList" key={key}>
                    <span className="tagSpan">{tagString(r.tags)}</span>
                    <span className="noteSpan">{r.note}</span>
                    <span className="amountSpan">￥{r.amount}</span>
                  </li>
                )}
              </ol>
            </li>
          );
        })}
      </MorneyList>
    </Layout>
  );
};
export default Statistics;