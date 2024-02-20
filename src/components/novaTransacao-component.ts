import { TipoTransacao } from '../types/TipoTransacao.js';
import { Transacao } from '../types/Transacao.js';
import { atualizaSaldo, getSaldo } from './saldo-component.js';

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
  let saldo: number = getSaldo();

  if (tipoTransacao === TipoTransacao.DEPOSITO) {
    saldo += valor;
  } else if (tipoTransacao === TipoTransacao.TRANSFERENCIA || tipoTransacao === TipoTransacao.PAGAMENTO_BOLETO) {
    saldo -= valor;
  } else {
    throw new Error('Tipo de transação inválida');
  }

  atualizaSaldo(saldo);

  const novaTransacao: Transacao = {
    tipoTransacao,
    valor,
    data,
  };

  console.log(novaTransacao);
  elementoFormulario.reset();
});
