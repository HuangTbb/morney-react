import Layout from '../components/Layout';
import React, {useState} from 'react';
import {useTags} from '../hooks/useTags';
import Icon from '../components/Icons';
import styled from 'styled-components';
import {Link,useRouteMatch} from 'react-router-dom';
import {Button} from '../components/Button';
import {CreateTag} from 'components/CreateTag';

const TagList = styled.ol`
  padding: 0 14px;
  margin-top: 20px;
  margin-bottom: 50px;
  > li {
    padding: 15px 15px 15px 18px;
    margin-bottom: 10px;
    background: #ffffff;
    border-radius: 20px;
    > a {
      display: flex;
      justify-content: space-between;
      align-items: center;
      > .icon{
        width: 2.2em;
        height: 2.2em;
      }
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
export {Label};