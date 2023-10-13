function calcularIMC(peso, altura) 
{
    if (altura === 0) 
    {
      return 'NaN'; // Retorna "NaN" se a altura for igual a zero
    }

    const alturaMetros = altura / 100; // Converte altura de centímetros para metros
    return (peso / (alturaMetros * alturaMetros)).toFixed(2); // Calcula o IMC com duas casas decimais
}

function calcularPesoIdeal(imcIdealMin, imcIdealMax, altura)
{
  var pesos = [] // Vetor que armanezará os pesos ideais

  // Entrada inválida se a altura for menor ou igual a zero
  if (altura <= 0) 
  {
    pesos.push('NaN')
    pesos.push('NaN')

    return pesos
  }

  const alturaMetros = altura / 100; // Converte altura de centímetros para metros

  pesos.push((imcIdealMin * alturaMetros * alturaMetros).toFixed(2)) // Cálcula o peso ideal mínimo
  pesos.push((imcIdealMax * alturaMetros * alturaMetros).toFixed(2)) // Cálcula o peso ideal máximo

  return pesos // Retorna os pesos
}

module.exports = { calcularIMC, calcularPesoIdeal }; // Exporta as funções da calculadora