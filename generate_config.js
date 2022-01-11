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

  configResult += "module.exports = {\n";

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
          body = "{\n";
          body += "stakingAddress: '" + getAssetAddress(networkId, staking.stakingContractSymbol) + "', // " + staking.stakingContractSymbol + "\n";
          body += "lpAddress: '" + getAssetAddress(networkId, staking.asset) + "', // " + staking.asset + "\n";
          body += "dhvToken: '" + getAssetAddress(networkId, "DHV") + "',\n";
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
          body += "poolId: " + staking.pid + "\n";
          body += "},\n";
          tvlName = "crvStakingTvl";
          break;
        }
        case "solo": {
          body = "{\n";
          body += "stakingAddress: '" + getAssetAddress(networkId, staking.stakingContractSymbol) + "', // " + staking.stakingContractSymbol + "\n";
          body += "tokenAddress: '" + getAssetAddress(networkId, staking.asset) + "', // " + staking.asset + "\n";
          body += "poolId: " + staking.pid + "\n";
          body += "},\n";
          if (staking.asset === "DHV") {
            tvlName = "stakingDhvTvl";
          } else {
            tvlName = "stakingTvl";
          }
          break;
        }
      }

      body = "{//" + staking.displayName + " (" + staking.type + ")\n"
        + "meta: " + body + "tvl: \"" + tvlName + "\"\n" + "},\n";
      if (!skipRecord) {
        allStakingPoolBody += body;
      }
    }

    networkBody = "'" + getNetworkName(networkId) + "'" + " : [\n" + allStakingPoolBody + "],\n";

    configResult += networkBody;
  }

  configResult += "};\n";

  console.log(configResult);
})();
