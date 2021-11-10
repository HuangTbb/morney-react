import Layout from '../components/Layout';
import React, {useState} from 'react';
import {useTags} from './useTags';
import Icon from '../components/Icons';
import styled from 'styled-components';
import {Link,useRouteMatch} from 'react-router-dom';
import {CreateTag} from '../components/CreateTag';

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
const Button = styled.button`
  background: #F4C738;
  width: 100px;
  height: 28px;
  line-height: 28px;
  border-radius: 14px;
  margin: 10px auto;
  color: #fff;
  display: block;
`
const Label = () => {
  const {tags, setTags} = useTags();
  const [visible, setVisible] = useState(false)
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
      <Button>新增标签</Button>
      {/*<CreateTag value={visible} onChange={trueOrFalse => setVisible(trueOrFalse)}/>*/}
    </Layout>
  );
};
export default Label;