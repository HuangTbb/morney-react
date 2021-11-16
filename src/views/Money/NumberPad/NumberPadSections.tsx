import styled from 'styled-components';

const NumberPadSection = styled.section`
  > .outputSum {
    padding: 6px 14px;
    font-size: 18px;
    text-align: right;
  }

  > .output {
    padding: 0 14px 6px;
    font-size: 24px;
    word-break: break-all;
    text-align: right;
  }

  > .pad {
    padding: 2px;
    background: rgba(51, 51, 51, 0.1);

    > button {
      font-size: 20px;
      width: 20%;
      height: 56px;
      background: #fff;
      float: left;
      border: 2px solid rgba(51, 51, 51, 0.1);
      border-radius: 10px;

      &.ok {
        height: 112px;
        float: right;
      }

      &.zero {
        width: 40%;
      }
      &.ok, &.clear, &.remove{
        font-size: 16px;
      }
    }
  }
`;
export default NumberPadSection;