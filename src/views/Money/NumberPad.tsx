import React, {useState} from 'react';
import NumberPadSection from './NumberPad/NumberPadSection';
import {countSum} from './NumberPad/countSum';
import {containSign} from './NumberPad/containSign';

const NumberPad: React.FC = () => {
  const [output, setOutput] = useState('0');
  const [outputSum, setOutputSum] = useState('0');

  function inputContent(event: React.MouseEvent) {
    const input = (event.target as HTMLButtonElement).textContent as string;
    const eachNum = output.split(/[- |+|×|÷]/g);

    if (output === '0') {
      if ('0123456789'.indexOf(input) >= 0) {
        setOutput(input);
        setOutputSum(input);
        return;
      } else if (containSign(input) >= 0) { return; }
    }
    if (output.substr(-1, 1) === '0'
      && containSign(output.substr(-2, 1)) >= 0
      && containSign(input) < 0) {
      setOutput(output.slice(0, -1) + input);
      return;
    }

    if (output.slice(-1) === '.') {
      if (containSign(input) >= 0) {
        setOutput(output.slice(0, -1) + input);
        return;
      }
    }

    if (output.indexOf('.') >= 0) {
      if (eachNum[eachNum.length - 1].indexOf('.') >= 0 && input === '.') { return;}
    }

    if (containSign(output.slice(-1)) >= 0) {
      if (containSign(input) >= 0) {
        return;
      } else if (input === '.') {
        setOutput(output + '0' + input);
        return;
      }
    }
    setOutput(output + input);
    setOutputSum(countSum(output + input));
  }

  function remove() {
    if (output.length === 1) {
      setOutput('0');
      setOutputSum('0');
    } else {
      setOutput(output.slice(0, -1));
      setOutputSum(countSum(output.slice(0, -1)));
    }
  }

  function clear() {
    setOutput('0');
    setOutputSum('0');
  }

  function ok() {
    // TODO
  }

  return (
    <NumberPadSection>
      <div className="outputSum">{outputSum}</div>
      <div className="output">{output}</div>
      <div className="pad clearfix">
        <button onClick={inputContent}>1</button>
        <button onClick={inputContent}>2</button>
        <button onClick={inputContent}>3</button>
        <button onClick={inputContent}>+</button>
        <button onClick={remove}>删除</button>
        <button onClick={inputContent}>4</button>
        <button onClick={inputContent}>5</button>
        <button onClick={inputContent}>6</button>
        <button onClick={inputContent}>-</button>
        <button onClick={clear}>清空</button>
        <button onClick={inputContent}>7</button>
        <button onClick={inputContent}>8</button>
        <button onClick={inputContent}>9</button>
        <button onClick={inputContent}>×</button>
        <button onClick={ok} className="ok">确定</button>
        <button onClick={inputContent} className="zero">0</button>
        <button onClick={inputContent}>.</button>
        <button onClick={inputContent}>÷</button>
      </div>
    </NumberPadSection>
  );
};
export {NumberPad};