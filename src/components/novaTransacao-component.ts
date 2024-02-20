import Conta from '../types/Conta.js';
import { TipoTransacao } from '../types/TipoTransacao.js';
import { Transacao } from '../types/Transacao.js';
import ExtratoComponent from './extrato-components.js';
import SaldoComponent from './saldo-component.js';

const elementoFormulario = document.querySelector('.block-nova-transacao form') as HTMLFormElement;

elementoFormulario.addEventListener('submit', (event) => {
  try {
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

    const novaTransacao: Transacao = {
      tipoTransacao,
      valor,
      data,
    };

    Conta.registrarTransacao(novaTransacao);
    SaldoComponent.atualizar();
    ExtratoComponent.atualizar();
    elementoFormulario.reset();
  } catch (error) {
    alert(error.message);
  }
});
