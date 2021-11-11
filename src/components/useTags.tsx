import {useState} from 'react';
import {CreateId} from 'lib/CreateId'

const defaultTags = [
  {id:CreateId(), name:'衣'},
  {id:CreateId(), name:'食'},
  {id:CreateId(), name:'住'},
  {id:CreateId(), name:'行'}
]
const useTags = () => {
  const [tags, setTags] = useState<{ id: number; name: string }[]>(defaultTags);
  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0]
  return {tags, setTags, findTag};
};
export {useTags};