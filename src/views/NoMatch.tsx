import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Button} from '../components/Button';

const NoMatchDiv = styled.div`
  text-align: center;
  margin-top: 100px;

  > h2 {
    padding-bottom: 20px;
  }
`;
const NoMatch = () => {
  return (
    <NoMatchDiv>
      <h2>当前路径不存在</h2>
      <Link to="/money">
        <Button name="返回首页"/>
      </Link>
    </NoMatchDiv>
  );
};

export default NoMatch;