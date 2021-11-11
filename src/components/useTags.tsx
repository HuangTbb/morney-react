import {useState} from 'react';
import {CreateId} from 'lib/CreateId'

const useTags = () => {
  const [tags, setTags] = useState<{ id: number; name: string }[]>([
    {id:CreateId(), name:'衣'},
    {id:CreateId(), name:'食'},
    {id:CreateId(), name:'住'},
    {id:CreateId(), name:'行'}
  ]);
  return {tags, setTags};
};
export {useTags};