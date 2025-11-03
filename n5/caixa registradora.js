function checkCashRegister(preco, pagamento, caixaEmDinheiro) {
  const VALORES_MOEDA = {
    "PENNY": 1,
    "NICKEL": 5,
    "DIME": 10,
    "QUARTER": 25,
    "ONE": 100,
    "FIVE": 500,
    "TEN": 1000,
    "TWENTY": 2000,
    "ONE HUNDRED": 10000
  };

  let trocoDevido = Math.round((pagamento - preco) * 100);
  let totalNoCaixa = 0;
  const trocoParaRetornar = [];
  const cidRevertido = caixaEmDinheiro.slice().reverse();

  for(let elemento of cidRevertido) {
      totalNoCaixa += Math.round(elemento[1] * 100); 
  }

  if(totalNoCaixa < trocoDevido) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }

  if(totalNoCaixa === trocoDevido) {
    return {status: "CLOSED", change: caixaEmDinheiro};
  }
  
  for(let [nomeUnidade, totalUnidade] of cidRevertido) {
    let totalDisponivelNaUnidade = Math.round(totalUnidade * 100); 
    const valorUnitario = VALORES_MOEDA[nomeUnidade];
    let quantidadeADar = 0; 

    while(trocoDevido >= valorUnitario && totalDisponivelNaUnidade > 0) {
      trocoDevido -= valorUnitario; 
      totalDisponivelNaUnidade -= valorUnitario;
      quantidadeADar += valorUnitario;
    }   
    if(quantidadeADar > 0) {
      trocoParaRetornar.push([nomeUnidade, quantidadeADar / 100]);
    }
  }
  if(trocoDevido > 0) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }

  return {status: "OPEN", change: trocoParaRetornar};
}