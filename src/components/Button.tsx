import styled from 'styled-components';

const ButtonLabel = styled.button`
  background: #F4C738;
  width: 100px;
  height: 28px;
  line-height: 28px;
  border-radius: 14px;
  margin: 10px auto;
  color: #fff;
  display: block;
`
type Props = {
  name: string
}

const Button = (props: Props) => {
  return (
    <ButtonLabel>{props.name}</ButtonLabel>
  )
}
export {Button}