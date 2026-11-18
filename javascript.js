// Espera a página carregar completamente antes de executar o código
document.addEventListener("DOMContentLoaded", function() {
    
    // Seleciona todos os botões com a classe .btn
    const botoes = document.querySelectorAll(".btn");

    // Adiciona um evento de clique a cada botão
    botoes.forEach(function(botao) {
        botao.addEventListener("click", function(evento) {
            // Podes ver no console do navegador qual botão foi clicado
            console.log("Clicaste no botão: " + botao.textContent.trim());
        });
    });

});