import styled from 'styled-components';
import {NavLink } from 'react-router-dom';
import React from 'react';
import Icon from './Icons';

const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);

  > ul {
    display: flex;

    > li {
      flex-grow: 1;
      text-align: center;
      padding: 4px 0 2px 0;
      font-size: 10px;
      > a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        > .icon {
          width: 24px;
          height: 24px;
        }
        &.selected{
          > .icon {
            
          }
        }
      }
      
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink  to="/tags" activeClassName="selected" replace>
            <Icon name="label"/>
            标签
          </NavLink >
        </li>
        <li>
          <NavLink  to="/money" activeClassName="selected" replace>
            <Icon name="money"/>
            记账
          </NavLink >
        </li>
        <li>
          <NavLink  to="/statistics" activeClassName="selected" replace>
            <Icon name="statistics"/>
            统计
          </NavLink >
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;
