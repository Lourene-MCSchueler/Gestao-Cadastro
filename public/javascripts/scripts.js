
function registerClient() {
  let nome = document.getElementById("name").value;
  let cpf = document.getElementById("cpf").value;
  let endereco = document.getElementById("address").value;
  let complemento = document.getElementById("details").value;
  let cep = document.getElementById("details").value;
  let email = document.getElementById("email").value;
  let telefone = document.getElementById("phone").value;

  let client = {
    nome,
    cpf,
    endereco,
    complemento,
    cep,
    email,
    telefone
  };

  let newClient = JSON.stringify(client);
  localStorage.setItem(cpf, newClient);
};


function registerProduct() {
  let ervas = document.getElementById("ervas").value;
  let premium = document.getElementById("premium").value;
  let sense = document.getElementById("sense").value;
  let referencia = document.getElementById("ref").value;
  let preco = document.getElementById("price").value;
  let quantidade = document.getElementById("quantity").value;

  let product = {
    ervas,
    premium,
    sense,
    referencia,
    preco,
    quantidade
  };

  let newProduct = JSON.stringify(product);
  localStorage.setItem(referencia, newProduct);
};
