import React from 'react';
import styled from 'styled-components';
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}

type Props = {
  name: string
}
const Svg = styled.svg`
  width: 1.5em;
  height: 1.5em;
`
const Icon = (props: Props) => {
  return (
    <Svg className="icon">
      <use xlinkHref={'#' + props.name}/>
    </Svg>
  )
}

export  default Icon