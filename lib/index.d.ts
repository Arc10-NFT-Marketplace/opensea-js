import { OpenSeaPort } from './seaport';
import { OpenSeaAPI } from './api';
import { Network, EventData, EventType } from './types';
export { orderToJSON, orderFromJSON, WyvernProtocol } from './utils/utils';
export { encodeCall, encodeSell, encodeAtomicizedBuy, encodeAtomicizedSell, encodeDefaultCall, encodeReplacementPattern, AbiType, } from './utils/schema';
/**
 * Example setup:
 *
 * import * as Web3 from 'web3'
 * import { OpenSeaPort, Network } from 'opensea-js'
 * const provider = new Web3.providers.HttpProvider('https://mainnet.infura.io')
 * const client = new OpenSeaPort(provider, {
 *   networkName: Network.Main
 * })
 */
export { OpenSeaPort, OpenSeaAPI, EventData, EventType, Network };
declare global {
    interface Window {
        _env_: {
            REACT_APP_WYVERN_ATOMICIZER: string;
            REACT_APP_WYVERN_EXCHANGE: string;
            REACT_APP_WYVERN_TOKEN_TRANSFER_PROXY: string;
            REACT_APP_WYVERN_TOKEN: string;
            REACT_APP_WYVERN_DAO: string;
            REACT_APP_WYVERN_PROXY_REGISTRY: string;
            REACT_APP_API_PATH: string;
            REACT_APP_ORDERBOOK_PATH: string;
            REACT_APP_SITE_HOST_CUSTOM: string;
            REACT_APP_API_BASE_CUSTOM: string;
            REACT_APP_CUSTOM_PROVIDER_URL: string;
            REACT_APP_CUSTOM_FEE_RECIPIENT: string;
        };
    }
}
