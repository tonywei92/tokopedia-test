import CurrencyDenominator from './CurrencyDenominator';

const curDenominator = new CurrencyDenominator();

test('Test "8000"       should equal 1000: 3,  5000: 1, moneyleft: 0', () => {
    expect(curDenominator.get(8000)).toEqual({
        values: {
            50: 0,
            100: 0,
            500: 0,
            1000: 3,
            5000: 1,
            10000: 0,
            20000: 0,
            50000: 0,
            100000: 0
        },
        unit: 'Rp',
        money: 8000,
        moneyleft: "0.00"
    });
});

test('Test "123020"      should equal 1000: 3, 20000: 1, 100000: 1, moneyleft: 20', () => {
    expect(curDenominator.get(123020)).toEqual({
        values: {
            50: 0,
            100: 0,
            500: 0,
            1000: 3,
            5000: 0,
            10000: 0,
            20000: 1,
            50000: 0,
            100000: 1
        },
        unit: 'Rp',
        money: 123020,
        moneyleft: "20.00"
    });
});