import styled from 'styled-components';
import React, {useState} from 'react';

const TagsSection = styled.section`
  padding: 10px 0;
  color: #fff;
  flex-grow: 1;
  border-bottom: 1px solid rgba(51, 51, 51, 0.1);

  > ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    > li {
      height: 24px;
      line-height: 24px;
      border-radius: 12px;
      padding: 0 16px;
      margin: 10px;
      background: #518C9E;
      &.selected{
        background: #F4C738;
      }
    }
  }
`;
const Tags: React.FC = () => {
  const [tags] = useState<string[]>(['衣','食','住','行'])
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const onToggleTag = (tag: string) => {
    const index = selectedTags.indexOf(tag)
    if(index>=0){
      setSelectedTags(selectedTags.filter(t => t !== tag))
    }else{
      setSelectedTags([...selectedTags, tag])
    }
  }
  return (
    <TagsSection>
      <ul>
        {tags.map(tag =>
          <li key={tag} onClick={()=>{onToggleTag(tag)}} className={selectedTags.indexOf(tag)>=0 ? 'selected' : ''}>{tag}</li>
        )}
      </ul>
    </TagsSection>
  )
}
export {Tags};