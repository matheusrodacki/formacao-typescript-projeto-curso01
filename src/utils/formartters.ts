import { FormatoData } from '../types/FormatoData.js';

function formatarMoeda(valor: number): string {
  return valor.toLocaleString('pt-br', { currency: 'BRL', style: 'currency' });
}

function formatarData(data: Date, formato: FormatoData = FormatoData.PADRAO): string {
  if (formato === FormatoData.DIA_SEMANA_DTA_MES_ANO) {
    return data.toLocaleDateString('pt-br', {
      weekday: 'long',
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  } else if (formato === FormatoData.DIA_MES) {
    return data.toLocaleDateString('pt-br', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  } else {
    return data.toLocaleDateString('pt-br');
  }
}

export { formatarMoeda, formatarData };
