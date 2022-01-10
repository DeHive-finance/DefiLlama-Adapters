// Auto generated at 10-1-2022 14:20
module.exports = {
  'ethereum': [
    {//DHV (solo)
      meta: {
        stakingAddress: '0x04595f9010F79422a9b411ef963e4dd1F7107704', // StakingDHV
        tokenAddress: '0x62Dc4817588d53a056cBbD18231d91ffCcd34b2A', // DHV
        poolId: 0
      },
      tvl: 'stakingDhvTvl'
    },
    {//DHV/ETH (lp)
      meta: {
        stakingAddress: '0x4964B3B599B82C3FdDC56e3A9Ffd77d48c6AF0f0', // StakingPools
        lpAddress: '0x60c5bf43140d6341bebfe13293567fafbe01d65b', // UNI-DHV-WETH
        underlying: [
          '0x62Dc4817588d53a056cBbD18231d91ffCcd34b2A', // UNI-DHV-WETH
          '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2' // UNI-DHV-WETH
        ],
        poolId: 0
      },
      tvl: 'lpStakingTvl'
    }
  ],
  'polygon': [
    {//DHV (solo)
      meta: {
        stakingAddress: '0x88cFC1bc9aEb80f6C8f5d310d6C3761c2a646Df7', // StakingDHV
        tokenAddress: '0x5fCB9de282Af6122ce3518CDe28B7089c9F97b26', // DHV
        poolId: 0
      },
      tvl: 'stakingDhvTvl'
    },
    {//Poly Cluster (cluster)
      meta: {
        clusterAddress: '0x4964B3B599B82C3FdDC56e3A9Ffd77d48c6AF0f0' // DPOL
      },
      tvl: 'clusterTvl'
    },
    {//Poly Gaming Cluster (cluster)
      meta: {
        clusterAddress: '0x589Ea336092184d9eD74b8263c4eecA73Ed0cE7a' // DGAME
      },
      tvl: 'clusterTvl'
    },
    {//Curve pool (impulse-multiple)
      meta: {
        stakingAddress: '0xE6E6982fb5dDF4fcc74cCCe4e4eea774E002D17F', // ImpulseMultiStaking
        poolId: 0
      },
      tvl: 'crvStakingTvl'
    },
    {//DHV/QUICK (impulse)
      meta: {
        stakingAddress: '0xf4feb23531EdBe471a4493D432f8BB29Bf0A3868', // ImpulseStaking
        lpAddress: '0xfd0E242c95b271844bf6860D4bC0E3e136bC0f7C', // QCK-DHV-QUICK
        underlying: [
          '0x5fCB9de282Af6122ce3518CDe28B7089c9F97b26', // QCK-DHV-QUICK
          '0x831753DD7087CaC61aB5644b308642cc1c33Dc13' // QCK-DHV-QUICK
        ],
        poolId: 0
      },
      tvl: 'lpStakingTvl'
    },
    {//WETH/DAI (impulse)
      meta: {
        stakingAddress: '0xf4feb23531EdBe471a4493D432f8BB29Bf0A3868', // ImpulseStaking
        lpAddress: '0x4A35582a710E1F4b2030A3F826DA20BfB6703C09', // QCK-WETH-DAI
        underlying: [
          '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619', // QCK-WETH-DAI
          '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063' // QCK-WETH-DAI
        ],
        poolId: 1
      },
      tvl: 'lpStakingTvl'
    },
    {//USDC/QUICK (impulse)
      meta: {
        stakingAddress: '0xf4feb23531EdBe471a4493D432f8BB29Bf0A3868', // ImpulseStaking
        lpAddress: '0x1F1E4c845183EF6d50E9609F16f6f9cAE43BC9Cb', // QCK-USDC-QUICK
        underlying: [
          '0x2791bca1f2de4661ed88a30c99a7a9449aa84174', // QCK-USDC-QUICK
          '0x831753DD7087CaC61aB5644b308642cc1c33Dc13' // QCK-USDC-QUICK
        ],
        poolId: 2
      },
      tvl: 'lpStakingTvl'
    },
    {//USDC/MATIC (impulse)
      meta: {
        stakingAddress: '0xf4feb23531EdBe471a4493D432f8BB29Bf0A3868', // ImpulseStaking
        lpAddress: '0x6e7a5FAFcec6BB1e78bAE2A1F0B612012BF14827', // QCK-USDC-WMATIC
        underlying: [
          '0x2791bca1f2de4661ed88a30c99a7a9449aa84174', // QCK-USDC-WMATIC
          '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270' // QCK-USDC-WMATIC
        ],
        poolId: 3
      },
      tvl: 'lpStakingTvl'
    },
    {//USDT/MAI (impulse)
      meta: {
        stakingAddress: '0xf4feb23531EdBe471a4493D432f8BB29Bf0A3868', // ImpulseStaking
        lpAddress: '0xE89faE1B4AdA2c869f05a0C96C87022DaDC7709a', // QCK-MAI-USDT
        underlying: [
          '0xc2132D05D31c914a87C6611C10748AEb04B58e8F', // QCK-MAI-USDT
          '0xa3fa99a148fa48d14ed51d610c367c61876997f1' // QCK-MAI-USDT
        ],
        poolId: 4
      },
      tvl: 'lpStakingTvl'
    },
    {//AVAX/WETH (impulse)
      meta: {
        stakingAddress: '0xf4feb23531EdBe471a4493D432f8BB29Bf0A3868', // ImpulseStaking
        lpAddress: '0x1274De0DE2e9D9b1d0E06313c0E5EdD01CC335eF', // SUSHI-AVAX-WETH
        underlying: [
          '0x2C89bbc92BD86F8075d1DEcc58C7F4E0107f286b', // SUSHI-AVAX-WETH
          '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619' // SUSHI-AVAX-WETH
        ],
        poolId: 5
      },
      tvl: 'lpStakingTvl'
    },
    {//WMATIC/WETH (impulse)
      meta: {
        stakingAddress: '0xf4feb23531EdBe471a4493D432f8BB29Bf0A3868', // ImpulseStaking
        lpAddress: '0xc4e595acDD7d12feC385E5dA5D43160e8A0bAC0E', // SUSHI-WMATIC-WETH
        underlying: [
          '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270', // SUSHI-WMATIC-WETH
          '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619' // SUSHI-WMATIC-WETH
        ],
        poolId: 6
      },
      tvl: 'lpStakingTvl'
    },
    {//CRV/WETH (impulse)
      meta: {
        stakingAddress: '0xf4feb23531EdBe471a4493D432f8BB29Bf0A3868', // ImpulseStaking
        lpAddress: '0x396E655C309676cAF0acf4607a868e0CDed876dB', // SUSHI-CRV-WETH
        underlying: [
          '0x172370d5Cd63279eFa6d502DAB29171933a610AF', // SUSHI-CRV-WETH
          '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619' // SUSHI-CRV-WETH
        ],
        poolId: 7
      },
      tvl: 'lpStakingTvl'
    },
    {//SNX/WETH (impulse)
      meta: {
        stakingAddress: '0xf4feb23531EdBe471a4493D432f8BB29Bf0A3868', // ImpulseStaking
        lpAddress: '0x116Ff0d1Caa91a6b94276b3471f33dbeB52073E7', // SUSHI-SNX-WETH
        underlying: [
          '0x50B728D8D964fd00C2d0AAD81718b71311feF68a', // SUSHI-SNX-WETH
          '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619' // SUSHI-SNX-WETH
        ],
        poolId: 8
      },
      tvl: 'lpStakingTvl'
    },
    {//WMATIC/GHST (impulse)
      meta: {
        stakingAddress: '0xf4feb23531EdBe471a4493D432f8BB29Bf0A3868', // ImpulseStaking
        lpAddress: '0xf69e93771F11AECd8E554aA165C3Fe7fd811530c', // SUSHI-WMATIC-GHST
        underlying: [
          '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270', // SUSHI-WMATIC-GHST
          '0x385eeac5cb85a38a9a07a70c73e0a3271cfb54a7' // SUSHI-WMATIC-GHST
        ],
        poolId: 9
      },
      tvl: 'lpStakingTvl'
    }
  ],
  'bsc': [
    {//DHV (solo)
      meta: {
        stakingAddress: '0x35f28aA0B2F34eFF17d2830135312ab2a777De36', // StakingDHV
        tokenAddress: '0x58759dd469ae5631c42cf8a473992335575b58d7', // DHV
        poolId: 0
      },
      tvl: 'stakingDhvTvl'
    },
    {//BSC-deCluster (cluster)
      meta: {
        clusterAddress: '0x0a684421ef48b431803BFd75F38675EAb1e38Ed5' // DBSC
      },
      tvl: 'clusterTvl'
    },
    {//DHV/BUSD (lp)
      meta: {
        stakingAddress: '0xF2e8CD1c40C766FEe73f56607fDffa526Ba8fa6c', // StakingPools
        lpAddress: '0x72ba008B631D9FD5a8E8013023CB3c05E19A7CA9', // PANCAKE-DHV-BUSD
        underlying: [
          '0x58759dd469ae5631c42cf8a473992335575b58d7', // PANCAKE-DHV-BUSD
          '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56' // PANCAKE-DHV-BUSD
        ],
        poolId: 0
      },
      tvl: 'lpStakingTvl'
    },
    {//CAKE/BUSD (impulse)
      meta: {
        stakingAddress: '0xA9c97Ff825dB9dd53056d65aE704031B4959d99a', // ImpulseStaking
        lpAddress: '0x804678fa97d91B974ec2af3c843270886528a9E6', // PANCAKE-CAKE-BUSD
        underlying: [
          '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82', // PANCAKE-CAKE-BUSD
          '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56' // PANCAKE-CAKE-BUSD
        ],
        poolId: 0
      },
      tvl: 'lpStakingTvl'
    },
    {//USDT/USDC (impulse)
      meta: {
        stakingAddress: '0xA9c97Ff825dB9dd53056d65aE704031B4959d99a', // ImpulseStaking
        lpAddress: '0xEc6557348085Aa57C72514D67070dC863C0a5A8c', // PANCAKE-BUSDT-USDC
        underlying: [
          '0x55d398326f99059fF775485246999027B3197955', // PANCAKE-BUSDT-USDC
          '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d' // PANCAKE-BUSDT-USDC
        ],
        poolId: 1
      },
      tvl: 'lpStakingTvl'
    },
    {//USDT/WBNB (impulse)
      meta: {
        stakingAddress: '0xA9c97Ff825dB9dd53056d65aE704031B4959d99a', // ImpulseStaking
        lpAddress: '0x16b9a82891338f9bA80E2D6970FddA79D1eb0daE', // PANCAKE-BUSDT-WBNB
        underlying: [
          '0x55d398326f99059fF775485246999027B3197955', // PANCAKE-BUSDT-WBNB
          '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c' // PANCAKE-BUSDT-WBNB
        ],
        poolId: 2
      },
      tvl: 'lpStakingTvl'
    },
    {//XVS/WBNB (impulse)
      meta: {
        stakingAddress: '0xA9c97Ff825dB9dd53056d65aE704031B4959d99a', // ImpulseStaking
        lpAddress: '0x7EB5D86FD78f3852a3e0e064f2842d45a3dB6EA2', // PANCAKE-XVS-WBNB
        underlying: [
          '0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63', // PANCAKE-XVS-WBNB
          '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c' // PANCAKE-XVS-WBNB
        ],
        poolId: 3
      },
      tvl: 'lpStakingTvl'
    },
    {//ALPACA/BUSD (impulse)
      meta: {
        stakingAddress: '0xA9c97Ff825dB9dd53056d65aE704031B4959d99a', // ImpulseStaking
        lpAddress: '0x7752e1FA9F3a2e860856458517008558DEb989e3', // PANCAKE-ALPACA-BUSD
        underlying: [
          '0x8F0528cE5eF7B51152A59745bEfDD91D97091d2F', // PANCAKE-ALPACA-BUSD
          '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56' // PANCAKE-ALPACA-BUSD
        ],
        poolId: 4
      },
      tvl: 'lpStakingTvl'
    },
    {//LINK/WBNB (impulse)
      meta: {
        stakingAddress: '0xA9c97Ff825dB9dd53056d65aE704031B4959d99a', // ImpulseStaking
        lpAddress: '0x824eb9faDFb377394430d2744fa7C42916DE3eCe', // PANCAKE-LINK-WBNB
        underlying: [
          '0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD', // PANCAKE-LINK-WBNB
          '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c' // PANCAKE-LINK-WBNB
        ],
        poolId: 5
      },
      tvl: 'lpStakingTvl'
    },
    {//CAKE/USDT (impulse)
      meta: {
        stakingAddress: '0xA9c97Ff825dB9dd53056d65aE704031B4959d99a', // ImpulseStaking
        lpAddress: '0xA39Af17CE4a8eb807E076805Da1e2B8EA7D0755b', // PANCAKE-CAKE-BUSDT
        underlying: [
          '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82', // PANCAKE-CAKE-BUSDT
          '0x55d398326f99059fF775485246999027B3197955' // PANCAKE-CAKE-BUSDT
        ],
        poolId: 6
      },
      tvl: 'lpStakingTvl'
    },
    {//DODO/WBNB (impulse)
      meta: {
        stakingAddress: '0xA9c97Ff825dB9dd53056d65aE704031B4959d99a', // ImpulseStaking
        lpAddress: '0xA9986Fcbdb23c2E8B11AB40102990a08f8E58f06', // PANCAKE-DODO-WBNB
        underlying: [
          '0x67ee3Cb086F8a16f34beE3ca72FAD36F7Db929e2', // PANCAKE-DODO-WBNB
          '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c' // PANCAKE-DODO-WBNB
        ],
        poolId: 7
      },
      tvl: 'lpStakingTvl'
    },
    {//BANANA/WBNB (impulse)
      meta: {
        stakingAddress: '0xA9c97Ff825dB9dd53056d65aE704031B4959d99a', // ImpulseStaking
        lpAddress: '0xF65C1C0478eFDe3c19b49EcBE7ACc57BB6B1D713', // APE-BANANA-WBNB
        underlying: [
          '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95', // APE-BANANA-WBNB
          '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c' // APE-BANANA-WBNB
        ],
        poolId: 8
      },
      tvl: 'lpStakingTvl'
    },
    {//BANANA/BUSD (impulse)
      meta: {
        stakingAddress: '0xA9c97Ff825dB9dd53056d65aE704031B4959d99a', // ImpulseStaking
        lpAddress: '0x7Bd46f6Da97312AC2DBD1749f82E202764C0B914', // APE-BANANA-BUSD
        underlying: [
          '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95', // APE-BANANA-BUSD
          '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56' // APE-BANANA-BUSD
        ],
        poolId: 9
      },
      tvl: 'lpStakingTvl'
    },
    {//TWT/WBNB (impulse)
      meta: {
        stakingAddress: '0xA9c97Ff825dB9dd53056d65aE704031B4959d99a', // ImpulseStaking
        lpAddress: '0x4c48D692e3de076C7b844B956b28cdd1DD5C0945', // APE-TWT-WBNB
        underlying: [
          '0x4B0F1812e5Df2A09796481Ff14017e6005508003', // APE-TWT-WBNB
          '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c' // APE-TWT-WBNB
        ],
        poolId: 10
      },
      tvl: 'lpStakingTvl'
    },
    {//AVAX/WBNB (impulse)
      meta: {
        stakingAddress: '0xA9c97Ff825dB9dd53056d65aE704031B4959d99a', // ImpulseStaking
        lpAddress: '0x40aFc7CBd0Dc2bE5860F0035b717d20Afb4827b2', // APE-AVAX-WBNB
        underlying: [
          '0x1CE0c2827e2eF14D5C4f29a091d735A204794041', // APE-AVAX-WBNB
          '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c' // APE-AVAX-WBNB
        ],
        poolId: 11
      },
      tvl: 'lpStakingTvl'
    }
  ],
  'xdai': [
    {//DHV (solo)
      meta: {
        stakingAddress: '0x589Ea336092184d9eD74b8263c4eecA73Ed0cE7a', // StakingDHV
        tokenAddress: '0xFbdd194376de19a88118e84E279b977f165d01b8', // DHV
        poolId: 0
      },
      tvl: 'stakingDhvTvl'
    },
    {//xInfra Cluster (cluster)
      meta: {
        clusterAddress: '0xA6C090c5572f54d529B0839b8fd2D50a4afB1E6B' // DXIN
      },
      tvl: 'clusterTvl'
    },
    {//De-xDai Cluster (cluster)
      meta: {
        clusterAddress: '0xF557B2B73b872E6d2F43826f9D77B7402A363Bc0' // DXDC
      },
      tvl: 'clusterTvl'
    },
    {//DHV/XDAI (lp)
      meta: {
        stakingAddress: '0xa4E7BE054000603B82B79208aC3eE5428554CaF6', // StakingPools
        lpAddress: '0x14EE6d20B8167eacb885F4F2F45C3Bf2d4FD06f4', // HONEY-DHV-WXDAI
        underlying: [
          '0xFbdd194376de19a88118e84E279b977f165d01b8', // HONEY-DHV-WXDAI
          '0xe91d153e0b41518a2ce8dd3d7944fa863463a97d' // HONEY-DHV-WXDAI
        ],
        poolId: 1
      },
      tvl: 'lpStakingTvl'
    }
  ]
};

