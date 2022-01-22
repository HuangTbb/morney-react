import styled from 'styled-components';

const NumberPadSection = styled.section`
  > .resultBox{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    > .outputSum {
      padding: 0 14px;
      font-size: 20px;
    }
    > .output {
      padding: 0 14px;
      font-size: 28px;
      word-break: break-all;
      flex-grow: 1;
      text-align: right;
    }
  }
  > .pad {
    padding: 2px;
    > button {
      font-size: 20px;
      width: 18%;
      height: 60px;
      background: #f4f0ef;
      float: left;
      border-radius: 30px;
      margin: 1%;
      box-shadow: -2px -2px 5px rgba(0,0,0,0.1);
      &.ok {
        height: 120px;
        float: right;
      }
      &.zero {
        width: 38%;
      }
    }
  }
`;
export default NumberPadSection;