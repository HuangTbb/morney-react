import {useEffect, useState} from 'react';
import {useUpdate} from './UseUpdate';
export type RecordItem = {
  tags: string[];
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