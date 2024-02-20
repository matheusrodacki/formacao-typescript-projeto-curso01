import { TipoTransacao } from '../types/TipoTransacao.js';
import { atualizaSaldo, getSaldo } from './saldo-component.js';
const elementoFormulario = document.querySelector('.block-nova-transacao form');
elementoFormulario.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!elementoFormulario.checkValidity()) {
        alert('Por favor, preencha todos dos campos da transação');
    }
    const inputTipoTransacao = elementoFormulario.querySelector('#tipoTransacao');
    const inputValor = elementoFormulario.querySelector('#valor');
    const inputData = elementoFormulario.querySelector('#data');
    let tipoTransacao = inputTipoTransacao.value;
    let valor = inputValor.valueAsNumber;
    const exp = /-/g;
    let data = new Date(inputData.value.replace(exp, ','));
    let saldo = getSaldo();
    if (tipoTransacao === TipoTransacao.DEPOSITO) {
        saldo += valor;
    }
    else if (tipoTransacao === TipoTransacao.TRANSFERENCIA || tipoTransacao === TipoTransacao.PAGAMENTO_BOLETO) {
        saldo -= valor;
    }
    else {
        throw new Error('Tipo de transação inválida');
    }
    atualizaSaldo(saldo);
    const novaTransacao = {
        tipoTransacao,
        valor,
        data,
    };
    console.log(novaTransacao);
    elementoFormulario.reset();
});
