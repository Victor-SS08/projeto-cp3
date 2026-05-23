window.onload = function () {
    const intro = document.getElementById("inicio");
    const content = document.getElementById("content");

    if (intro) {
        setTimeout(() => {
            intro.classList.add("efeito-out");
            setTimeout(() => {
                intro.style.display = "none";
                if (content) content.classList.add("visivel");
            }, 1000);
        }, 3000);
    }

    const container = document.getElementById("container");
    if (container) renderProdutos(container);

    const form = document.getElementById("form-contato");
    if (form) form.addEventListener("submit", validarFormulario);
};

const produtos = [
    { nome: "Ração Premium Dog", preco: 89.90, precoOriginal: 120.00, emPromocao: true, descricao: "Nutrição completa para cães adultos" },
    { nome: "Ração Premium Cat", preco: 75.00, precoOriginal: null, emPromocao: false, descricao: "Fórmula especial para gatos" },
    { nome: "Brinquedo Interativo", preco: 49.90, precoOriginal: 80.00, emPromocao: true, descricao: "Estimula o instinto natural do pet" },
    { nome: "Cama Pet Luxo", preco: 199.00, precoOriginal: null, emPromocao: false, descricao: "Conforto máximo para seu pet descansar" },
    { nome: "Coleira LED", preco: 35.00, precoOriginal: 55.00, emPromocao: true, descricao: "Segurança e estilo nas noites de passeio" },
    { nome: "Arranhador para Gatos", preco: 120.00, precoOriginal: null, emPromocao: false, descricao: "Protege seus móveis com estilo felino" },
];

function renderProdutos(container) {
    container.innerHTML = produtos.map(item => `
        <div class="produto-card">
            ${item.emPromocao ? '<span class="badge-promo">PROMOÇÃO</span>' : ''}
            <img src="../assets/img.png" alt="${item.nome}">
            <div class="card-content">
                <h3>${item.nome}</h3>
                <p>${item.descricao}</p>
                <div>
                    <span class="preco">R$ ${item.preco.toFixed(2).replace('.', ',')}</span>
                    ${item.precoOriginal ? `<span class="preco-original">R$ ${item.precoOriginal.toFixed(2).replace('.', ',')}</span>` : ''}
                </div>
                <button class="btn-comprar" onclick="adicionarCarrinho('${item.nome}')">Comprar</button>
            </div>
        </div>
    `).join('');
}

function adicionarCarrinho(nome) {
    alert(`"${nome}" adicionado ao carrinho!`);
}

function validarFormulario(e) {
    e.preventDefault();
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const descricao = document.getElementById("descricao").value.trim();
    const msg = document.getElementById("form-msg");

    if (!nome || !email || !descricao) {
        msg.textContent = "Por favor, preencha todos os campos.";
        msg.className = "form-msg erro";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        msg.textContent = "Por favor, insira um e-mail válido.";
        msg.className = "form-msg erro";
        return;
    }

    msg.textContent = `Mensagem enviada com sucesso! Obrigado, ${nome}!`;
    msg.className = "form-msg sucesso";
    e.target.reset();
}
