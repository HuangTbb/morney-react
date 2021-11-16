import styled from 'styled-components';

const TypeTab = styled.ul`
  display: flex;
  justify-content: center;
  padding: 14px 0;
  border-bottom: 1px solid rgba(51, 51, 51, 0.1);
  font-size: 16px;

  > li {
    margin: 0 25px;
    padding: 0 4px;

    &.selected {
      font-weight: bolder;
      color: #518C9E;
      border-bottom: 3px solid #518C9E;
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
      color: #ffa115;

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
      color: #ffa115;
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
export {TypeTab,MorneyList};