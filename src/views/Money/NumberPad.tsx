import styled from 'styled-components';
import React from 'react';

const NumberPadSection = styled.section`
  > .outputSum {
    padding: 8px 14px;
    font-size: 18px;
    text-align: right;
  }

  > .output {
    padding: 8px 14px;
    font-size: 24px;
    word-break: break-all;
    text-align: right;
  }

  > .pad {
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

      &.ok {
        height: 120px;
        float: right;
      }

      &.zero {
        width: 40%;
      }
    }
  }
`;
const NumberPad = () => {
  return (
    <NumberPadSection>
      <div className="outputSum">0</div>
      <div className="output">0</div>
      <div className="pad clearfix">
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
  )
}
export default NumberPad;