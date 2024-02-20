const elementoFormulario = document.querySelector('.block-nova-transacao form') as HTMLFormElement;

elementoFormulario.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!elementoFormulario.checkValidity()) {
    alert('Por favor, preencha todos dos campos da transação');
  }

  const inputTipoTransacao = elementoFormulario.querySelector('#tipoTransacao') as HTMLSelectElement;
  const inputValor = elementoFormulario.querySelector('#valor') as HTMLInputElement;
  const inputData = elementoFormulario.querySelector('#data') as HTMLInputElement;

  let tipoTransacao: TipoTransacao = inputTipoTransacao.value as TipoTransacao;
  let valor: number = inputValor.valueAsNumber;
  const exp: RegExp = /-/g;
  let data: Date = new Date(inputData.value.replace(exp, ','));

  if (tipoTransacao === TipoTransacao.DEPOSITO) {
    saldo += valor;
  } else if (tipoTransacao === TipoTransacao.TRANSFERENCIA || tipoTransacao === TipoTransacao.PAGAMENTO_BOLETO) {
    saldo -= valor;
  } else {
    throw new Error('Tipo de transação inválida');
  }

  elementoSaldo.textContent = saldo.toLocaleString('pt-br', { currency: 'BRL', style: 'currency' });

  const novaTransacao: Transacao = {
    tipoTransacao,
    valor,
    data,
  };

  console.log(novaTransacao);
  elementoFormulario.reset();
});
