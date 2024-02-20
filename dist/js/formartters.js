function formatarMoeda(valor) {
    return valor.toLocaleString('pt-br', { currency: 'BRL', style: 'currency' });
}
function formatarData(data, formato = FormatoData.PADRAO) {
    if (formato === FormatoData.DIA_SEMANA_DTA_MES_ANO) {
        return data.toLocaleDateString('pt-br', {
            weekday: 'long',
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        });
    }
    else if (formato === FormatoData.DIA_MES) {
        return data.toLocaleDateString('pt-br', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
    }
    else {
        return data.toLocaleDateString('pt-br');
    }
}
