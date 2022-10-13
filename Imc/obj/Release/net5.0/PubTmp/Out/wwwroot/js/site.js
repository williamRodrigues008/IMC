async function calcularImc() {
    var peso = document.querySelector("#peso")
    var altura = document.querySelector("#altura")
    var imc = 0;
    const pesoAltura = JSON.stringify({
        "Peso": peso.value,
        "Altura": altura.value
    })

    $(document).ready(function () {
        $(".realizarCalculo").click(function () {
            $("#modalRetonoResultado").modal("show")
        })
    })

    if ((peso.value == "") || (altura.value == "")) {
        return $("#mensagemImc").html("Os campos Peso e Altura não podem estar vazio")
    }

    try {

        $.ajax({
            type: 'POST',
            url: '/Calcular',
            data: { pesoAltura: pesoAltura },
            success: function (resposta) {
                imc = resposta.toFixed(2);
                if (imc < 18.5) {
                    $("#mensagemImc").html(`Seu IMC deu ${imc}, você está abaixo do peso`)
                }
                else if (imc >= 18.5 && imc <= 24.9) {
                    $("#mensagemImc").html(`Seu IMC deu ${imc}, você está no peso ideal, parabéns`)
                }
                else if (imc >= 25 && imc <= 29.9) {
                    $("#mensagemImc").html(`Seu IMC deu ${imc}, você está acima do peso`)
                }
                else if (imc >= 30 && imc <= 34.9) {
                    $("#mensagemImc").html(`Seu IMC deu ${imc}, você está no quadro: Obesidade I`)
                }
                else if (imc >= 35 && imc <= 39.9) {
                    $("#mensagemImc").html(`Seu IMC deu ${imc}, você está no quadro: Obesidade II`)
                }
                else if (imc >= 40) {
                    $("#mensagemImc").html(`Seu IMC deu ${imc}, você está no quadro: Obesidade III`)
                }
            },
            error: function (xhr, status, error) { }
        })

    }
    catch (erro) {
        console.error(erro)
    }
}