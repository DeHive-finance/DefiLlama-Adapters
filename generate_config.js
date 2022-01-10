const dehive = require("@dehive-finance/dehive-sdk");
const dehiveConstants = require("@dehive-finance/dehive-sdk/dist/nodejs/constants");
const { returnDecimals } = require("./projects/helper/utils");

(async () => {
  let d = new Date();
  let configResult = "// Auto generated at " + d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear() + " " +
    d.getHours() + ":" + d.getMinutes() + "\n";

  function getNetworkName(id) {
    if (id === 1) {
      return "ethereum";
    } else if (id === 137) {
      return "polygon";
    } else if (id === 56) {
      return "bsc";
    } else if (id === 100) {
      return "xdai";
    }
    return "unknown";
  }

  function getDehiveNetworkName(id) {
    return dehiveConstants.supportedNetworks[id];
  }

  const supportedNetworksIds = [1, 137, 56, 100];

  function getAssetAddress(networkId, assetName) {
    return dehiveConstants.address[getDehiveNetworkName(networkId)][assetName];
  }

  configResult += "const stakingInfo = {\n";

  for (let n = 0; n < supportedNetworksIds.length; n++) {
    let networkId = supportedNetworksIds[n];
    const stackingMeta = dehiveConstants.stakingPoolsMeta(networkId);
    let networkBody = "";
    let allStakingPoolBody = "";
    let skipRecord = false;

    for (let k of Object.keys(stackingMeta)) {
      const staking = stackingMeta[k];
      let body = "{},\n";
      let tvlName = "unknown";
      switch (staking.type) {
        case "cluster": {
          // // DECR
          // meta: {
          //   clusterAddress: '0x6Bc3F65Fc50E49060e21eD6996be96ee4B404752',
          // },
          // tvl: clusterTvl
          body = "{\n";
          body += "clusterAddress: '" + getAssetAddress(networkId, staking.asset) + "', // " + staking.asset + "\n";
          body += "},\n";
          tvlName = "clusterTvl";
          break;
        }
        case "external": {
          skipRecord = true;
          break;
        }
        case "lp":
        case "impulse": {

          /// ///////impulse///////////
          // // USDC/Quick
          // meta: {
          //   stakingAddress: '0xf4feb23531EdBe471a4493D432f8BB29Bf0A3868',
          //     lpAddress: '0x1F1E4c845183EF6d50E9609F16f6f9cAE43BC9Cb',
          //     underlying: [
          //     '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
          //     '0x831753DD7087CaC61aB5644b308642cc1c33Dc13'
          //   ],
          //     poolId: 2
          // },
          // tvl: lpStakingTvl

          ////////lp////////////////
          // meta: {
          //   stakingAddress: '0x4964B3B599B82C3FdDC56e3A9Ffd77d48c6AF0f0',
          //     lpAddress: '0x60c5BF43140d6341bebFE13293567FafBe01D65b',
          //     underlying: [
          //     '0x62Dc4817588d53a056cBbD18231d91ffCcd34b2A',
          //     '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
          //   ],
          //     poolId: 0
          // },
          // tvl: lpStakingTvl

          body = "{\n";
          body += "stakingAddress: '" + getAssetAddress(networkId, staking.stakingContractSymbol) + "', // " + staking.stakingContractSymbol + "\n";
          body += "lpAddress: '" + getAssetAddress(networkId, staking.asset) + "', // " + staking.asset + "\n";
          if (!!staking.underlyingTickers) {
            body += "underlying: [\n";
            for (let u of staking.underlyingTickers) {
              body += "'" + getAssetAddress(networkId, u) + "', // " + staking.asset + "\n";
            }
            body += "],\n";
          }
          body += "poolId: " + staking.pid + "\n";
          body += "},\n";
          tvlName = "lpStakingTvl";
          break;
        }
        case "impulse-multiple": {
          body = "{\n";
          body += "stakingAddress: '" + getAssetAddress(networkId, staking.stakingContractSymbol) + "', // " + staking.stakingContractSymbol + "\n";
          body += "lpAddress: '" + getAssetAddress(networkId, staking.asset) + "', // " + staking.asset + "\n";
          body += "poolId: " + staking.pid + "\n";
          body += "},\n";
          tvlName = "lpStakingMultipleTvl";
          break;
        }
        case "solo": {
          // // DHV
          // meta: {
          //   stakingAddress: '0x04595f9010F79422a9b411ef963e4dd1F7107704',
          //     tokenAddress: '0x62Dc4817588d53a056cBbD18231d91ffCcd34b2A',
          //     poolId: 0,
          // },
          // tvl: stakingTvl

          body = "{\n";
          body += "stakingAddress: '" + getAssetAddress(networkId, staking.stakingContractSymbol) + "', // " + staking.stakingContractSymbol + "\n";
          body += "tokenAddress: '" + getAssetAddress(networkId, staking.asset) + "', // " + staking.asset + "\n";
          body += "poolId: " + staking.pid + "\n";
          body += "},\n";
          tvlName = "stakingTvl";
          break;
        }
      }

      body = "{//" + staking.displayName + " (" + staking.type + ")\n"
        + "meta: " + body + "tvL: " + tvlName + "\n" + "},\n";
      if (!skipRecord) {
        allStakingPoolBody += body;
      }
    }

    networkBody = "'" + getNetworkName(networkId) + "'" + " : [\n" + allStakingPoolBody + "],\n";

    configResult += networkBody;
  }

  configResult += "}\n";

  console.log(configResult);
})();
