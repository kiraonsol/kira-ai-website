// Live Price Tracker
async function fetchPrice() {
    const display = document.getElementById('price-display');
    try {
        const response = await fetch('https://public-api.birdeye.so/defi/price?address=GyCNKRGU5t7mvVQVyrtP1hPwdq1V29GAP54HvwhVpump');
        const data = await response.json();
        if (data.data) {
            const price = data.data.value.toFixed(8);
            display.innerHTML = `
                <p>Current Price: <strong>$${price}</strong> USD</p>
                <p>✨ Keep exploring the cosmos ✨</p>
            `;
        }
    } catch (e) {
        display.innerHTML = `<p>Price data loading... <a href="https://dexscreener.com/solana/dznxnmgy3ys8pvtzdz8ypjsaczce5dbdhfsefkxu926c" target="_blank">Dexscreener</a></p>`;
    }
}

function calculateKira() {
    const solInput = document.getElementById('sol-amount').value;
    const resultDiv = document.getElementById('calc-result');
    if (!solInput || isNaN(solInput)) {
        resultDiv.innerHTML = '<p class="error">Enter a valid SOL amount! 💖</p>';
        return;
    }
    const pricePerKira = 0.000002;
    const kiraAmount = (parseFloat(solInput) / pricePerKira).toFixed(0);
    resultDiv.innerHTML = `
        <p>✨ With ${solInput} SOL you can get approximately <strong>${kiraAmount} $KIRA</strong> ✨</p>
        <p class="kawaii-reaction">Kira is happy! 🌙</p>
    `;
}

window.onload = () => {
    fetchPrice();
    setInterval(fetchPrice, 30000);
};