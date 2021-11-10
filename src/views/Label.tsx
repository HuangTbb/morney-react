import Layout from '../components/Layout';
import React from 'react';
import {useTags} from './useTags';
import Icon from '../components/Icons';
import styled from 'styled-components';
import {Link,useRouteMatch} from 'react-router-dom';
import {Button} from '../components/Button';

const TagList = styled.ol`
  padding:0 0 16px 16px;
  margin: 14px 0;

  > li {
    border-bottom: 1px solid rgba(51, 51, 51, 0.1);
    > a {
      padding: 8px 6px 8px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .icon {
        width: 2.2em;
        height: 2.2em;
        color: #666;
      }
    }
    
  }
`;

const Label = () => {
  const {tags} = useTags();
  const match = useRouteMatch();
  return (
    <Layout>
      <TagList>
        {tags.map(tag => (
          <li key={tag.id}>
            <Link to={`${match.url}/${tag.name}`}>
              <span className="oneLine">{tag.name}</span>
              <Icon name="detail"/>
            </Link>
          </li>
        ))}
      </TagList>
      <Button name="新增标签" />
      {/*<CreateTag value={visible} onChange={trueOrFalse => setVisible(trueOrFalse)}/>*/}
    </Layout>
  );
};
export default Label;