const conversionRates = {
    USD: {Pounds: 0.75, Euro: 0.89, Cedis: 15.80},
    EURO: {Dollar: 1.12, Pounds: 0.84, Cedis: 17.66},
    GBP: {Dollar: 1.34, Euro: 1.20, Cedis: 21.13},
    GHC: {Dollar: 0.063, Euro: 0.057, Pounds: 0.047}
};

function convertCurrencies() {
    const inputCurrency = parseFloat(document.getElementById("unit").value);
    const selectedUnit = document.getElementById("Currencytype").value;

    // Get output elements
    const USDOutput = document.getElementById("USD");
    const GBPOutput = document.getElementById("GBP");
    const EUROOutput = document.getElementById("EURO");
    const GHCOutput = document.getElementById("GHC");

    // Hide all outputs initially
    USDOutput.style.display = "none";
    GBPOutput.style.display = "none";
    EUROOutput.style.display = "none";
    GHCOutput.style.display = "none";

 
    if (isNaN(inputCurrency) || selectedUnit === "default") {
        return;
    }

    // Conversion logic for USD
    if (selectedUnit === "USD") {
        GBPOutput.style.display = "block";
        GBPOutput.innerHTML = `GBP: ${(inputCurrency * conversionRates.USD.Pounds).toFixed(2)}`;
        EUROOutput.style.display = "block";
        EUROOutput.innerHTML = `EURO: ${(inputCurrency * conversionRates.USD.Euro).toFixed(2)}`;
        GHCOutput.style.display = "block";
        GHCOutput.innerHTML = `GHC: ${(inputCurrency * conversionRates.USD.Cedis).toFixed(2)}`;
    }

    // Conversion logic for EURO
    if (selectedUnit === "EURO") {
        USDOutput.style.display = "block";
        USDOutput.innerHTML = `USD: ${(inputCurrency * conversionRates.EURO.Dollar).toFixed(2)}`;
        GBPOutput.style.display = "block";
        GBPOutput.innerHTML = `GBP: ${(inputCurrency * conversionRates.EURO.Pounds).toFixed(2)}`;
        GHCOutput.style.display = "block";
        GHCOutput.innerHTML = `GHC: ${(inputCurrency * conversionRates.EURO.Cedis).toFixed(2)}`;
    }

    // Conversion logic for GBP
    if (selectedUnit === "GBP") {
        USDOutput.style.display = "block";
        USDOutput.innerHTML = `USD: ${(inputCurrency * conversionRates.GBP.Dollar).toFixed(2)}`;
        EUROOutput.style.display = "block";
        EUROOutput.innerHTML = `EURO: ${(inputCurrency * conversionRates.GBP.Euro).toFixed(2)}`;
        GHCOutput.style.display = "block";
        GHCOutput.innerHTML = `GHC: ${(inputCurrency * conversionRates.GBP.Cedis).toFixed(2)}`;
    }

    // Conversion logic for GHC
    if (selectedUnit === "GHC") {
        USDOutput.style.display = "block";
        USDOutput.innerHTML = `USD: ${(inputCurrency * conversionRates.GHC.Dollar).toFixed(2)}`;
        EUROOutput.style.display = "block";
        EUROOutput.innerHTML = `EURO: ${(inputCurrency * conversionRates.GHC.Euro).toFixed(2)}`;
        GBPOutput.style.display = "block";
        GBPOutput.innerHTML = `GBP: ${(inputCurrency * conversionRates.GHC.Pounds).toFixed(2)}`;
    }
}

// Add event listeners for input and currency selection
document.getElementById("unit").addEventListener("input", convertCurrencies);
document.getElementById("Currencytype").addEventListener("change", convertCurrencies);
