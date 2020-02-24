const SCAFFOLDS = [
  {
    layerCollections: [
      {
        layerCollections: [
          {
            layerCollections: [
              { name: 'Cars' },
              { name: 'Medics' },
              { name: 'Crowd Control' },
              { name: 'Crowds' }
            ],
            name: 'Units'
          }
        ],
        name: 'Protesters'
      },
      {
        layerCollections: [
          {
            name: 'Units',
            layerCollections: [
              { name: 'Cars' },
              { name: 'Buses' },
              { name: 'Medics' },
              { name: 'Crowd Control' }
            ]
          },
          { name: 'Facilities' }
        ],
        name: 'Government'
      }
    ],
    name: 'Hong Kong'
  }
]

export default SCAFFOLDS
