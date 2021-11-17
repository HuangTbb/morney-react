import Layout from '../components/Layout';
import React, {useState} from 'react';
import Icon from '../components/Icons';
import {MorneyList, NoRecord, TypeTab} from './Statistics/StatisticsStyle';
import {categoryTotal, dayTotal, tagString , BeautifulTitle} from './Statistics/DataSorting';
import {Link} from 'react-router-dom'
import {ClassifyRecords} from './Statistics/ClassifyRecords';

const Statistics = () => {
  const categoryMap = {'-': '支出', '+': '收入'};
  type Keys = keyof typeof categoryMap
  const [types] = useState<Keys[]>(['-', '+']);
  const [selectType, setSelectType] = useState<Keys>('-');
  const array = ClassifyRecords(selectType)

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
            <span>{categoryTotal(array)}</span>
          </div>
          <div className="showEchart">
            <Link to={`/statistics/${selectType}`} >
              <Icon name="chart"/>
            </Link>
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
      <NoRecord visible={array.length > 0}/>
    </Layout>
  );
};
export {Statistics};