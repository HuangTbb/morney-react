import styled from 'styled-components';
import {NavLink } from 'react-router-dom';
import React, {useEffect, useRef, useState} from 'react';
import Icon from './Icons';

const NavWrapper = styled.nav`
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
  > ul {
    display: flex;
    > li {
      flex-grow: 1;
      text-align: center;
      padding: 4px 0 2px 0;
      font-size: 12px;
      > a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2px 0;
        > .icon {
          width: 22px;
          height: 22px;
        }
        > p {
          padding-top: 2px;
        }
        &.selected{
          color: #ffa115;
        }
      }
      
    }
  }
`;

const Nav = () => {
  const navLink = useRef<HTMLAnchorElement>(null)
  const navLink1 = useRef<HTMLAnchorElement>(null)
  const navLink2 = useRef<HTMLAnchorElement>(null)
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
            <Icon name={iconName==='label'?iconName:'labelblur'}/>
            <p>标签</p>
          </NavLink >
        </li>
        <li>
          <NavLink  to="/money" activeClassName="selected" replace ref={navLink1}>
            <Icon name={iconName==='money'?iconName:'moneyblur'}/>
            <p>记账</p>
          </NavLink >
        </li>
        <li>
          <NavLink  to="/statistics" activeClassName="selected" replace ref={navLink2}>
            <Icon name={iconName==='statistics'?iconName:'statisticsblur'}/>
            <p>统计</p>
          </NavLink >
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;
