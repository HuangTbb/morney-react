import styled from 'styled-components';
import React from 'react';
import {useTags} from '../../hooks/useTags';

const TagsSection = styled.section`
  padding: 10px 0;
  color: #fff;
  flex-grow: 1;
  border-bottom: 1px solid rgba(51, 51, 51, 0.1);
  overflow: auto;
  flex-shrink: 1;
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
        background: #ffa115;
      }
    }
  }
`;

type Props = {
  value: string[];
  onChange: (selected: string[]) => void;
}
const Tags: React.FC<Props> = (props: Props) => {
  const {tags} = useTags()
  const selectedTags = props.value;
  const onToggleTag = (tag: string) => {
    const index = selectedTags.indexOf(tag)
    if(index>=0){
      props.onChange(selectedTags.filter(t => t !== tag))
    }else{
      props.onChange([...selectedTags, tag])
    }
  }
  return (
    <TagsSection>
      <ul>
        {tags.map(tag =>
          <li key={tag.id} onClick={()=>{onToggleTag(tag.name)}} className={selectedTags.indexOf(tag.name)>=0 ? 'selected' : ''}>{tag.name}</li>
        )}
      </ul>
    </TagsSection>
  )
}
export {Tags};