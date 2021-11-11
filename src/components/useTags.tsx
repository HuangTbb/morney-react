import {useState} from 'react';
import {CreateId} from 'lib/CreateId';

const defaultTags = [
  {id: CreateId(), name: '衣'},
  {id: CreateId(), name: '食'},
  {id: CreateId(), name: '住'},
  {id: CreateId(), name: '行'}
];
const useTags = () => {
  const [tags, setTags] = useState<{ id: number; name: string }[]>(defaultTags);
  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
  const findTagIndex = (id: number) => {
    let result = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        result = i;
        break;
      }
    }
    return result;
  };
  const updateTag = (id: number, {name}: { name: string }) => {
    setTags(tags.map(tag => tag.id === id? {id, name}:tag))
  };
  const deleteTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id))
  }
  return {tags, setTags, findTag, updateTag, findTagIndex,deleteTag};
};
export {useTags};