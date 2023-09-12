const { expect } = require('chai');
const { calcularIMC, calcularPesoIdeal } = require('../src/imc');

describe('Calculadora de IMC', () => {

  it('Calculadora deve rodar tranquilo', () => {
    const peso = 80; // 80 kg
    const altura = 180; // 180 cm

    const IMEsperado = (peso / Math.pow(altura / 100, 2)).toFixed(2);
    const IMCCalculado = calcularIMC(peso, altura);

    expect(IMCCalculado).to.equal(IMEsperado);
  });

  it('altura = 0, entrada inadequada', () => {
    const peso = 70; // 70 kg
    const altura = 0; // 0 cm

    const IMCCalculado = calcularIMC(peso, altura);

    expect(IMCCalculado).to.equal('NaN');
  });

  it('Peso ideal ok', () => {
    const altura = 170; // 170 cm
    const imcMin = 18.6;
    const imcMax = 24.9;

    peso_expected = []
    peso_expected.push((Math.pow(altura / 100, 2)*imcMin).toFixed(2))
    peso_expected.push((Math.pow(altura / 100, 2)*imcMax).toFixed(2))

    const IMCCalculado = calcularPesoIdeal(imcMin,imcMax, altura);

    // Verifica o tamanho do vetor
    expect(IMCCalculado.length).to.equal(peso_expected.length);

    // Verifica os elementos do vetor
    for (let i = 0; i < IMCCalculado.length; i++) {
      expect(IMCCalculado[i]).to.equal(peso_expected[i]);
    }
  });

  it('Peso ideal altura 0, entrada inadequada', () => {
    const altura = 0; // 0 cm
    const imcMin = 18.6;
    const imcMax = 24.9;
    peso_expected = []

    peso_expected.push('NaN')
    peso_expected.push('NaN')

    const IMCCalculado = calcularPesoIdeal(imcMin, imcMax, altura);

    // Verifica o tamanho do vetor
    expect(IMCCalculado.length).to.equal(peso_expected.length);

    // Verifica os elementos do vetor
    for (let i = 0; i < IMCCalculado.length; i++) {
      expect(IMCCalculado[i]).to.equal(peso_expected[i]);
    }
  });

  it('Peso ideal altura negativa, entrada inadequada', () => {
    const altura = -1; // -1 cm
    const imcMin = 18.6;
    const imcMax = 24.9;
    peso_expected = []

    peso_expected.push('NaN')
    peso_expected.push('NaN')

    const IMCCalculado = calcularPesoIdeal(imcMin, imcMax, altura);
  
    // Verifica o tamanho do vetor
    expect(IMCCalculado.length).to.equal(peso_expected.length);

    // Verifica os elementos do vetor
    for (let i = 0; i < IMCCalculado.length; i++) {
      expect(IMCCalculado[i]).to.equal(peso_expected[i]);
    }
  });
});