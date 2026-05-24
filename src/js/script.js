
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
    { nome: "Moto Bug 1.0", preco: 329.90, precoOriginal: 550.00, emPromocao: true, descricao: "Tão leal quanto destrutivo" },
    { nome: "Anéis (20 unidades)", preco: 75.00, precoOriginal: null, emPromocao: false, descricao: "Extraidos diretamente do inimigo" },
    { nome: "Action-figure Eggman Articulada", preco: 49.90, precoOriginal: 80.00, emPromocao: true, descricao: "O mais incrível gênio, agora em brinquedo" },
    { nome: "Maquete montável Death Egg", preco: 199.00, precoOriginal: null, emPromocao: true, descricao: "Com armas capazes de destruição de verdade!" },
    { nome: "Maquete montável Colônia Espacial ARK", preco: 199.00, precoOriginal: null, emPromocao: true, descricao: "Como nos velhos tempos..." },
    { nome: "Miniatura Egg Pawn Articulada", preco: 150.00, precoOriginal: 220.00, emPromocao: true, descricao: "O soldado descartável favorito do Doutor" },
    { nome: "Buzz Bomber 2.0 Retrô", preco: 400, precoOriginal: 650.00, emPromocao: true, descricao: "Edição Limitada que solta lasers de mais de 2000°C" },
    { nome: "Death Egg Robot MK2", preco: 100000, precoOriginal: null, emPromocao: false, descricao: "Réplica identica até nos mínimos detalhes (Requer permissão do Império para uso pessoal)" },
    { nome: "Estátua Doutor Ivo 'Eggman' Robotnik", preco: 12000, precoOriginal: null, emPromocao: false, descricao: "Feita de pedra extraída do Sky Sanctuary, imperdível para fãs do Doutor" },
    { nome: "EggMobile", preco: 45000, precoOriginal: 50000, emPromocao: true, descricao: "O original, usado nas primeiras batalhas com o ouriço (CNH não inclusa)" },
];

function renderProdutos(container) {
    container.innerHTML = produtos.map(item => `
        <div class="produto-card">
            ${item.emPromocao ? '<span class="badge-promo">PROMOÇÃO</span>' : ''}
            <img src="../assets/placeholder.png" alt="${item.nome}">
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

    msg.textContent = `Mensagem desconsiderada com sucesso! Obrigado, ${nome}!`;
    msg.className = "form-msg sucesso";
    e.target.reset();
}
/*CONTROLE DE VOLUME DO AUDIO DO HERO*/
const audiovol = document.getElementById("audio");
audiovol.volume = 0.1; 

