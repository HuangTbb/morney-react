import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Button} from '../components/Button';

const NoMatchDiv = styled.div`
  text-align: center;
  margin-top: 100px;
  color: #8a8a8a;
  > h1 {
    font-size: 50px;
  }
  > h3 {
    padding-bottom: 35px;
  }
  > a{
    > button{
      background: #8a8a8a;
      color: #fff;
    }
  }
`;
const NoMatch = () => {
  return (
    <NoMatchDiv>
      <h1>404</h1>
      <h3>当前路径不存在</h3>
      <Link to="/money">
        <Button name="返回首页"/>
      </Link>
    </NoMatchDiv>
  );
};

export {NoMatch};