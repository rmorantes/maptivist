const MOCK_FEATURES = [
  {
    geometry: {
      coordinates: [114.167412, 22.278395],
      type: 'Point'
    },
    properties: {
      label: 'Hong Kong Police Headquarters'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.171364, 22.302669],
      type: 'Point'
    },
    properties: {
      label: 'Yau Tsim District Police Headquarters and Tsim Sha Tsui Police Station'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.196526, 22.339690],
      type: 'Point'
    },
    properties: {
      label: 'Wong Tai Sin District Headquarters and Wong Tai Sin Police Station'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.209088, 22.292068],
      type: 'Point'
    },
    properties: {
      label: 'Eastern District Police Headquarters and North Point Police Station'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [113.942321, 22.284678],
      type: 'Point'
    },
    properties: {
      label: 'Lantau District Police Headquarters and Lantau North Police Station'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.231317, 22.309654],
      type: 'Point'
    },
    properties: {
      label: 'Kwun Tong District Police Headquartets'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.163911, 22.242796],
      type: 'Point'
    },
    properties: {
      label: 'Marine Police Port District Headquarters & Marine Police South Police Station'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.173208, 22.451744],
      type: 'Point'
    },
    properties: {
      label: 'New Territories North Regional Police Headquarters'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.169026, 22.324340],
      type: 'Point'
    },
    properties: {
      label: 'Mongkok Police Station'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.165699, 22.310271],
      type: 'Point'
    },
    properties: {
      label: 'Yaumatei Police Station'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.158937, 22.330202],
      type: 'Point'
    },
    properties: {
      label: 'Sham Shui Po Police Station'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.212023, 22.320591],
      type: 'Point'
    },
    properties: {
      label: 'Ngau Tau Kok Division'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.235560, 22.268388],
      type: 'Point'
    },
    properties: {
      label: 'Chai Wan Police Station'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.187000, 22.267076],
      type: 'Point'
    },
    properties: {
      label: 'Happy Valley Police Station'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.155206, 22.264302],
      type: 'Point'
    },
    properties: {
      label: 'Peak Police Station'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.161406, 22.248243],
      type: 'Point'
    },
    properties: {
      label: 'Aberdeen Police Station'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.149409, 22.288774],
      type: 'Point'
    },
    properties: {
      label: 'Central Police Station'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.140536, 22.287662],
      type: 'Point'
    },
    properties: {
      label: 'Western Police Station'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.129664, 22.356967],
      type: 'Point'
    },
    properties: {
      label: 'Kwai Chung Station'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [113.999531, 22.264983],
      type: 'Point'
    },
    properties: {
      label: 'Lantau South (Mui Wo) Police Station'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.030623, 22.208160],
      type: 'Point'
    },
    properties: {
      label: 'Cheung Chau Police Station'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [113.932249, 22.302570],
      type: 'Point'
    },
    properties: {
      label: 'Airport Police Station'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.141808, 22.324554],
      type: 'Point'
    },
    properties: {
      label: 'Marine Police Small Boat Police Station'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.107560, 22.351257],
      type: 'Point'
    },
    properties: {
      label: 'Kwai Tsing Police HQ and Tsing Yi Police Station'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.110241, 22.376898],
      type: 'Point'
    },
    properties: {
      label: 'Tsuen Wan Police Station'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.011808, 22.362790],
      type: 'Point'
    },
    properties: {
      label: 'Marine Police West Police Station'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.011548, 22.363379],
      type: 'Point'
    },
    properties: {
      label: 'Marine Police Tai Lam Station'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [113.966939, 22.375797],
      type: 'Point'
    },
    properties: {
      label: 'Castle Peak Police Station'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [113.971889, 22.394855],
      type: 'Point'
    },
    properties: {
      label: 'Tuen Mun Police Station'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.022985, 22.443894],
      type: 'Point'
    },
    properties: {
      label: 'Yuen Long Police Station'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.089375, 22.441262],
      type: 'Point'
    },
    properties: {
      label: 'Pat Heung Police Station'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.080302, 22.511498],
      type: 'Point'
    },
    properties: {
      label: 'Lok Ma Chau Police Station'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.173171, 22.452228],
      type: 'Point'
    },
    properties: {
      label: 'Tai Po Police Station'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.141383, 22.495106],
      type: 'Point'
    },
    properties: {
      label: 'Sheung Shui Police Station'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.130283, 22.539557],
      type: 'Point'
    },
    properties: {
      label: 'Luohu Bus Police Station'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.148738, 22.540872],
      type: 'Point'
    },
    properties: {
      label: 'Ta Kwu Ling Police Station'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.161126, 22.557745],
      type: 'Point'
    },
    properties: {
      label: 'Liantang Police Station'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.211166, 22.537521],
      type: 'Point'
    },
    properties: {
      label: 'Sha Tau Kok Police Station'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.002311, 22.449886],
      type: 'Point'
    },
    properties: {
      label: 'Tin Shui Wai Police Station'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.175521, 22.366062],
      type: 'Point'
    },
    properties: {
      label: 'Tin Sum Police Station'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.192507, 22.386973],
      type: 'Point'
    },
    properties: {
      label: 'Sha Tin Police Station'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.233060, 22.422263],
      type: 'Point'
    },
    properties: {
      label: 'Ma On Shan Police Station'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.272214, 22.383706],
      type: 'Point'
    },
    properties: {
      label: 'Sai Kung Police Station'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.274418, 22.375442],
      type: 'Point'
    },
    properties: {
      label: 'Marine Police East Police Station'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.259557, 22.323117],
      type: 'Point'
    },
    properties: {
      label: 'Kowloon East Regional Police Headquarters and Tseung Kwan O Police Station'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.208088, 22.325692],
      type: 'Point'
    },
    properties: {
      label: 'Hong Kong Auxiliary Police Headquarters'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.225667, 22.285419],
      type: 'Point'
    },
    properties: {
      label: 'Marine Police Regional Headquarters'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.177684, 22.315331],
      type: 'Point'
    },
    properties: {
      label: 'Hung Hom Police Station'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.185315, 22.324378],
      type: 'Point'
    },
    properties: {
      label: 'Kowloon City Police Station'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.183294, 22.323592],
      type: 'Point'
    },
    properties: {
      label: 'Kowloon West Regional Police Headquarters'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.169520, 22.333657],
      type: 'Point'
    },
    properties: {
      label: 'Shek Kip Mei Reporting Centre and Police Tactical Unit Kowloon West Operational Base'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.165650, 22.310356],
      type: 'Point'
    },
    properties: {
      label: 'Hong Kong Police Force Yau Ma Tei Divisional Station'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.136616, 22.375385],
      type: 'Point'
    },
    properties: {
      label: 'Hong Kong Police Force Detective Training Centre'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.146549, 22.335526],
      type: 'Point'
    },
    properties: {
      label: 'Cheung Sha Wan Police Station'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.213300, 22.218736],
      type: 'Point'
    },
    properties: {
      label: 'Stanley Police Station'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.040612, 22.316960],
      type: 'Point'
    },
    properties: {
      label: 'Penny\'s Bay Police Post'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.038598, 22.284335],
      type: 'Point'
    },
    properties: {
      label: 'Ping Chau Police Post'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.017181, 22.296565],
      type: 'Point'
    },
    properties: {
      label: 'Discovery Bay Police Post'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.110302, 22.224584],
      type: 'Point'
    },
    properties: {
      label: 'Lamma Island Police Post'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.131553, 22.205481],
      type: 'Point'
    },
    properties: {
      label: 'Sok Kwu Wan Police Post'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [113.902469, 22.255756],
      type: 'Point'
    },
    properties: {
      label: 'Ngong Ping Police Post'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.098492, 22.524621],
      type: 'Point'
    },
    properties: {
      label: 'Ma Tso Lung Police Post'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.119559, 22.533049],
      type: 'Point'
    },
    properties: {
      label: 'Nam Hang Police Post'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.125431, 22.539056],
      type: 'Point'
    },
    properties: {
      label: 'Man Kam to Bridge Police Post'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.134747, 22.541061],
      type: 'Point'
    },
    properties: {
      label: 'Muk Wu Police Post'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.148759, 22.543859],
      type: 'Point'
    },
    properties: {
      label: 'Law Fong Bridge Police Post'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.171234, 22.558049],
      type: 'Point'
    },
    properties: {
      label: 'Wang Lek Police Post'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.187412, 22.552530],
      type: 'Point'
    },
    properties: {
      label: 'Kong Shan Police Post'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.225379, 22.545938],
      type: 'Point'
    },
    properties: {
      label: 'Chung Ying Street Police Post'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.225813, 22.544633],
      type: 'Point'
    },
    properties: {
      label: 'San Lau Street Police Post'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.065560, 22.440090],
      type: 'Point'
    },
    properties: {
      label: 'Kam Tin Police Post'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.010714, 22.486074],
      type: 'Point'
    },
    properties: {
      label: 'Tsim Bei Tsui Police Post'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.217146, 22.357264],
      type: 'Point'
    },
    properties: {
      label: 'Tate\'s Cairn Police Post'
    },
    type: 'Feature'
  }
]

export default MOCK_FEATURES
