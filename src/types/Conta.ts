import { TipoTransacao } from './TipoTransacao.js';
import { Transacao } from './Transacao.js';

let saldo: number = JSON.parse(localStorage.getItem('saldo')) || 0;
const transacoes: Transacao[] =
  JSON.parse(localStorage.getItem('transacoes'), (key: string, value: string) => {
    if (key === 'data') {
      return new Date(value);
    }
    return value;
  }) || [];

function debitar(valor: number): void {
  if (valor <= 0) {
    throw new Error('O valor a ser debitado deve ser maior que zero!');
  } else if (valor > saldo) {
    throw new Error('Saldo insuficiente!');
  }
  saldo -= valor;
  localStorage.setItem('saldo', saldo.toString());
}

function depositar(valor: number): void {
  if (valor <= 0) {
    throw new Error('Saldo insuficiente!');
  }
  saldo += valor;
  localStorage.setItem('saldo', saldo.toString());
}

const Conta = {
  getSaldo(): number {
    return saldo;
  },
  getDataAcesso(): Date {
    return new Date();
  },

  registrarTransacao(novaTransacao: Transacao): void {
    if (novaTransacao.tipoTransacao === TipoTransacao.DEPOSITO) {
      depositar(novaTransacao.valor);
    } else if (
      novaTransacao.tipoTransacao === TipoTransacao.TRANSFERENCIA ||
      novaTransacao.tipoTransacao === TipoTransacao.PAGAMENTO_BOLETO
    ) {
      debitar(novaTransacao.valor);
    } else {
      throw new Error('Tipo de transação é inválida');
    }

    transacoes.push(novaTransacao);
    localStorage.setItem('transacoes', JSON.stringify(transacoes));
  },
};

export default Conta;
