import styled from 'styled-components';

const ButtonLabel = styled.button`
  background: #ffa115;
  width: 100px;
  height: 28px;
  line-height: 28px;
  border-radius: 14px;
  margin: 10px auto;
  color: #fff;
  display: block;
`
type Props = {
  name: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = (props: Props) => {
  const {name,children, ...rest} = props
  return (
    <ButtonLabel {...rest}>{props.name}</ButtonLabel>
  )
}
export {Button}