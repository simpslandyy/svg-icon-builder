import React from 'react'
import SVGToIcon from '../components/svg-to-icon'
import * as ReactDOMServer from 'react-dom/server'

const getIconSVGLink = (name) => {
  const icon = <SVGToIcon width="500px" height="500px" name={name} />
  const svgString = encodeURIComponent(ReactDOMServer.renderToStaticMarkup(icon))

  return `data:image/svg+xml;utf8,${svgString}`
}

export default getIconSVGLink