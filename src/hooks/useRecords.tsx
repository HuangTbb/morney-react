import {useEffect, useState} from 'react';
import {useUpdate} from './UseUpdate';
type RecordItem = {
  tagIds: number[];
  note: string;
  date: string;
  category: '+' | '-';
  amount: string;
}
export const useRecords = () => {
  const [records,setRecords] = useState<RecordItem[]>([])
  useEffect(()=> {
    setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'))
  },[])
  useUpdate(() => {
    window.localStorage.setItem('records', JSON.stringify(records))
  }, [records])
  const addRecord = (record: RecordItem) => {
    setRecords([...records, record])
    return true
  }
  return {records, addRecord}
}