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
  
  const viewDropdown = () => {
    const buttons = document.querySelectorAll(".dropdown-button");
  
    buttons.forEach((btn) => {
      btn.addEventListener("click", (event) => {
        const content = event.path[2].children[1];
        
        content.classList.toggle("active")
  
        if (content.classList.contains("active")){
          content.style.display = "block";
        } else {
          content.style.display = "none";
        }
  
        content.addEventListener("mouseleave", () => {
          content.classList.remove("active");
          if (!content.classList.contains("active")){
            content.style.display = "none";
          }
        })
        
      })
    })
  };
  
  viewDropdown();
  closeAlert();