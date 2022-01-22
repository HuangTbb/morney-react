import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames'

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}

type Props = {
  name: string
} & React.SVGAttributes<SVGElement>
const Svg = styled.svg`
  width: 1.5em;
  height: 1.5em;
  vertical-align: -0.15em;
  overflow: hidden;
`
const Icon = (props: Props) => {
  const {name,children, className, ...rest} = props
  return (
    <Svg className={classnames('icon', className)} {...rest}>
      {props.name && <use xlinkHref={'#' + props.name}/>}
    </Svg>
  )
}

export default Icon