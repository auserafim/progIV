document.addEventListener('DOMContentLoaded', () => {
    const glitchBtn = document.getElementById('glitch-btn');
    const mainTitle = document.getElementById('main-title');
    const factList = document.getElementById('regras');

    glitchBtn.addEventListener('click', () => {
        // Altera o conteúdo e estilo para o modo "erro"
        mainTitle.textContent = "ERRO NO VAZIO: $$$$$$";
        document.body.style.backgroundColor = "black";
        document.body.style.filter = "invert(1)";
        
        const newFact = document.createElement('li');
        newFact.textContent = "VOCÊ ESTÁ SE ABSTRAINDO...";
        newFact.style.color = "red";
        factList.appendChild(newFact);

        // Criação do botão de Desabstrair
        const undoBtn = document.createElement('button');
        undoBtn.textContent = "Desabstrair Sistema";
        undoBtn.style.display = "block";
        undoBtn.style.marginTop = "10px";
        document.body.appendChild(undoBtn);

        // Lógica para voltar ao que era antes
        undoBtn.addEventListener('click', () => {
            mainTitle.textContent = "Bem-vindo ao Vazio"; // Título original
            document.body.style.backgroundColor = ""; // Cor original
            document.body.style.filter = ""; // Remove o efeito
             newFact.textContent = ""; // Remove o fato adicionado
             factList.removeChild(newFact); // Remove o elemento da lista
            
            // Remove o botão de desabstrair após o uso
            undoBtn.remove();
        });

        alert("Caine: OPA! Alguém tocou no que não devia!");
    });

    const table = document.querySelector('.personagens-table');
    const message =  document.createElement('p');
    message.style.fontStyle = 'italic';
    message.style.color = 'gray';
    table.parentNode.insertBefore(message, table.nextSibling);
    table.addEventListener('mouseenter', () => {
        message.textContent = "Caine: Hmmm, parece que alguém está curioso sobre os prisioneiros...";
    });

    table.addEventListener('mouseleave', () => {
        message.textContent = "";
    });
});