import styled from 'styled-components';

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
export default NumberPadSection;