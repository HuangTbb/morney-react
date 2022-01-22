import styled from 'styled-components';

const ButtonLabel = styled.button`
  background: #232428;
  padding: 12px 50px;
  border-radius: 20px;
  margin: 10px auto 60px auto;
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