const {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound} = require ('./app.js')

test('adds 14 + 9 to equal 23', () => {
    let total = sum (14,9)
    expect(total).toBe(23)
})

test ('adds 3 euros and result 3*1.07', () => {
    let resultad = 3*1.07
    expect (resultad).toBe(3.21)
})

test('adds 10 dollars and result pass valor to Euro and to Euro to yen', ()=>{
    let dollarYen = 1/1.07 * 156.5
    expect(dollarYen).toBe(146.26168224299064)
})

    test('adds 10 Yens and result pass valor to Euro and to Euro to british pound', ()=>{
        let dollarYen = 1/156.5 * 0.87
        expect(dollarYen).toBe(0.0055591054313099035)
})
