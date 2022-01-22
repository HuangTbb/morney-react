import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Button} from '../components/Button';
import Icon from 'components/Icons';

const NoMatchDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > .icon{
    width: 25em;
    height: 25em;
  }
`;
const NoMatch = () => {
  return (
    <NoMatchDiv>
      <Icon name="404" />
      <Link to="/money">
        <Button name="返回首页"/>
      </Link>
    </NoMatchDiv>
  );
};

export {NoMatch};