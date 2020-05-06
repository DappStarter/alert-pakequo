require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture glimpse frame tribe strike cost pulse purchase install kangaroo army gasp'; 
let testAccounts = [
"0x29061172462bb00c0139e0e1d82725eebf04b08f10c9a7e3001dde21f39cdcc7",
"0x7a1d359d55456b85461e98dec2931b5aa7fc0b22d98305944ef07477bbf6a214",
"0xe3b6b18e2391d6be4c3f3e701156c46c462e8a39388752ef7c8101a1e487d388",
"0x7094f83c9cad06080de686d55322a6738261c1419433b94f952348d1716bf2b2",
"0xe867f07aad079559d1e5f82f1aaf60090d9d6eed7c10c889852e89313f1ea446",
"0xd0e352ba81ecbc9a12589dde8282762a0a11c1d48c8806c1904e322f5da82b60",
"0xaf979574eaca1041b2febfc4d8b82446312d491cc4d92ce248bb59a50c8b691d",
"0xe226861f0f72e7407e52b33af36ac1f10a9e2598758f8a2f55781b165e18b360",
"0x3de534de0250d2a1331b3644bf3ad17212880fe35956728bd5c8fa98c2dd72dd",
"0xd9e758d5e1cb5c4cdaa995e2efbfd819e01a8cb1c75a634ee96ea9d4666dc2e9"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
