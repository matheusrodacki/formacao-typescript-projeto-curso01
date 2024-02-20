import { FormatoData } from '../types/FormatoData.js';
import { formatarData, formatarMoeda } from '../utils/formartters.js';

const elementoSaldo = document.querySelector('.saldo-valor .valor') as HTMLElement;
const elementoDataAcesso = document.querySelector('.block-saldo time') as HTMLElement;

if (elementoDataAcesso != null) {
  const dataAcesso: Date = new Date();
  elementoDataAcesso.textContent = formatarData(dataAcesso, FormatoData.DIA_SEMANA_DTA_MES_ANO);
}

let saldo: number = 3000;
atualizaSaldo(saldo);

function getSaldo(): number {
  return saldo;
}

function atualizaSaldo(novoSaldo: number): void {
  saldo = novoSaldo;
  if (elementoSaldo != null) {
    elementoSaldo.textContent = formatarMoeda(saldo);
  }
}

export { getSaldo, atualizaSaldo };
