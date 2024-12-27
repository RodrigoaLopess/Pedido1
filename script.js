document.addEventListener("DOMContentLoaded", () => {
    const yesButton = document.getElementById("yes-button");
    const noButton = document.getElementById("no-button");
    const mainContainer = document.getElementById("main-container");
    const finalMessageContainer = document.getElementById("final-message-container");
  
    // Quando clicar em "Sim"
    yesButton.addEventListener("click", () => {
      // Adiciona animação de fade out
      mainContainer.style.animation = "fadeOut 1s ease-in-out";
      
      // Após 1 segundo, troca para a mensagem final
      setTimeout(() => {
        mainContainer.style.display = "none";
        finalMessageContainer.style.display = "block";
        finalMessageContainer.style.animation = "fadeIn 1s ease-in-out";
      }, 1000);
    });
  
    // Movimenta o botão "Não"
    function moveNoButton() {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
  
      const randomX = Math.random() * (viewportWidth - noButton.offsetWidth);
      const randomY = Math.random() * (viewportHeight - noButton.offsetHeight);
  
      noButton.style.position = "absolute";
      noButton.style.left = `${randomX}px`;
      noButton.style.top = `${randomY}px`;
    }
  
    noButton.addEventListener("mouseenter", moveNoButton);
    noButton.addEventListener("click", moveNoButton);
  });
  