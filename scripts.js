const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-value").value

    // mpaeamento de elementos

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")  // valor em real    
    const currencyValueConverted = document.querySelector(".currency-value-converted") // valor em dolar
    const dolarToday = 5.2
    const euroToday = 6.2
    const ieneToday = 0.3
    


    // if 

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }
    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

        if (currencySelect.value == "iene") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
                style: "currency",
                currency: "JPY"
            }).format(inputCurrencyValue / ieneToday)
    

       

        

    }
    
    }
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)




function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")


    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./assents/dolar.png"
       
        
        
    }
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "euro"
        currencyImg.src = "./assents/euro.png"

    }
    if (currencySelect.value == "iene"){
        currencyName.innerHTML = "iene"
        currencyImg.src = "./assents/japao.jpg"
    }
}
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
}