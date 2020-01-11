const SCAFFOLDS = [
  {
    layerCollections: [
      {
        layerCollections: [
          {
            layerCollections: [
              { name: 'Hong Kong > Protesters > Units > Cars' },
              { name: 'Hong Kong > Protesters > Units > Medics' },
              { name: 'Hong Kong > Protesters > Units > Crowd Control' },
              { name: 'Hong Kong > Protesters > Units > Crowds' }
            ],
            name: 'Hong Kong > Protesters > Units'
          },
          {
            layerCollections: [
              { name: 'Hong Kong > Government > Facilities' },
              {
                name: 'Hong Kong > Government > Units',
                layerCollections: [
                  { name: 'Hong Kong > Government > Units > Cars' },
                  { name: 'Hong Kong > Government > Units > Buses' },
                  { name: 'Hong Kong > Government > Units > Medics' },
                  { name: 'Hong Kong > Government > Units > Crowd Control' }
                ]
              }
            ],
            name: 'Hong Kong > Government'
          }
        ],
        name: 'Hong Kong > Protesters'
      }
    ],
    name: 'Hong Kong'
  }
]

export default SCAFFOLDS
