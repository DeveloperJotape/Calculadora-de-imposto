function calcularImpostos() {
    //Dados do formulário

    var nomeEmpresa = document.getElementById('nomeEmpresa').value
    var razaoSocial = document.getElementById('razaoSocial').value
    var cnpj = document.getElementById('cnpj').value
    var naturezaOperacao = document.getElementById('naturezaOperacao')
    var operacao = naturezaOperacao.options[naturezaOperacao.selectedIndex].value;
    var descricaoServiço = document.getElementById('descricaoServiço').value
    var valorServiço = parseFloat(document.getElementById('valorServiço').value)
    var data = document.getElementById('data').value
    var hora = document.getElementById('hora').value

    //Formatar CNPJ
    var formatCnpj = cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, "\$1.\$2.\$3/\$4-\$5");

    //Cálculo de imposto
    var calcImposto = valorServiço * 0.1
    var total = calcImposto + valorServiço

    //Exibir nota fiscal
    document.getElementById('empresa').innerText = nomeEmpresa
    document.getElementById('razao').innerText = razaoSocial
    document.getElementById('cnpjSpan').innerText = formatCnpj
    document.getElementById('operacao').innerText = operacao
    document.getElementById('descricao').innerText = descricaoServiço
    document.getElementById('dataSpan').innerText = data
    document.getElementById('horaSpan').innerText = hora
    document.getElementById('valor').innerText = valorServiço.toFixed(2)
    document.getElementById('imposto').innerText = calcImposto.toFixed(2)
    document.getElementById('total').innerText = total.toFixed(2)

    //Exibir nota fiscal
    document.getElementById('notaFiscal').style.display = 'block';
}