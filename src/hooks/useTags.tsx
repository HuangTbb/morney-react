import {useEffect, useState} from 'react';
import {CreateId} from 'lib/CreateId';
import {useUpdate} from './UseUpdate';

const useTags = () => {
  const [tags, setTags] = useState<{ id: number; name: string }[]>([]);
  useEffect(()=>{
    let localTags = JSON.parse(window.localStorage.getItem('tags')|| '[]')
    if(localTags.length === 0){
      localTags = [
        {id: CreateId(), name: '衣'},
        {id: CreateId(), name: '食'},
        {id: CreateId(), name: '住'},
        {id: CreateId(), name: '行'}
      ]
    }
    setTags(localTags)
  },[])
  useUpdate(()=> {
    window.localStorage.setItem('tags', JSON.stringify(tags))
  }, tags)

  const findTag = (id: number) => {
    const tags: {id: number,name: string}[] = JSON.parse(window.localStorage.getItem("tags")|| '[]')
    return tags.filter(tag => tag.id === id)[0]};
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
  const addTag = (name: string) => {
    setTags([...tags,{id:CreateId(),name: name}])
  }

  return {tags, setTags, addTag, findTag, updateTag, findTagIndex,deleteTag};
};
export {useTags};