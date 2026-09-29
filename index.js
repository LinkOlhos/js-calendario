let mes = document.querySelector("#mes")
let dia = document.querySelector("#dia")
let meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

for(let m = 0; m < meses.length; m++){
    mes.innerHTML += `<option class="text-black">${meses[m]}</option>`;
    
}

for(let d = 1; d <= 31; d++){
    dia.innerHTML += `<option class="text-black">${d}</option>`;
}

function descobrirNome() {
    let valorMes = mes.value;
    let valorDia = Number(dia.value);

    let parteMes = "";
    let parteDia = "";

    switch (valorMes) {
        case "Jan": parteMes = "Pedrinho"; break;
        case "Fev": parteMes = "Betão"; break;
        case "Mar": parteMes = "Paulinho"; break;
        case "Abr": parteMes = "Léozinho"; break;
        case "Mai": parteMes = "Fernando"; break;
        case "Jun": parteMes = "Arlindo"; break;
        case "Jul": parteMes = "Jorginho"; break;
        case "Ago": parteMes = "Carlão"; break;
        case "Set": parteMes = "Fabinho"; break;
        case "Out": parteMes = "Elias"; break;
        case "Nov": parteMes = "Marcão"; break;
        case "Dez": parteMes = "Tião"; break;
        default: parteMes = "";
    }

    switch (valorDia) {
        case 1: parteDia = "Supino"; break;
        case 2: parteDia = "Agachamento"; break;
        case 3: parteDia = "Creatina"; break;
        case 4: parteDia = "Whey"; break;
        case 31: parteDia = "Trincado"; break;
        default: parteDia = "";
    }

   alert(`Seu nome é: ${parteMes} ${parteDia}`)
}


