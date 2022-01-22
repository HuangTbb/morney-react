import styled from 'styled-components';
import {NavLink } from 'react-router-dom';
import React, {useEffect, useRef, useState} from 'react';
import Icon from './Icons';

const NavWrapper = styled.nav`
  background: #ffffff;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding-top: 5px;
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
        padding: 4px 0 2px 0;
        color: #a6a7ac;
        > .icon {
          width: 2em;
          height: 2em;
          fill: currentColor;
        }
        > p {
          padding-top: 2px;
        }
        &.selected{
          color: #232428;
          > .icon{
            fill: currentColor;
          }
        }
      }
      
    }
  }
`;

const Nav = () => {
  const navLink = useRef<HTMLAnchorElement>(null)
  const navLink1 = useRef<HTMLAnchorElement>(null)
  const navLink2 = useRef<HTMLAnchorElement>(null)
  // eslint-disable-next-line
  const [iconName, setIconName] = useState("")
  useEffect(()=> {
      if(navLink.current!.className === 'selected'){
        setIconName('label')
      }else if(navLink1.current!.className === 'selected'){
        setIconName('money')
      }else if(navLink2.current!.className === 'selected'){
        setIconName('statistics')
      }
  },[])
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink  to="/tags" activeClassName="selected" replace ref={navLink}>
            <Icon name='label'/>
            <p>标签</p>
          </NavLink >
        </li>
        <li>
          <NavLink  to="/money" activeClassName="selected" replace ref={navLink1}>
            <Icon name='money'/>
            <p>记账</p>
          </NavLink >
        </li>
        <li>
          <NavLink  to="/statistics" activeClassName="selected" replace ref={navLink2}>
            <Icon name='statistics'/>
            <p>统计</p>
          </NavLink >
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;
