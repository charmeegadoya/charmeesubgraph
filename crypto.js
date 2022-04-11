//import { randomBytes } from 'crypto';
const crypto = require('crypto');
const buf = crypto.randomBytes(32);
console.log('Random Buffer: ', buf.toString('hex'));
//data should be passed in ethgregistrar controller -->["0x666f6f0000000000000000000000000000000000000000000000000000000000","0x6261720000000000000000000000000000000000000000000000000000000000"]

//0x0000000000000000000000000000000000000000000000000000000000000000
//0xaE036c65C649172b43ef7156b009c6221B596B8b
//0x0000000000000000000000000000000000000000

//https://ethereum.stackexchange.com/questions/117281/error-on-remix-creation-of-ballot-errored-error-encoding-arguments-error-exp

// const CoinGecko = require('coingecko-api');
// const CoinGeckoClient = new CoinGecko();

// module.exports= func = async() => {
//     let data = await CoinGeckoClient.ping();
    
//   };
//   console.log(data);
// $.getJSON("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd", function(data){
//     //$("#BTCPrice").text(data["usd"].toFixed(2));
//     console.log(data["bitcoin"]["usd"]);
// }).fail(function( dat, textStatus, error ) {
//     var err = textStatus + ", " + error;
//     console.log(err);
// });


//     let data =  CoinGeckoClient.exchanges.fetchTickers('bitfinex', {
//         coin_ids: ['bitcoin']
//     });
//     var _coinList = {};
//     var _datacc = data.data.tickers.filter(t => t.target == 'USD');
//     [
//         'BTC'
//     ].forEach((i) => {
//         var _temp = _datacc.filter(t => t.base == i);
//         var _res = _temp.length == 0 ? [] : _temp[0];
//         _coinList[i] = _res.last;
//     })
// console.log(_coinList);
// var fs = require('fs');
// //var jsonArtifactsFile = "./build/contracts/Election.json";
// var jsonFile = "./build/contracts/Election.json";
// var parsed= JSON.parse(fs.readFileSync(jsonFile));
// var abi = parsed.abi;
//console.log(abi);



// const POLL_INTERVAL = 5000; //5s
// const CoinGecko = require('coingecko-api');
// const CoinGeckoClient = new CoinGecko();



//     const interval = setInterval(function() {
//         // method to be executed;
    
//     const response =  CoinGeckoClient.coins.fetch('bitcoin', {}).then((data)=>{
//         let currentPrice = parseFloat(data.data.market_data.current_price.usd);
//         currentPrice = parseInt(currentPrice * 100);
//         console.log(`new price for BTC/USD ${currentPrice} updated on-chain`);
//         //new Promise((resolve, _) => setInterval(resolve, POLL_INTERVAL)); 

//     }).catch((error) => {
//         console.log("Data Not Found");
//     });

// }, 5000);
     



//     let data =  CoinGeckoClient.exchanges.fetchTickers('bitfinex', {
//         coin_ids: ['bitcoin', 'ethereum', 'ripple', 'litecoin', 'stellar']
//     }).then((data) => {
//         this.data = data;
//         var _coinList = {};
//         var _datacc = data.data.tickers.filter(t => t.target == 'USD');
//         [
//             'BTC',
//             'ETH',
//             'XRP',
//             'LTC',
//             'XLM'
//         ].forEach((i) => {
//             var _temp = _datacc.filter(t => t.base == i);
//             var _res = _temp.length == 0 ? [] : _temp[0];
//             _coinList[i] = _res.last;
//         })
//         console.log(_coinList);
     
//  });
  

