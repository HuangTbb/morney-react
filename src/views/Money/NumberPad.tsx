import React, {useEffect, useState} from 'react';
import NumberPadSection from './NumberPad/NumberPadSections';
import {countSum} from './NumberPad/countSum';
import {containSign} from './NumberPad/containSign';
import Icon from 'components/Icons';

type Props = {
  value: string,
  onChange: (value: string) => void
  onOk : () => void;
}

const NumberPad: React.FC<Props> = (props:Props) => {
  const [output, setOutput] = useState('0');
  const outputSum = props.value
  function inputContent(event: React.MouseEvent) {
    const input = (event.target as HTMLButtonElement).textContent as string;
    const eachNum = output.split(/[- |+|×|÷]/g);
    if (output === '0') {
      if ('0123456789'.indexOf(input) >= 0) {
        setOutput(input);
        props.onChange(input);
        return;
      } else if (containSign(input) >= 0) { return; }
    }
    if (output.substr(-1, 1) === '0'
      && containSign(output.substr(-2, 1)) >= 0
      && containSign(input) < 0) {
      setOutput(output.slice(0, -1) + input);
      return;
    }
    if (output.slice(-1) === '.' && containSign(input) >= 0) {
      setOutput(output.slice(0, -1) + input);
      return;
    }
    if (output.indexOf('.') >= 0 && eachNum[eachNum.length - 1].indexOf('.') >= 0 && input === '.') {return;}
    if (containSign(output.slice(-1)) >= 0) {
      if (containSign(input) >= 0) {
        return;
      } else if (input === '.') {
        setOutput(output + '0' + input);
        return;
      }
    }
    setOutput(output + input);
    props.onChange(countSum(output + input));
  }

  function remove() {
    if (output.length === 1) {
      setOutput('0');
      props.onChange('0');
    } else {
      setOutput(output.slice(0, -1));
      props.onChange(countSum(output.slice(0, -1)));
    }
  }

  function clear() {
    setOutput('0');
    props.onChange('0');
  }
  useEffect(()=> {
    return ()=>{
      const ok: HTMLElement | null = document.querySelector(".ok");
      if (ok) {
        ok.style.height =
          (120 + parseInt(getComputedStyle(ok).marginTop.split("px")[0]) * 2).toString() + 'px';
      }
    }
  })
  return (
    <NumberPadSection>
      <div className="resultBox">
        <div className="outputSum">￥{outputSum}</div>
        <div className="output">{output}</div>
      </div>
      <div className="pad clearfix">
        <button onClick={inputContent}>1</button>
        <button onClick={inputContent}>2</button>
        <button onClick={inputContent}>3</button>
        <button onClick={inputContent}>+</button>
        <button onClick={remove} className="remove"><Icon name="clear"/></button>
        <button onClick={inputContent}>4</button>
        <button onClick={inputContent}>5</button>
        <button onClick={inputContent}>6</button>
        <button onClick={inputContent}>-</button>
        <button onClick={clear} className="clear">C</button>
        <button onClick={inputContent}>7</button>
        <button onClick={inputContent}>8</button>
        <button onClick={inputContent}>9</button>
        <button onClick={inputContent}>×</button>
        <button onClick={props.onOk} className="ok">OK</button>
        <button onClick={inputContent} className="zero">0</button>
        <button onClick={inputContent}>.</button>
        <button onClick={inputContent}>÷</button>
      </div>
    </NumberPadSection>
  );
};
export {NumberPad};