import React from 'react'
import IconRepo from '../icon-repo'

const convertShape = (key, type, shape, fill) => {
  switch(type) {
    case 'path':
      return <path key={`path-${key}`} {...shape} fill={`${fill}`} />
    case 'rect':
      return <rect key={`rect-${key}`} {...shape} fill={`${fill}`} />
    case 'polygon':
      return <polygon key={`polygon-${key}`} fill={`${fill}`} {...shape} />
    case 'circle':
      return <circle key={`circle-${key}`} fill={`${fill}`} {...shape} />
    default:
      return null
  }
}

const convertDefs = (type, def) => {
  const { stop, ...rest } = def
  const stops = stop.map(s => <stop {...s} />)

  switch(type) {
    case 'linearGradient':
      return <linearGradient {...rest}>{stops}</linearGradient>
    // TD: add the other gradients
    default:
      null
  }
}

const getIconData = (name) => {
  const { viewBox, shapes, attrs, defs, ...rest } = IconRepo.find(i => i.name === name)

  const convertedShapes = shapes.map((shape, idx) => {

    const { fill } = shape.fill ? 
    shape.fill : 
    attrs ? attrs.find(attr => attr.className === shape.className) : 'currentColor'

    return convertShape(`${name}-${idx}`, shape.type, shape, fill)
  })

  const convertedDefs = defs ? <defs>{convertDefs(defs.type, defs)}</defs> : null

  return { viewBox, shapes: convertedShapes, defs: convertedDefs, ...rest }
  
}

export default getIconData