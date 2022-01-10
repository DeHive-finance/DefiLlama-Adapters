module.exports = {
  'ethereum': [
    {
      // DHV
      meta: {
        stakingAddress: '0x04595f9010F79422a9b411ef963e4dd1F7107704',
        tokenAddress: '0x62Dc4817588d53a056cBbD18231d91ffCcd34b2A',
        poolId: 0,
      },
      tvl: "stakingTvl"
    },
    {
      // DHV/WETH
      meta: {
        stakingAddress: '0x4964B3B599B82C3FdDC56e3A9Ffd77d48c6AF0f0',
        lpAddress: '0x60c5BF43140d6341bebFE13293567FafBe01D65b',
        underlying: [
          '0x62Dc4817588d53a056cBbD18231d91ffCcd34b2A',
          '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
        ],
        poolId: 0
      },
      tvl: "lpStakingTvl"
    },
    {
      // DECR
      meta: {
        clusterAddress: '0x6Bc3F65Fc50E49060e21eD6996be96ee4B404752',
      },
      tvl: "clusterTvl"
    },
  ],
  'polygon': [
    {
      // DHV
      meta: {
        stakingAddress: '0x88cFC1bc9aEb80f6C8f5d310d6C3761c2a646Df7',
        tokenAddress: '0x5fCB9de282Af6122ce3518CDe28B7089c9F97b26',
        poolId: 0,
      },
      tvl: "stakingTvl"
    },
    {
      // DPOL
      meta: {
        clusterAddress: '0x4964B3B599B82C3FdDC56e3A9Ffd77d48c6AF0f0',
      },
      tvl: "clusterTvl"
    },
    {
      // DGAME
      meta: {
        clusterAddress: '0x589Ea336092184d9eD74b8263c4eecA73Ed0cE7a',
      },
      tvl: "clusterTvl"
    },
    {
      // CRV
      meta: {
        stakingAddress: '0xE6E6982fb5dDF4fcc74cCCe4e4eea774E002D17F',
        strategyAddress: '0x849b2f194875Af260C0f9dA4e6E0a8d7Ce90388D',
        lpAddress: '0xdad97f7713ae9437fa9249920ec8507e5fbb23d3',
        poolId: 0
      },
      tvl: "crvStakingTvl"
    },
    {
      // WETH/DAI
      meta: {
        stakingAddress: '0xf4feb23531EdBe471a4493D432f8BB29Bf0A3868',
        lpAddress: '0x4A35582a710E1F4b2030A3F826DA20BfB6703C09',
        underlying: [
          '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
          '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063'
        ],
        poolId: 1
      },
      tvl: "lpStakingTvl"
    },
    {
      // USDC/Quick
      meta: {
        stakingAddress: '0xf4feb23531EdBe471a4493D432f8BB29Bf0A3868',
        lpAddress: '0x1F1E4c845183EF6d50E9609F16f6f9cAE43BC9Cb',
        underlying: [
          '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
          '0x831753DD7087CaC61aB5644b308642cc1c33Dc13'
        ],
        poolId: 2
      },
      tvl: "lpStakingTvl"
    },
    {
      // USDC/Matic
      meta: {
        stakingAddress: '0xf4feb23531EdBe471a4493D432f8BB29Bf0A3868',
        lpAddress: '0x6e7a5FAFcec6BB1e78bAE2A1F0B612012BF14827',
        underlying: [
          '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
          '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270'
        ],
        poolId: 3
      },
      tvl: "lpStakingTvl"
    },
    {
      // USDT/MAI
      meta: {
        stakingAddress: '0xf4feb23531EdBe471a4493D432f8BB29Bf0A3868',
        lpAddress: '0xE89faE1B4AdA2c869f05a0C96C87022DaDC7709a',
        underlying: [
          '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
          '0xa3Fa99A148fA48D14Ed51d610c367C61876997F1'
        ],
        poolId: 4
      },
      tvl: "lpStakingTvl"
    },
    {
      // AVAX/WETH
      meta: {
        stakingAddress: '0xf4feb23531EdBe471a4493D432f8BB29Bf0A3868',
        lpAddress: '0x1274De0DE2e9D9b1d0E06313c0E5EdD01CC335eF',
        underlying: [
          '0x2C89bbc92BD86F8075d1DEcc58C7F4E0107f286b',
          '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619'
        ],
        poolId: 5
      },
      tvl: "lpStakingTvl"
    },
    {
      // MATIC/WETH
      meta: {
        stakingAddress: '0xf4feb23531EdBe471a4493D432f8BB29Bf0A3868',
        lpAddress: '0xc4e595acDD7d12feC385E5dA5D43160e8A0bAC0E',
        underlying: [
          '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
          '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619'
        ],
        poolId: 6
      },
      tvl: "lpStakingTvl"
    },
    {
      // CRV/WETH
      meta: {
        stakingAddress: '0xf4feb23531EdBe471a4493D432f8BB29Bf0A3868',
        lpAddress: '0x396E655C309676cAF0acf4607a868e0CDed876dB',
        underlying: [
          '0x172370d5Cd63279eFa6d502DAB29171933a610AF',
          '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619'
        ],
        poolId: 7
      },
      tvl: "lpStakingTvl"
    },
    {
      // SNX/WETH
      meta: {
        stakingAddress: '0xf4feb23531EdBe471a4493D432f8BB29Bf0A3868',
        lpAddress: '0x116Ff0d1Caa91a6b94276b3471f33dbeB52073E7',
        underlying: [
          '0x50B728D8D964fd00C2d0AAD81718b71311feF68a',
          '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619'
        ],
        poolId: 8
      },
      tvl: "lpStakingTvl"
    },
    {
      // WMATIC/GHST
      meta: {
        stakingAddress: '0xf4feb23531EdBe471a4493D432f8BB29Bf0A3868',
        lpAddress: '0xf69e93771F11AECd8E554aA165C3Fe7fd811530c',
        underlying: [
          '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
          '0x385eeac5cb85a38a9a07a70c73e0a3271cfb54a7'
        ],
        poolId: 9
      },
      tvl: "lpStakingTvl"
    },
  ],
  'bsc': [
    {
      // DHV
      meta: {
        stakingAddress: '0x35f28aA0B2F34eFF17d2830135312ab2a777De36',
        tokenAddress: '0x58759dd469ae5631c42cf8a473992335575b58d7',
        poolId: 0,
      },
      tvl: "stakingTvl"
    },
    {
      // BSC-deCluster
      meta: {
        clusterAddress: '0x0a684421ef48b431803BFd75F38675EAb1e38Ed5',
      },
      tvl: "clusterTvl"
    },
    {
      // DHV/BUSD
      meta: {
        stakingAddress: '0xF2e8CD1c40C766FEe73f56607fDffa526Ba8fa6c',
        lpAddress: '0x72ba008B631D9FD5a8E8013023CB3c05E19A7CA9',
        underlying: [
          '0x58759dd469ae5631c42cf8a473992335575b58d7',
          '0xe9e7cea3dedca5984780bafc599bd69add087d56'
        ],
        poolId: 0
      },
      tvl: "lpStakingTvl"
    },
    {
      // CAKE/BUSD
      meta: {
        stakingAddress: '0xA9c97Ff825dB9dd53056d65aE704031B4959d99a',
        lpAddress: '0x804678fa97d91B974ec2af3c843270886528a9E6',
        underlying: [
          '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
          '0xe9e7cea3dedca5984780bafc599bd69add087d56'
        ],
        poolId: 0
      },
      tvl: "lpStakingTvl"
    },
    {
      // USDT/USDC
      meta: {
        stakingAddress: '0xA9c97Ff825dB9dd53056d65aE704031B4959d99a',
        lpAddress: '0xEc6557348085Aa57C72514D67070dC863C0a5A8c',
        underlying: [
          '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
          '0x55d398326f99059ff775485246999027b3197955'
        ],
        poolId: 1
      },
      tvl: "lpStakingTvl"
    },
    {
      // USDT/WBNB
      meta: {
        stakingAddress: '0xA9c97Ff825dB9dd53056d65aE704031B4959d99a',
        lpAddress: '0x16b9a82891338f9bA80E2D6970FddA79D1eb0daE',
        underlying: [
          '0x55d398326f99059ff775485246999027b3197955',
          '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
        ],
        poolId: 2
      },
      tvl: "lpStakingTvl"
    },
    {
      // XVS/WBNB
      meta: {
        stakingAddress: '0xA9c97Ff825dB9dd53056d65aE704031B4959d99a',
        lpAddress: '0x7EB5D86FD78f3852a3e0e064f2842d45a3dB6EA2',
        underlying: [
          '0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63',
          '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
        ],
        poolId: 3
      },
      tvl: "lpStakingTvl"
    },
    {
      // ALPACA/BUSD
      meta: {
        stakingAddress: '0xA9c97Ff825dB9dd53056d65aE704031B4959d99a',
        lpAddress: '0x7752e1FA9F3a2e860856458517008558DEb989e3',
        underlying: [
          '0x8f0528ce5ef7b51152a59745befdd91d97091d2f',
          '0xe9e7cea3dedca5984780bafc599bd69add087d56'
        ],
        poolId: 4
      },
      tvl: "lpStakingTvl"
    },
    {
      // LINK/WBNB
      meta: {
        stakingAddress: '0xA9c97Ff825dB9dd53056d65aE704031B4959d99a',
        lpAddress: '0x824eb9faDFb377394430d2744fa7C42916DE3eCe',
        underlying: [
          '0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd',
          '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
        ],
        poolId: 5
      },
      tvl: "lpStakingTvl"
    },
    {
      // CAKE/USDT
      meta: {
        stakingAddress: '0xA9c97Ff825dB9dd53056d65aE704031B4959d99a',
        lpAddress: '0xA39Af17CE4a8eb807E076805Da1e2B8EA7D0755b',
        underlying: [
          '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
          '0x55d398326f99059ff775485246999027b3197955'
        ],
        poolId: 6
      },
      tvl: "lpStakingTvl"
    },
    {
      // DODO/WBNB
      meta: {
        stakingAddress: '0xA9c97Ff825dB9dd53056d65aE704031B4959d99a',
        lpAddress: '0xA9986Fcbdb23c2E8B11AB40102990a08f8E58f06',
        underlying: [
          '0x67ee3cb086f8a16f34bee3ca72fad36f7db929e2',
          '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
        ],
        poolId: 7
      },
      tvl: "lpStakingTvl"
    },
    {
      // BANANA/WBNB
      meta: {
        stakingAddress: '0xA9c97Ff825dB9dd53056d65aE704031B4959d99a',
        lpAddress: '0xF65C1C0478eFDe3c19b49EcBE7ACc57BB6B1D713',
        underlying: [
          '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95',
          '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
        ],
        poolId: 8
      },
      tvl: "lpStakingTvl"
    },
    {
      // BANANA/BUSD
      meta: {
        stakingAddress: '0xA9c97Ff825dB9dd53056d65aE704031B4959d99a',
        lpAddress: '0x7Bd46f6Da97312AC2DBD1749f82E202764C0B914',
        underlying: [
          '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95',
          '0xe9e7cea3dedca5984780bafc599bd69add087d56'
        ],
        poolId: 9
      },
      tvl: "lpStakingTvl"
    },
    {
      // TWT/WBNB
      meta: {
        stakingAddress: '0xA9c97Ff825dB9dd53056d65aE704031B4959d99a',
        lpAddress: '0x4c48D692e3de076C7b844B956b28cdd1DD5C0945',
        underlying: [
          '0x4b0f1812e5df2a09796481ff14017e6005508003',
          '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
        ],
        poolId: 10
      },
      tvl: "lpStakingTvl"
    },
    {
      // AVAX/WBNB
      meta: {
        stakingAddress: '0xA9c97Ff825dB9dd53056d65aE704031B4959d99a',
        lpAddress: '0x40aFc7CBd0Dc2bE5860F0035b717d20Afb4827b2',
        underlying: [
          '0x1CE0c2827e2eF14D5C4f29a091d735A204794041',
          '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
        ],
        poolId: 11
      },
      tvl: "lpStakingTvl"
    },
  ],
  'xdai': [
    {
      // DHV
      meta: {
        stakingAddress: '0x589Ea336092184d9eD74b8263c4eecA73Ed0cE7a',
        tokenAddress: '0xFbdd194376de19a88118e84E279b977f165d01b8',
        poolId: 0,
      },
      tvl: "stakingTvl"
    },
    {
      // DXIN
      meta: {
        clusterAddress: '0xA6C090c5572f54d529B0839b8fd2D50a4afB1E6B',
      },
      tvl: "clusterTvl"
    },
    {
      // DXDC
      meta: {
        clusterAddress: '0xF557B2B73b872E6d2F43826f9D77B7402A363Bc0',
      },
      tvl: "clusterTvl"
    },
    {
      // DHV/XDAI
      meta: {
        stakingAddress: '0xa4E7BE054000603B82B79208aC3eE5428554CaF6',
        lpAddress: '0x14EE6d20B8167eacb885F4F2F45C3Bf2d4FD06f4',
        underlying: [
          '0xFbdd194376de19a88118e84E279b977f165d01b8',
          '0xe91d153e0b41518a2ce8dd3d7944fa863463a97d'
        ],
        poolId: 0
      },
      tvl: "lpStakingTvl"
    },
  ]
}
