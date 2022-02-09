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

  const stakingPoolsMeta = {};

  for (let n = 0; n < supportedNetworksIds.length; n++) {
    stakingPoolsMeta[supportedNetworksIds[n]] = JSON.parse(JSON.stringify(dehiveConstants.stakingPoolsMeta(supportedNetworksIds[n])));
  }

  if (!stakingPoolsMeta[1]["DECR"]) {
    stakingPoolsMeta[1]["DECR"] = {
      type: "cluster",
      asset: "DECR",
      displayName: "DECR"
    };
  }

  for (let n = 0; n < supportedNetworksIds.length; n++) {
    let networkId = supportedNetworksIds[n];
    const stackingMeta = stakingPoolsMeta[networkId];
    let networkBody = "";
    let allStakingPoolBody = "";
    let skipRecord = false;

    for (let k of Object.keys(stackingMeta)) {
      const staking = stackingMeta[k];
      let body = "{},\n";
      let tvlName = "unknown";
      if (staking.type === "impulse"
        && getAssetAddress(networkId, staking.stakingContractSymbol) === "0xf4feb23531EdBe471a4493D432f8BB29Bf0A3868"
        && staking.pid === 3) {
        continue;
      }
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
        case "impulse":
        case "lp": {
          body = "{\n";
          body += "stakingAddress: '" + getAssetAddress(networkId, staking.stakingContractSymbol) + "', // " + staking.stakingContractSymbol + "\n";
          body += "lpAddress: '" + getAssetAddress(networkId, staking.asset) + "', // " + staking.asset + "\n";
          body += "dhvToken: '" + getAssetAddress(networkId, "DHV") + "',\n";
          if (!!staking.underlyingTickers) {
            body += "underlying: [\n";
            for (let u of staking.underlyingTickers) {
              body += "'" + getAssetAddress(networkId, u) + "', // " + u + "\n";
            }
            body += "],\n";
          }
          if (staking.type === "lp") {
            let isPool2 = (staking.underlyingTickers.length > 1) && (staking.underlyingTickers.includes("DHV"));
            body += "isPool2: " + isPool2 + ",\n";
          }
          body += "poolId: " + staking.pid + "\n";
          body += "},\n";
          if (staking.type === "lp") {
            tvlName = "lpStakingTvl";
          } else {
            tvlName = "impulseStakingTvl";
          }
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

      if (staking.type === "impulse"
        && getAssetAddress(networkId, staking.stakingContractSymbol) === "0xf4feb23531EdBe471a4493D432f8BB29Bf0A3868"
        && staking.pid === 3) {
        skipRecord = true;
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
