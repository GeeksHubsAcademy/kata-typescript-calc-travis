import { Calculadora } from "./test01";

test('Test suma para Calculadora con parametros a: 0 , b: 0', function () {
    let calc = new Calculadora();
    var expected = 0;
    var result = calc.suma(0,0);
    expect(result).toBe(expected);
});

test('Test suma para Calculadora con parametros a: 0 , b: 1', function () {
    let calc = new Calculadora();
    var expected = 1;
    var result = calc.suma(0,1);
    expect(result).toBe(expected);
});

test('Test suma para Calculadora con parametros a: 3 , b: 4', function () {
    let calc = new Calculadora();
    var expected = 7;
    var result = calc.suma(3,4);
    expect(result).toBe(expected);
});

test('Test suma para Calculadora con parametros a: -5 , b: 2', function () {
    let calc = new Calculadora();
    var expected = -3;
    var result = calc.suma(-5,2);
    expect(result).toBe(expected);
});

test('Test resta para Calculadora con parametros a: 2 , b:-2', function () {
    let calc = new Calculadora();
    var expected = 4;
    var result = calc.resta(2,-2)
    expect(result).toBe(expected);
});

test('Test resta para Calculadora con parametros a: 0 , b: 0', function () {
    let calc = new Calculadora();
    var expected = 0;
    var result = calc.resta(0,0)
    expect(result).toBe(expected);
});

test('Test resta para Calculadora con parametros a: 2 , b: 5', function () {
    let calc = new Calculadora();
    var expected = -3;
    var result = calc.resta(2,5)
    expect(result).toBe(expected);
});

test('Test resta para Calculadora con parametros a: 2 , b:-5', function () {
    let calc = new Calculadora();
    var expected = 7;
    var result = calc.resta(2,-5);
    expect(result).toBe(expected);
});

test('Test multiplicacion para Calculadora con parametros a: 2 , b: 0', function () {
    let calc = new Calculadora();
    var expected = 0;
    var result = calc.multiplicacion(2,0);
    expect(result).toBe(expected);
});

test('Test multiplicacion para Calculadora con parametros a: 2 , b: 5', function () {
    let calc = new Calculadora();
    var expected = 10;
    var result = calc.multiplicacion(2,5);
    expect(result).toBe(expected);
});

test('Test division para Calculadora con parametros a: 1 , b: ', function () {
    let calc = new Calculadora();
    var expected = 0.5;
    var result = calc.division(1,2);
    expect(result).toBe(expected);
});

test('Test division para Calculadora con parametros a: 1 , b: 0 ', function () {
    let calc = new Calculadora();
    var expected = Infinity;
    var result = calc.division(1,0);
    expect(result).toBe(expected);
});

test('Test division para Calculadora con parametros a: 1 , b: Infinity ', function () {
    let calc = new Calculadora();
    var expected = 0;
    var result = calc.division(1,Infinity);
    expect(result).toBe(expected);
});
