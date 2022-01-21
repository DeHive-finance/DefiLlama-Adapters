const dehive = require("@dehive-finance/dehive-sdk");
const dehiveConstants = require("@dehive-finance/dehive-sdk/dist/nodejs/constants");
const { returnDecimals } = require("./projects/helper/utils");

const path = require("path");
require("dotenv").config();
const { default: computeTVL } = require("@defillama/sdk/build/computeTVL");
const { chainsForBlocks } = require("@defillama/sdk/build/computeTVL/blocks");
const { getLatestBlock } = require("@defillama/sdk/build/util/index");
const {
  humanizeNumber,
} = require("@defillama/sdk/build/computeTVL/humanizeNumber");
const { util } = require("@defillama/sdk");

async function getLatestBlockRetry(chain) {
  for (let i = 0; i < 5; i++) {
    try {
      return await getLatestBlock(chain);
    } catch (e) {
      throw new Error(`Couln't get block heights for chain "${chain}"`, e);
    }
  }
}

const locks = [];
function getCoingeckoLock() {
  return new Promise((resolve) => {
    locks.push(resolve);
  });
}
function releaseCoingeckoLock() {
  const firstLock = locks.shift();
  if (firstLock !== undefined) {
    firstLock(null);
  }
}
// Rate limit is 50 calls/min for coingecko's API
// So we'll release one every 1.2 seconds to match it
setInterval(() => {
  releaseCoingeckoLock();
}, 2000);
const maxCoingeckoRetries = 5;

async function getTvl(
  unixTimestamp,
  ethBlock,
  chainBlocks,
  usdTvls,
  tokensBalances,
  usdTokenBalances,
  tvlFunction,
  isFetchFunction,
  storedKey,
  knownTokenPrices,
  jsonConfig
) {
  if (!isFetchFunction) {
    const tvlBalances = await tvlFunction(unixTimestamp, ethBlock, chainBlocks, jsonConfig);
    const tvlResults = await computeTVL(
      tvlBalances,
      "now",
      false,
      knownTokenPrices,
      getCoingeckoLock,
      maxCoingeckoRetries
    );
    usdTvls[storedKey] = tvlResults.usdTvl;
    tokensBalances[storedKey] = tvlResults.tokenBalances;
    usdTokenBalances[storedKey] = tvlResults.usdTokenBalances;
  } else {
    usdTvls[storedKey] = Number(
      await tvlFunction(unixTimestamp, ethBlock, chainBlocks)
    );
  }
  if (
    typeof usdTvls[storedKey] !== "number" ||
    Number.isNaN(usdTvls[storedKey])
  ) {
    throw new Error(
      `TVL for key ${storedKey} is not a number, instead it is ${usdTvls[storedKey]}`
    );
  }
}

const dehiveAdapter = require("./dehive-adapter");


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

  let fullList = []

  for (let n = 0; n < supportedNetworksIds.length; n++) {
    let networkId = supportedNetworksIds[n];
    const stackingMeta = dehiveConstants.stakingPoolsMeta(networkId);
    let networkBody = "";
    let allStakingPoolBody = "";
    let skipRecord = false;

    for (let k of Object.keys(stackingMeta)) {
      const recordName = k;
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
        allStakingPoolBody = body;
      }

      networkBody = "'" + getNetworkName(networkId) + "'" + " : [\n" + allStakingPoolBody + "],\n";
      configResult = "module.exports = {\n" + networkBody + "}";

      let jsonConfig = eval(configResult);
      // console.log('jsonConfig', jsonConfig)

      await (async () => {
        const module = require("./dehive-adapter");
        const unixTimestamp = Math.round(Date.now() / 1000) - 60;
        const chainBlocks = {};
        const chains = Object.keys(module);
        if (!chains.includes("ethereum")) {
          chains.push("ethereum");
        }
        await Promise.all(
          chains.map(async (chain) => {
            if (chainsForBlocks.includes(chain) || chain === "ethereum") {
              chainBlocks[chain] = (await getLatestBlockRetry(chain)).number - 10;
            }
          })
        );
        const ethBlock = chainBlocks.ethereum;
        const usdTvls = {};
        const tokensBalances = {};
        const usdTokenBalances = {};
        const knownTokenPrices = {};

        let tvlPromises = Object.entries(module).map(async ([chain, value]) => {
          if (typeof value !== "object" || value === null) {
            return;
          }
          if (!(chain in jsonConfig)) {
            return;
          }
          return Promise.all(
            Object.entries(value).map(async ([tvlType, tvlFunction]) => {
              if (typeof tvlFunction !== "function") {
                return;
              }
              let storedKey = `${chain}-${tvlType}`;
              let tvlFunctionIsFetch = false;
              if (tvlType === "tvl") {
                storedKey = chain;
              } else if (tvlType === "fetch") {
                storedKey = chain;
                tvlFunctionIsFetch = true;
              }
              await getTvl(
                unixTimestamp,
                ethBlock,
                chainBlocks,
                usdTvls,
                tokensBalances,
                usdTokenBalances,
                tvlFunction,
                tvlFunctionIsFetch,
                storedKey,
                knownTokenPrices,
                jsonConfig
              );
            }));
        })
        await Promise.all(tvlPromises);

        let totalTvl = 0;
        Object.keys(usdTvls).map((k) => {
          totalTvl += usdTvls[k];
        })

        fullList.push({
          "networkId": networkId,
          "symbol": recordName,
          "tvl": totalTvl,
          "type": staking.type
        })
        console.log("networkId", networkId, "staking.asset", recordName, "totalTvl", totalTvl);
      })();
    }
  }

  console.log(JSON.stringify(fullList, null, 4));
})();
