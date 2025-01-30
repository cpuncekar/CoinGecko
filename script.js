async function fetchCryptoData() {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd');
    const data = await response.json();
    document.getElementById('crypto-container').innerHTML = `
        <div>Bitcoin (BTC): $${data.bitcoin.usd}</div>
        <div>Ethereum (ETH): $${data.ethereum.usd}</div>
    `;
}

fetchCryptoData();