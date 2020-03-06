let botao = document.querySelector("#botão-adicionar")
let lista = document.querySelector("#lista")

botao.addEventListener("click", function () {
    let entrada = document.querySelector(".entrada").value;
    if(entrada != 0){
    let li = document.createElement("li");
    li.textContent = entrada;
    lista.appendChild(li);
    console.log();
    }
       
})




