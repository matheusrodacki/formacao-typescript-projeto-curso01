import Conta from '../types/Conta.js';
import SaldoComponent from './saldo-component.js';
const elementoFormulario = document.querySelector('.block-nova-transacao form');
elementoFormulario.addEventListener('submit', (event) => {
    try {
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
        const novaTransacao = {
            tipoTransacao,
            valor,
            data,
        };
        Conta.registrarTransacao(novaTransacao);
        SaldoComponent.atualizar();
        elementoFormulario.reset();
    }
    catch (error) {
        alert(error.message);
    }
});
