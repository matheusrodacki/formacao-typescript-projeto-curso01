var saldoAtual = 3000;
var elementoSaldo = document.querySelector('.saldo-valor .valor');
elementoSaldo.textContent = saldoAtual.toString();
var elementoFormulario = document.querySelector('.block-nova-transacao form');
elementoFormulario.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!elementoFormulario.checkValidity()) {
        alert('Por favor, preencha todos dos campos da transação');
    }
    var inputTipoTransacao = elementoFormulario.querySelector('#tipoTransacao');
    var inputValor = elementoFormulario.querySelector('#valor');
    var inputData = elementoFormulario.querySelector('#data');
    var tipoTransacao = inputTipoTransacao.value;
    var valor = inputValor.valueAsNumber;
    var exp = /-/g;
    var data = new Date(inputData.value.replace(exp, ','));
    if (tipoTransacao === 'Depósito') {
        saldoAtual += valor;
    }
    else if (tipoTransacao === 'Transferência' || tipoTransacao === 'Pagamento de Boleto') {
        saldoAtual -= valor;
    }
    else {
        throw new Error('Tipo de transação inválida');
    }
    elementoSaldo.textContent = saldoAtual.toString();
    var novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data,
    };
    console.log(novaTransacao);
    elementoFormulario.reset();
});
