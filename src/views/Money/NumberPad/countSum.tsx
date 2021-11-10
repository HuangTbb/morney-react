import {containSign} from './containSign';

function countSum(output: string) {
  const eachNums = output.split(/[- |+|×|÷]/g);
  const signArray = output.split(/[\d.]+/);
  let sum = 0;
  let n = 0;
  signArray.map((x, index) => {
    if (containSign(x) < 0 || x === '') {
      signArray.splice(index, 1);
    }
  });
  for (let i = 0; i < eachNums.length; i++) {
    const num = parseFloat(eachNums[i]);
    if (isNaN(num)) { continue; }
    if (i === 0) {
      sum += num;
      continue;
    }
    if (signArray[n] === '+') {
      sum += num;
    } else if (signArray[n] === '-') {
      sum -= num;
    } else if (signArray[n] === '×') {
      sum *= num;
    } else if (signArray[n] === '÷') {
      sum /= num;
    }
    n += 1;
  }
  return (Math.floor(sum * 100) / 100).toString();
}
export {countSum}