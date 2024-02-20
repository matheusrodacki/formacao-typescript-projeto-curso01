let saldo: number = 3000;

const elementoSaldo = document.querySelector('.saldo-valor .valor') as HTMLElement;
const elementoDataAcesso = document.querySelector('.block-saldo time');

elementoSaldo.textContent = formatarMoeda(saldo);

if (elementoDataAcesso != null) {
  const dataAcesso: Date = new Date();
  elementoDataAcesso.textContent = formatarData(dataAcesso, FormatoData.DIA_SEMANA_DTA_MES_ANO);
}
