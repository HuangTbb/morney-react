import Layout from '../components/Layout';
import React, {useState} from 'react';
import {useTags} from '../hooks/useTags';
import Icon from '../components/Icons';
import styled from 'styled-components';
import {Link,useRouteMatch} from 'react-router-dom';
import {Button} from '../components/Button';
import {CreateTag} from 'components/CreateTag';

const TagList = styled.ol`
  padding:0 0 16px 16px;
  margin: 14px 0;

  > li {
    padding: 4px 10px 4px 0;
    border-bottom: 1px solid rgba(51, 51, 51, 0.1);
    > a {
      padding: 8px 6px 8px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

const Label = () => {
  const {tags,addTag} = useTags();
  const match = useRouteMatch();
  const [visible,setVisible] = useState(false)
  return (
    <Layout>
      <TagList>
        {tags.map(tag => (
          <li key={tag.id}>
            <Link to={`${match.url}/${tag.id}`}>
              <span className="oneLine">{tag.name}</span>
              <Icon name="detail"/>
            </Link>
          </li>
        ))}
      </TagList>
      <Button name="新增标签" onClick={()=>setVisible(true)}/>
     <CreateTag value={visible}
                onChange={visible => setVisible(visible)}
                tagList={tags}
                onChangeTagList={newtag => addTag(newtag)}/>
    </Layout>
  )
}
export default Label;