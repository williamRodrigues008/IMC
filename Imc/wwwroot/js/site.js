async function calcularImc() {
    var peso = document.querySelector("#peso")
    var altura = document.querySelector("#altura")
    var imc = 0;
     const pesoAltura = JSON.stringify({
                "Peso": peso.value,
         "Altura": altura.value
            })

    console.log(pesoAltura)

    try {

        $.ajax({
            type: 'POST',
            url: '/Calcular',
            data: { pesoAltura: pesoAltura },
            success: function (resposta) {
                imc = resposta.toFixed(2);
                console.log(imc)
                if (imc < 18.5) {
                    $("#mensagemImc").html(`Seu IMC deu ${imc}, você está abaixo do peso`).fadein()
                }
                else if (imc >= 18.5 && imc <= 24.9) {
                    $("#mensagemImc").html(`Seu IMC deu ${imc}, você está no peso ideal, parabéns`).fadein()
                }
                else if (imc >= 25 && imc <= 29.9) {
                    $("#mensagemImc").html(`Seu IMC deu ${imc}, você está acima do peso`).fadein()
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

        //await fetch("https://localhost:44379/Calcular", { method: 'POST', headers: { 'content-type': 'application/json', 'Content-Type': 'application/json; charset=utf-8' }, body: pesoAltura })
        //    .then(function (response) {
        //        if (response.ok) {
        //            $(".mensagemImc").html("Seu IMC deu ")
        //            return response.text()
        //        }
        //        throw new Error("Erro da requisição")
        //    })
        //    .then(function (text) {
        //        console.log("Sucesso na requisição" + text)
        //    })
        //    .catch(function (erro) {
        //        console.log("ERRO DE REQ " + erro)
        //    })
    }
    catch (erro) {
        console.error(erro)
    }
}