function calcularValorPresente() {
    const meta = parseFloat(document.getElementById('meta').value);
    const duracion = parseInt(document.getElementById('duracion').value);
    const retornoPorcentual = parseFloat(document.getElementById('retorno').value);
    
    const retornoPorcentualDecimal = retornoPorcentual / 100;
    const retornoMensual = Math.pow(1 + retornoPorcentualDecimal, 1/12) - 1;
    const valorPresente = meta * (1 - Math.pow(1 + retornoMensual, -duracion)) / retornoMensual;
    
    document.getElementById('resultado').innerText = `El monto inicial necesario para financiar la pensión es: ${valorPresente.toFixed(2)}`;
}

