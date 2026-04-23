document.addEventListener('DOMContentLoaded', () => {
    const glitchBtn = document.getElementById('glitch-btn');
    const mainTitle = document.getElementById('main-title');
    const factList = document.getElementById('fact-list');

    // Interação 1: Mudança de Conteúdo ao clicar no botão
    glitchBtn.addEventListener('click', () => {
        // Altera o texto do título
        mainTitle.textContent = "ERRO NO VAZIO: $$$$$$";
        
        // Interação 2: Mudança de Estilo Dinâmica
        document.body.style.backgroundColor = "black";
        document.body.style.filter = "invert(1)";
        
        // Adiciona um novo elemento à lista (Criação de elementos)
        const newFact = document.createElement('li');
        newFact.textContent = "VOCÊ ESTÁ SE ABSTRAINDO...";
        newFact.style.color = "red";
        factList.appendChild(newFact);

        alert("Caine: OPA! Alguém tocou no que não devia!");
    });

    // Efeito extra simples: Logar no console ao passar o mouse na tabela
    const table = document.querySelector('table');
    table.addEventListener('mouseenter', () => {
        console.log("Inspecionando dados dos prisioneiros...");
    });
});