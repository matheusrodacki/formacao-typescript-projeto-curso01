import '../css/app.css';
let saldo = 3000;
const elementoSaldo = document.querySelector('.saldo-valor .valor');
elementoSaldo.textContent = saldo.toString();
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
    if (tipoTransacao === 'Depósito') {
        saldo += valor;
    }
    else if (tipoTransacao === 'Transferência' || tipoTransacao === 'Pagamento de Boleto') {
        saldo -= valor;
    }
    else {
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
