import CurrencyValidator from './CurrencyValidator';

const curValidator = new CurrencyValidator();

// should VALID tests
test('Test "18.215"      should be valid with suggestion', () => {
    expect(curValidator.validate('18.215').code).toBe(1);
});

test('Test "Rp17500"     should be valid with suggestion', () => {
    expect(curValidator.validate('Rp17500').code).toBe(1);
});

test('Test "Rp17.500,00" should be valid with suggestion', () => {
    expect(curValidator.validate('Rp17.500,00').code).toBe(1);
});

test('Test "Rp 120.325"  should be valid with suggestion', () => {
    expect(curValidator.validate('Rp 120.325').code).toBe(1);
});

test('Test "005.000"     should be valid with suggestion', () => {
    expect(curValidator.validate('005.000').code).toBe(1);
});

test('Test "001000"      should be valid with suggestion', () => {
    expect(curValidator.validate('001000').code).toBe(1);
});

// should INVALID tests and have suggestion
test('Test "17,500"      should be invalid with suggestion', () => {
    expect(curValidator.validate('17,500').code).toBe(2);
});

test('Test "2 500"       should be invalid with suggestion', () => {
    expect(curValidator.validate('2 500').code).toBe(2);
});

test('Test "3000 Rp"     should be invalid with suggestion', () => {
    expect(curValidator.validate('3000 Rp').code).toBe(2);
});

// should INVALID tests and NOT having any suggestion
test('Test "Rp"          should be invalid and no suggestion', () => {
    expect(curValidator.validate('Rp').code).toBe(0);
});

test('Test "asasdasd"    should be invalid and no suggestion', () => {
    expect(curValidator.validate('asasdasd').code).toBe(0);
});

test('Test empty text    should be invalid and no suggestion', () => {
    expect(curValidator.validate('').code).toBe(-1);
});