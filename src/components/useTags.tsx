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
  return {tags, setTags};
};
export {useTags};