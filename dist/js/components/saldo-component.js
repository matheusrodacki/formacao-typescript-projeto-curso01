import Conta from '../types/Conta.js';
import { FormatoData } from '../types/FormatoData.js';
import { formatarData, formatarMoeda } from '../utils/formartters.js';
const elementoSaldo = document.querySelector('.saldo-valor .valor');
const elementoDataAcesso = document.querySelector('.block-saldo time');
if (elementoDataAcesso != null) {
    elementoDataAcesso.textContent = formatarData(Conta.getDataAcesso(), FormatoData.DIA_SEMANA_DTA_MES_ANO);
}
rendenizarSaldo();
function rendenizarSaldo() {
    if (elementoSaldo != null) {
        elementoSaldo.textContent = formatarMoeda(Conta.getSaldo());
    }
}
const SaldoComponent = {
    atualizar() {
        rendenizarSaldo();
    },
};
export default SaldoComponent;
