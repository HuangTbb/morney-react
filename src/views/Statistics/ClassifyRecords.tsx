import {RecordItem, useRecords} from '../../hooks/useRecords';
const ClassifyRecords = (selectType: string) => {
  const {records} = useRecords();
  const selectedRecords = records.filter(r => r.category === selectType);
  const hash: { [K: string]: RecordItem[] } = {};
  selectedRecords.forEach(r => {
    const key = r.date;
    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key].push(r);
  });
  return Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) return 0;
    if (a[0] > b[0]) return -1;
    if (a[0] < b[0]) return 1;
    return 0;
  });
}

export {ClassifyRecords}