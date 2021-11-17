import {GotoBack} from '../components/GotoBack';
import styled from 'styled-components';
import {useParams, Link} from 'react-router-dom';
import {ClassifyRecords} from './Statistics/ClassifyRecords';
import dayjs from 'dayjs';
import _ from 'lodash';
import * as echarts from 'echarts';
import {useEffect, useRef} from 'react';

const EchartWrapper = styled.div`
  > .chartTitle {
    text-align: center;
    margin-bottom: 10px;
    font-size: 16px;

    > p {
      padding-top: 20px;
      font-weight: bold;
      color: #518C9E;
    }
  }
  > .chartBox-wrapper{
    overflow: auto;
    > .chartBox {
      width: 440%;
      height: 400px;
    }
    &::-webkit-scrollbar {
      display: none;
    }
  }
  
`;
type Params = {
  type: string
}
const Echart = () => {
  const {type} = useParams<Params>();
  const array = ClassifyRecords(type);
  let dateStringArray: string[] = [];
  const keyValueList = () => {
    const arrayList = [];
    for (let i = 0; i <= 29; i++) {
      const dateString = dayjs(new Date())
        .subtract(i, 'day')
        .format('YYYY-MM-DD');
      dateStringArray.push(dateString.substr(5,));
      const found = _.find(array,
        function (i) {return i[0] === dateString;}
      );
      let total = 0;
      if (found) {
        found[1].map(item => {return total += parseFloat(item.amount);});
      }
      arrayList.push({key: dateString, value: found ? total : 0});
    }

    arrayList.sort((a, b) => {
      if (a.key > b.key) {
        return 1;
      } else if (a.key === b.key) {
        return 0;
      } else {
        return -1;
      }
    });
    console.log(arrayList);
    return arrayList;
  };
  const seriesList: number[] = [];
  keyValueList().map(item => {
    seriesList.push(item.value);
  });

  const chartWrapper = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const chartDom = (container.current as HTMLDivElement);
    const chartWrapperDom = (chartWrapper.current as HTMLDivElement);

    type EChartOption = echarts.EChartsOption
    const myChart = echarts.init(chartDom);
    let option: EChartOption;
    option = {
      color: ['#ffa115'],
      grid: {
        left: 16,
        right: 80,
        top: 50,
      },
      tooltip: {
        trigger: 'item',
        position: 'top',
      },
      xAxis: {
        type: 'category',
        axisTick: {
          alignWithLabel: true,
          inside: true,
        },
        data: dateStringArray,
      },
      yAxis: {
        type: 'value',
        position: 'right',
      },
      series: [
        {
          data: seriesList,
          type: 'line',
          symbolSize: 16,
          colorBy: 'data',
          symbol: 'circle',
          lineStyle: {
            color: '#518C9E',
          },
        },
      ],
    }
    option && myChart.setOption(option);
    chartWrapperDom.scrollLeft = chartDom.scrollWidth
  });
  return (
    <EchartWrapper>
      <Link to="/statistics">
        <GotoBack/>
      </Link>
      <div className="chartTitle">
        <h3>近30天{type === '-' ? '支出' : '收入'}统计图表</h3>
        <p>30天总{type === '-' ? '支出' : '收入'}元</p>
      </div>
      <div className="chartBox-wrapper" ref={chartWrapper}>
        <div className="chartBox" ref={container}/>
      </div>
    </EchartWrapper>
  );
};
export {Echart};