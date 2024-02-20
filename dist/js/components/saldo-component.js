import Conta from '../types/Conta.js';
import { formatarMoeda } from '../utils/formartters.js';
const elementoSaldo = document.querySelector('.saldo-valor .valor');
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
