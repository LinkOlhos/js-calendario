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

    let nome = "";

    switch (valorMes) {
        case "Jan": nome = "Exterminador"; break;
        case "Fev": nome = "Destruidor"; break;
        case "Mar": nome = "Aniquilador"; break;
        case "Abr": nome = "Crista"; break;
        case "Mai": nome = "Galinácio"; break;
        case "Jun": nome = "Garras"; break;
        case "Jul": nome = "Carijó"; break;
        case "Ago": nome = "Bico"; break;
        case "Set": nome = "Avião"; break;
        case "Out": nome = "Galo"; break;
        case "Nov": nome = "Decaptador"; break;
        case "Dez": nome = "Adestrador"; break;
        default: nome = ""; break;
    }

    switch (valorDia) {
        case 1: nome  += " De Frangotes"; break;
        case 2: nome += " De Ouro"; break;
        case 3: nome += " Cibernético"; break;
        case 4: nome += " Despenador(a)"; break;
        case 5: nome += " Voador(a)"; break;
        case 6: nome += " De Metal"; break;
        case 7: nome += " Metalíco(a)"; break;
        case 8: nome += " De Galinhas"; break;
        case 9: nome += " Perigosa(o)"; break;
        case 10: nome += " Cauteloso"; break;
        case 11: nome += " Bomba"; break;
        case 12: nome += " Sombrio"; break;
        case 13: nome += " Assombrado"; break;
        case 14: nome += " Fervente"; break;
        case 15: nome += " De Precisão"; break;
        case 16: nome += " Calculista"; break;
        case 17: nome += " Ligelro"; break;
        case 18: nome += " Tóxico"; break;
        case 19: nome += " Planador(a)"; break;
        case 20: nome += " Guerreiro"; break;
        case 21: nome += " Samurai"; break;
        case 22: nome += " Ninja"; break;
        case 23: nome += " Do Futuro"; break;
        case 24: nome += " Do Passado"; break;
        case 25: nome += " Horripilante"; break;
        case 26: nome += " Raivoso"; break;
        case 27: nome += " Modificado(a)"; break;
        case 28: nome += " Poderoso(a)"; break;
        case 29: nome += " Incontrolável"; break;
        case 30: nome += " Despreparado(a)"; break;
        case 31: nome += " Radiotivo(a)"; break;
        default: nome += ""; break;
    }

   alert(`Seu nome é: ${nome}`)
}