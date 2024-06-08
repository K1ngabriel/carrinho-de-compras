let totalGeral = 0;
limpar()

function adicionar () {
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;

     if (!produto || produto.trim() === "") {
        alert("Selecione um produto válido.");
        return;
    }

    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }


    let valor = produto.split('R$')[1];
    let nomeProduto = produto.split('-')[0];
    let preco = quantidade * valor;
    let carrinhoDeCompras = document.getElementById('lista-produtos');
    let valorTotal = document.getElementById('valor-total');
    totalGeral = totalGeral + preco;

    carrinhoDeCompras.innerHTML = carrinhoDeCompras.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul"> ${quantidade}x</span> ${nomeProduto} <span class="texto-azul"> R$${valor} </span>
  </section>`
    valorTotal.innerHTML = `<span class="texto-azul" id="valor-total">${totalGeral}</span>`
    
    document.getElementById('quantidade').value = 0;
}

function limpar () {
    document.getElementById('quantidade').value = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = '<span class="texto-azul" id="valor-total">R$0</span>';
}



//function adicionar () {
    //let produto = document.getElementById('produto').value;
    //let quantidade = document.getElementById('quantidade');
    //alert(produto.value);
    //alert(quantidade.value);    
//}



//function adicionar () {
//     let produto = document.getElementById('produto').value;
//     let nomeProduto = produto.split('-')[0];
//     let valor = produto.split('R$')[1]
//     let quantidade = document.getElementById('quantidade');
//     alert(nomeProduto);
//     alert(valor);
//     alert(quantidade.value);
//     let preco = quantidade.value * valor;
//     alert(preco);
// }



// function adicionar () {
//     let produto = document.getElementById('produto').value;
//     let nomeProduto = produto.split('-')[0];
//     let valor = produto.split('R$')[1]
//     let quantidade = document.getElementById('quantidade').value;
//     let preco = quantidade * valor;
//     let carrinhoDeCompras = document.getElementById('lista-produtos');
//     let valorTotal = document.getElementById('valor-total');

//     carrinhoDeCompras.innerHTML = `<span class="texto-azul"> ${quantidade} x</span> ${nomeProduto} <span class="texto-azul"> ${valor} </span>`
//     valorTotal.innerHTML = `<span class="texto-azul" id="valor-total">${preco}</span>`
// }

// function limpar () {
//     document.getElementById('quantidade').value = '';
//     document.getElementById('lista-produtos').innerHTML = '';
//     document.getElementById('valor-total').innerHTML = '<span class="texto-azul" id="valor-total">R$0</span>';
// }
