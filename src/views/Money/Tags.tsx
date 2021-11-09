import styled from 'styled-components';
import React from 'react';

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
    }
  }
`;
const Tags = () => {
  return (
    <TagsSection>
      <ul>
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
      </ul>
    </TagsSection>
  )
}
export default Tags;