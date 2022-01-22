import {GotoBack} from '../components/GotoBack';
import styled from 'styled-components';
import {useParams, Link} from 'react-router-dom';
import {ClassifyRecords} from './Statistics/ClassifyRecords';
import dayjs from 'dayjs';
import _ from 'lodash';
import * as echarts from 'echarts';
import {useEffect, useRef} from 'react';

const EchartWrapper = styled.div`
  .back {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 13px;
    > .fill {
      width: 70px;
      height: 70px;
    }
  }
  > .chartTitle {
    text-align: center;
    margin: 0 14px 10px 14px;
    background: #ffffff;
    border-radius: 20px;
    > p {
      padding: 10px;
    }
  }
  > .chartBox-wrapper{
    overflow: auto;
    > .chartBox {
      width: 440%;
      height: 400px; 
      background: #fff;
      margin-top: 15px;
      border-radius: 20px;
      overflow: auto;
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
  const chartWrapper = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const seriesList: number[] = [];
  let dateStringArray: string[] = [];
  const keyValueList = () => {
    const arrayList = [];
    for (let i = 0; i <= 29; i++) {
      const dateString = dayjs(new Date())
        .subtract(i, 'day')
        .format('YYYY-MM-DD');
      dateStringArray.unshift(dateString.substr(5,));
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
    return arrayList;
  };
  keyValueList().forEach(item => {
    seriesList.push(item.value);
  });
  const MoneySum = ()=>{
    let sum = 0
    seriesList.forEach(item => sum+=item)
    return sum
  }
  
  useEffect(() => {
    const chartDom = (container.current as HTMLDivElement);
    const chartWrapperDom = (chartWrapper.current as HTMLDivElement);
    type EChartOption = echarts.EChartsOption;
    const myChart = echarts.init(chartDom);
    let option: EChartOption;
    option = {
      color: ['#232428'],
      grid: {
        left: 16,
        right: 80,
        top: 80,
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
        axisLine: {
          show: false,
        },
        data: dateStringArray,
      },
      yAxis: {
        type: 'value',
        position: 'right',
        splitLine: {
          show: false,
        },
      },
      series: [
        {
          data: seriesList,
          type: "bar",
          showBackground: true,
          backgroundStyle: {
            color: "#efefef",
            borderRadius: [10, 10, 10, 10],
          },
          label: {
            position: "top",
            show: true,
            distance: 10,
            fontWeight: "bold",
          },
          itemStyle: {
            borderRadius: 10
          }
        },
      ],
    }
    option && myChart.setOption(option);
    chartWrapperDom.scrollLeft = chartDom.scrollWidth

    let divX: number = 0;
    chartDom.onmousedown=function(event){
      divX=event.clientX-chartDom.offsetLeft; 
      document.onmousemove=function(event){
        chartDom.style.left=event.clientX-divX+"px";
      }
      document.onmouseup=function(){
        document.onmousemove=null;
        document.onmouseup=null;
        return false;
      }
    }
  });
  return (
    <EchartWrapper>
      <div className='back'>
        <Link to="/statistics"><GotoBack/></Link>
        <span>近30天{type === '-' ? '支出' : '收入'}统计图</span>
        <div className="fill" />
      </div>
      <div className="chartTitle">
        <p>近30天总{type === '-' ? '支出' : '收入'}：{MoneySum()}元</p>
      </div>
      <div className="chartBox-wrapper" ref={chartWrapper}>
        <div className="chartBox" ref={container}/>
      </div>
    </EchartWrapper>
  );
};
export {Echart};