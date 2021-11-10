import styled from 'styled-components';
import React, {useState} from 'react';
import {useTags} from '../useTags';

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

type Props = {
  value: number[];
  onChange: (selected: number[]) => void;
}
const Tags: React.FC<Props> = (props: Props) => {
  const {tags} = useTags()
  const selectedTagIds = props.value;
  const onToggleTag = (tagId: number) => {
    const index = selectedTagIds.indexOf(tagId)
    if(index>=0){
      props.onChange(selectedTagIds.filter(t => t !== tagId))
    }else{
      props.onChange([...selectedTagIds, tagId])
    }
  }
  return (
    <TagsSection>
      <ul>
        {tags.map(tag =>
          <li key={tag.id} onClick={()=>{onToggleTag(tag.id)}} className={selectedTagIds.indexOf(tag.id)>=0 ? 'selected' : ''}>{tag.name}</li>
        )}
      </ul>
    </TagsSection>
  )
}
export {Tags};