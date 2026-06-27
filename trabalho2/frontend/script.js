document.addEventListener("DOMContentLoaded", () => {
  const glitchBtn = document.getElementById("glitch-btn");
  const mainTitle = document.getElementById("main-title");
  const factList = document.getElementById("regras");

  glitchBtn.addEventListener("click", () => {
    // Altera o conteúdo e estilo para o modo "erro"
    mainTitle.textContent = "ERRO NO VAZIO: $$$$$$";
    document.body.style.backgroundColor = "black";
    document.body.style.filter = "invert(1)";

    const newFact = document.createElement("li");
    newFact.textContent = "VOCÊ ESTÁ SE ABSTRAINDO...";
    newFact.style.color = "red";
    factList.appendChild(newFact);

    // Criação do botão de Desabstrair
    const undoBtn = document.createElement("button");
    undoBtn.textContent = "Desabstrair Sistema";
    undoBtn.style.display = "block";
    undoBtn.style.marginTop = "10px";
    document.body.appendChild(undoBtn);

    // Lógica para voltar ao que era antes
    undoBtn.addEventListener("click", () => {
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

  const table = document.querySelector(".personagens-table");
  const message = document.createElement("p");
  message.style.fontStyle = "italic";
  message.style.color = "gray";
  table.parentNode.insertBefore(message, table.nextSibling);
  table.addEventListener("mouseenter", () => {
    message.textContent =
      "Caine: Hmmm, parece que alguém está curioso sobre os prisioneiros...";
  });

  table.addEventListener("mouseleave", () => {
    message.textContent = "";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // UI Elements
  const loginSection = document.getElementById("login-section");
  const appContent = document.getElementById("app-content");
  const loginForm = document.getElementById("login-form");
  const loginError = document.getElementById("login-error");
  const characterContainer = document.getElementById("character-container");
  const logoutBtn = document.getElementById("logout-btn");

  // Existing Elements
  const glitchBtn = document.getElementById("glitch-btn");
  const mainTitle = document.getElementById("main-title");
  const factList = document.getElementById("regras");
  const table = document.querySelector(".personagens-table");

  // --- AUTHENTICATION STATE ---
  function checkAuth() {
    const token = localStorage.getItem("jwt_token");
    if (token) {
      loginSection.style.display = "none";
      appContent.style.display = "block";
      logoutBtn.style.display = "inline-block";
      loadCharacters(token); // Fetch data only if logged in
    } else {
      loginSection.style.display = "block";
      appContent.style.display = "none";
      logoutBtn.style.display = "none";
    }
  }

  // --- LOGIN LOGIC ---
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) throw new Error("Falha no login");

      const data = await response.json();
      localStorage.setItem("jwt_token", data.access_token);
      loginError.style.display = "none";
      checkAuth(); // Update UI
    } catch (error) {
      console.error("Login failed:", error);
      loginError.style.display = "block";
    }
  });

  // --- LOGOUT LOGIC ---
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("jwt_token");
    checkAuth();
  });

  // --- FETCH DATA (Requirement 3A & 3D) ---
  // --- FETCH DATA (Requirement 3A & 3D) ---
  async function loadCharacters(token) {
    try {
      const response = await fetch("http://localhost:3000/content", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 401) {
        localStorage.removeItem("jwt_token");
        checkAuth();
        throw new Error("Sessão expirada. Faça login novamente.");
      }

      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const allContent = await response.json();

      // 1. Render Characters ONLY
      const characterContainer = document.getElementById("character-container");
      characterContainer.innerHTML = "";

      const characters = allContent.filter((c) => c.category === "character");

      characters.forEach((char) => {
        const aside = document.createElement("aside");
        aside.className = "info-box";
        aside.innerHTML = `
                      <img src="${char.image_url || "https://via.placeholder.com/150"}" alt="${char.title}">
                      <p><strong>${char.title}:</strong> ${char.content}</p>
                  `;
        characterContainer.appendChild(aside);
      });

      // 2. Render Episodes ONLY
      const episodeTableBody = document.getElementById("episode-table-body");

      // Only attempt to render episodes if the HTML table body exists
      if (episodeTableBody) {
        episodeTableBody.innerHTML = "";
        const episodes = allContent.filter((c) => c.category === "episode");

        episodes.forEach((ep) => {
          const tr = document.createElement("tr");
          tr.innerHTML = `
                          <td>0${ep.display_order}</td>
                          <td><strong>${ep.title}</strong></td>
                          <td>${ep.image_url}</td> <td>${ep.content}</td>
                      `;
          episodeTableBody.appendChild(tr);
        });
      }
    } catch (error) {
      console.error("Failed to load content:", error);
      const container = document.getElementById("character-container");
      if (container) {
        container.innerHTML = `<p style="color: red;">${error.message}</p>`;
      }
    }
  }
  // --- EXISTING GLITCH LOGIC ---
  glitchBtn.addEventListener("click", () => {
    mainTitle.textContent = "ERRO NO VAZIO: $$$$$$";
    document.body.style.backgroundColor = "black";
    document.body.style.filter = "invert(1)";

    const newFact = document.createElement("li");
    newFact.textContent = "VOCÊ ESTÁ SE ABSTRAINDO...";
    newFact.style.color = "red";
    factList.appendChild(newFact);

    const undoBtn = document.createElement("button");
    undoBtn.textContent = "Desabstrair Sistema";
    undoBtn.style.display = "block";
    undoBtn.style.marginTop = "10px";
    document.body.appendChild(undoBtn);

    undoBtn.addEventListener("click", () => {
      mainTitle.textContent = "THE AMAZING DIGITAL CIRCUS";
      document.body.style.backgroundColor = "";
      document.body.style.filter = "";
      factList.removeChild(newFact);
      undoBtn.remove();
    });

    alert("Caine: OPA! Alguém tocou no que não devia!");
  });

  if (table) {
    const message = document.createElement("p");
    message.style.fontStyle = "italic";
    message.style.color = "gray";
    table.parentNode.insertBefore(message, table.nextSibling);
    table.addEventListener("mouseenter", () => {
      message.textContent =
        "Caine: Hmmm, parece que alguém está curioso sobre os prisioneiros...";
    });
    table.addEventListener("mouseleave", () => {
      message.textContent = "";
    });
  }

  // Initialize App
  checkAuth();
});
