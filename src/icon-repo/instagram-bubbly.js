export default {
  name: 'instagram-bubbly',
  viewBox: '0 0 50 50',
  fill: '#f4dcfc',
  shapes: [
    { 
      type:'path', 
      className: 'st0',
      d: 'M34,3H16C8.83,3,3,8.83,3,16v18c0,7.17,5.83,13,13,13h18c7.17,0,13-5.83,13-13V16C47,8.83,41.17,3,34,3z M25,36c-6.07,0-11-4.93-11-11s4.93-11,11-11s11,4.93,11,11S31.07,36,25,36z M37,15c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S38.1,15,37,15z',
    },
    { 
      type:'path', 
      className: 'st1',
      d: 'M34,25c0,4.96-4.04,9-9,9s-9-4.04-9-9s4.04-9,9-9S34,20.04,34,25z',
    },
  ],
  defs: {
    type: 'linearGradient',
    id: 'gradient1',
    x1: '0%',
    y1: '100%',
    x2: '0%',
    y2: '0%',
    stop: [
      {
        offset: '0%',
        'stop-color': '#fcecfc',
        'stop-opacity': 1
      },
      {
        offset: '50%',
        'stop-color': '#f4d4fc',
        'stop-opacity': 1
      },
      {
        offset: '100%',
        'stop-color': '#dcccf4',
        'stop-opacity': 1
      }
    ]
  },
  attrs: [
    {
      className: 'st0',
      fill: 'url(#gradient1)',
    },
    {
      className: 'st1',
      fill: '#f4ecfc',
    },
  ]
}
