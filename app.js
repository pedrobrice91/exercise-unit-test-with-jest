const sum = function(a, b) {
    return a + b
}
const fromEuroToDollar = function(valorEuro){
    let euro = valorEuro * 1.07
    return euro
}

const fromDollarToYen = function (valorDollar){
    let dollarToEuro = 1/1.07
    let dollarYen = dollarToEuro * 156.5
    return dollarYen
}

const fromYenToPound = function (valorYen){
    let YenToEuro = 1/156.5
    let YenPound = YenToEuro * 0.87
    return YenPound
}
module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}
