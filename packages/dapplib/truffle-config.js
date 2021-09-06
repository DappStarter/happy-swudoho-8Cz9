require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half argue bright venture strong roof stereo mistake half kangaroo army genuine'; 
let testAccounts = [
"0xbbc9229ac1bb5c6606d83a4b2581dad29bca0eb1ae49a11163d883ff841c77c0",
"0x5c5a4deba74037d4d84cc7733dc57db2bb792c54b021a5979ab7d00e9fc4d36e",
"0xc9f1ced6edce105ecfd6a9f050e6eb6fde44f5d9ded9f9d63c0e27ccd0ae63e0",
"0x35ca45bb1d157ae18c6a78d49eeadd87c55923317bd858d83f3f2155bbf07948",
"0x57707955d3a62ffef4ae6507118fa475d155dea6748ff626a5cbc23147d92c07",
"0x2556e183fcd3626a9671300ac65f2e578176f1c92b3d065cc4bea746aa2b4239",
"0xf188674b208b7bb47f4230ed2155ca38dbeddc80a94b916fd3e7142eeacfa496",
"0x1d6259d3585c75347c88b29ca3ffa4aded185eb9068b54e6707a43bb60a0f172",
"0xfcde6d8272198b0e4005cbeb79cbeeb0c7d7a1d483f4ffc2d04ec8e12561078c",
"0x4df45bbaeafac9b7e41730d3904f5cb691005591427784b8feee2ee9a24112bf"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


