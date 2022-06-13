// const closeMessage = document.querySelector("#close")// acessar dom e selecionar o close com o queryselector
// const message = document.querySelector("#message") acessa o documento e queryselector nela #message

// closeMessage.addEventListener("click", function (){ add evento de click
//     message.style.display = "none"  SUMA
// })

// setTimeout(() => {
//     message.style.display = "none"  SUMA

//   }, 3000);

  // foi necessário cliar uma pasta dentro de public com o arquivo script.js com esse code em cima para podemos controlar a mensagem 

  const closeAlert = () => {// function é compatível com todos os navegadores já errow function não
    const close = document.querySelector("#close-message");// pegando o ID do xizinho
    const message = document.querySelector(".message");
  
    close.addEventListener("click", () => {// add evento a close 
      message.style.display = "none";
    });
  
    setTimeout(() => {
      message.style.display = "none";
    }, 5000);
  };
  
  const viewDropdown = () => { // função do ViewDropDOWN
    const buttons = document.querySelectorAll(".dropdown-button");// pegando o button 
  // ele virou um arrey porque vai verificar todos os botões 
    buttons.forEach((btn) => {
      btn.addEventListener("click", (event) => {// identifica qual botão está clicando e aplica um evento
        const content = event.path[2].children[1];// o path é onde ele tá e o childrn é a posição dele em relação ao dropdown. pegamos esse caminho no console
        
        content.classList.toggle("active")//add active class e tira
  
        if (content.classList.contains("active")){
          content.style.display = "block";// troca do evento 
        } else {
          content.style.display = "none";
        }
  
        content.addEventListener("mouseleave", () => {// quando mouse sair o content fecha
          content.classList.remove("active");// remover ective 
          if (!content.classList.contains("active")){
            content.style.display = "none";
          }
        })
        
      })
    })
  };
  // FUncções sendo executdas forever 
  viewDropdown();
  closeAlert();