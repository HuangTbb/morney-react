import styled from 'styled-components';
import React from 'react';
import {useTags} from '../../hooks/useTags';

const TagsSection = styled.section`
  flex-grow: 1;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  > ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    > li {
      height: 28px;
      line-height: 28px;
      border-radius: 12px;
      padding: 0 20px;
      margin: 10px;
      background: #ffffff;
      &.selected{
        background: #232428;
        color: #ffffff;
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