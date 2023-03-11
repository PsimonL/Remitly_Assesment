// =====================================================================================================================
// dict
const dict = {
    "CH": "chf",
    "PL": "pln",
    "EU": "eur",
    "GB": "gbp",
    "US": "usd"
};

// =====================================================================================================================
// selectors for HTML elements
const pickedCurrency1 = document.getElementById('selector1');
const pickedCurrency2 = document.getElementById('selector2');
const valueForInput = document.getElementById('enter');
const valueForOutput = document.getElementById('conversion');
const conversionButton =  document.getElementById('exchange-button');
const outputRatio = document.getElementById('conversion');

const select1 = document.getElementById('selector1');
const select2 = document.getElementById('selector2');

// =====================================================================================================================
// flag control
let fromCurr = [];
let toCurr = [];
function controlFlag(element, flagId) {
    element.addEventListener('change', function () {
        const selectedCountry = element.value;
        // console.log("selectedCountry = " + selectedCountry);
        if (flagId === "flag1") {
            fromCurr.push(selectedCountry);
        }
        if(flagId === "flag2"){
            toCurr.push(selectedCountry)
        }
        const apiUrl = 'https://www.countryflagicons.com/FLAT/64/' + selectedCountry + '.png';
        const flagImage = document.getElementById(flagId);
        flagImage.src = apiUrl;
    });
}
controlFlag(select1, 'flag1');
controlFlag(select2, 'flag2');

// =====================================================================================================================
// default settings for conversion
let curr1Val = pickedCurrency1.value;
let curr1Name = dict[curr1Val];
let curr2Val = pickedCurrency2.value;
let curr2Name = dict[curr2Val];

// =====================================================================================================================
// for button
