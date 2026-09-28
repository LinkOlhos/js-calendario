let mes = document.querySelector("#mes")
let dia = document.querySelector("#dia")
let meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

for(let m = 0; m < meses.length; m++){
    mes.innerHTML += `<option class="text-black">${meses[m]}</option>`;
    
}

for(let d = 1; d <= 31; d++){
    dia.innerHTML += `<option class="text-black">${d}</option>`;
}

if

function  descobrirNome(){
    console.log(mes.value);
    console.log(dia.value);
}