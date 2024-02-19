import '../css/app.css';
let saldo: number = 3000;

const elementoSaldo = document.querySelector('.saldo-valor .valor') as HTMLElement;

elementoSaldo.textContent = saldo.toString();

const elementoFormulario = document.querySelector('.block-nova-transacao form') as HTMLFormElement;

elementoFormulario.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!elementoFormulario.checkValidity()) {
    alert('Por favor, preencha todos dos campos da transação');
  }

  const inputTipoTransacao = elementoFormulario.querySelector('#tipoTransacao') as HTMLSelectElement;
  const inputValor = elementoFormulario.querySelector('#valor') as HTMLInputElement;
  const inputData = elementoFormulario.querySelector('#data') as HTMLInputElement;

  let tipoTransacao: string = inputTipoTransacao.value;
  let valor: number = inputValor.valueAsNumber;
  const exp: RegExp = /-/g;
  let data: Date = new Date(inputData.value.replace(exp, ','));

  if (tipoTransacao === 'Depósito') {
    saldo += valor;
  } else if (tipoTransacao === 'Transferência' || tipoTransacao === 'Pagamento de Boleto') {
    saldo -= valor;
  } else {
    throw new Error('Tipo de transação inválida');
  }

  elementoSaldo.textContent = saldo.toString();

  const novaTransacao = {
    tipoTransacao,
    valor,
    data,
  };

  console.log(novaTransacao);
  elementoFormulario.reset();
});
