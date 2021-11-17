import {RecordItem} from '../../hooks/useRecords';
import dayjs from 'dayjs';

const dayTotal = (records: RecordItem[]) => {
  let total = 0
  records.forEach(t => {
    total += parseFloat(t.amount)})
  return total
}
const categoryTotal = (array: [string, RecordItem[]][])=> {
  let total = 0
  array.forEach(item=> item[1].forEach(t=>{
    total+=parseFloat(t.amount)
  }))
  return total
}
const tagString = (tag: string[]) => {
  return tag.join('，');
};
const BeautifulTitle = (title: string) => {
  const day = dayjs(title);
  const now = dayjs();
  if (day.isSame(now, 'day')) {
    return '今天';
  } else if (day.isSame(now.subtract(1, 'day'), 'day')) {
    return '昨天';
  } else if (day.isSame(now.subtract(2, 'day'), 'day')) {
    return '前天';
  } else if (day.isSame(now, 'year')) {
    return day.format('M-D');
  } else {
    return day.format('YYYY-M-D');
  }
}
export {dayTotal,categoryTotal,tagString,BeautifulTitle}