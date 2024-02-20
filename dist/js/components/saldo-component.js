import { FormatoData } from '../types/FormatoData.js';
import { formatarData, formatarMoeda } from '../utils/formartters.js';
const elementoSaldo = document.querySelector('.saldo-valor .valor');
const elementoDataAcesso = document.querySelector('.block-saldo time');
if (elementoDataAcesso != null) {
    const dataAcesso = new Date();
    elementoDataAcesso.textContent = formatarData(dataAcesso, FormatoData.DIA_SEMANA_DTA_MES_ANO);
}
let saldo = 3000;
atualizaSaldo(saldo);
function getSaldo() {
    return saldo;
}
function atualizaSaldo(novoSaldo) {
    saldo = novoSaldo;
    if (elementoSaldo != null) {
        elementoSaldo.textContent = formatarMoeda(saldo);
    }
}
export { getSaldo, atualizaSaldo };
