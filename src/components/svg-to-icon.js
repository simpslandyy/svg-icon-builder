import React from "react"
import getIcon from '../utilities/get-icon-data'

const SVGToIcon = ({ name, height = '7rem', width = '7rem', variant }) => {
  const { viewBox, shapes, defs, ...rest } = getIcon(name)

  return (
    <svg 
      height={height}
      viewBox={viewBox}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      { defs }
      { shapes }
    </svg>
  )

}

export default SVGToIcon