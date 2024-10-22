// Arrays para armazenar funcionários e pedidos
let funcionarios = [];
let pedidos = [];

// Função para renderizar a lista de funcionários no select de pedidos
function atualizarSelectFuncionarios() {
    const select = document.getElementById("responsavelPedido");
    select.innerHTML = "<option value=''>Selecione um responsável</option>";
    funcionarios.forEach(funcionario => {
        const option = document.createElement("option");
        option.value = funcionario.nome;
        option.textContent = funcionario.nome;
        select.appendChild(option);
    });
}

// Função para atualizar a lista de pedidos
function atualizarListaPedidos() {
    const listaPedidos = document.getElementById("listaPedidos");
    listaPedidos.innerHTML = ""; // Limpa a lista antes de atualizar

    if (pedidos.length === 0) {
        listaPedidos.innerHTML = "<p>Não há pedidos cadastrados.</p>";
        return;
    }

    const ul = document.createElement("ul");
    pedidos.forEach(pedido => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>Pedido:</strong> ${pedido.nomePedido}<br>
            <strong>Descrição:</strong> ${pedido.descricaoPedido}<br>
            <strong>Responsável:</strong> ${pedido.responsavel}<br>
            <strong>Status:</strong> ${pedido.status}
        `;
        ul.appendChild(li);
    });
    listaPedidos.appendChild(ul);
}

// Função para cadastrar funcionários
document.getElementById("formFuncionario").addEventListener("submit", function(event) {
    event.preventDefault();
    const nome = document.getElementById("nomeFuncionario").value;
    const cpf = document.getElementById("cpfFuncionario").value;

    // Verifica se o CPF tem 11 dígitos
    if (cpf.length !== 11) {
        alert("O CPF deve ter 11 dígitos!");
        return;
    }

    // Adiciona o funcionário na lista
    funcionarios.push({ nome, cpf });
    atualizarSelectFuncionarios();
    alert("Funcionário cadastrado com sucesso!");
    this.reset();
});

// Função para cadastrar pedidos
document.getElementById("formPedido").addEventListener("submit", function(event) {
    event.preventDefault();
    const nomePedido = document.getElementById("nomePedido").value;
    const descricaoPedido = document.getElementById("descricaoPedido").value;
    const responsavel = document.getElementById("responsavelPedido").value;
    const status = document.getElementById("statusPedido").value;

    if (!responsavel) {
        alert("Selecione um responsável para o pedido!");
        return;
    }

    // Adiciona o pedido na lista
    pedidos.push({ nomePedido, descricaoPedido, responsavel, status });
    atualizarListaPedidos();
    alert("Pedido cadastrado com sucesso!");
    this.reset();
});
