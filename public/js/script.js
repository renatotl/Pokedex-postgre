const closeMessage = document.querySelector("#close")// acessar dom e selecionar o close com o queryselector
const message = document.querySelector("#message")//acessa o documento e queryselector nela #message

closeMessage.addEventListener("click", function (){// add evento de click
    message.style.display = "none" // SUMA
})

setTimeout(() => {
    message.style.display = "none" // SUMA

  }, 3000);

  // foi necessário cliar uma pasta dentro de public com o arquivo script.js com esse code em cima para podemos controlar a mensagem 

  