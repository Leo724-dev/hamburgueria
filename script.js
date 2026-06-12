const list = document.querySelector("ul");
const buttonShowAll = document.querySelector(".show-all");
const buttonMapAll = document.querySelector(".map-all");
const sumAll = document.querySelector(".sum-all");
const filterAll = document.querySelector(".filter-all");

function formatCurrency(value){
    const newValue = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
}).format(value);

    return newValue;

}

function showAll(productsArray){
    let myLi = '';

    productsArray.forEach( product => {
    myLi += `
        <li>
            <img src=${product.src}>
            <p>${product.name}</p>
            <p class="item-price">R$ ${formatCurrency(product.price)}</p>
        </li>
        `
})
    list.innerHTML = myLi;
}

function mapAllItens(){
    const newPrices = menuOptions.map( product =>({
        ...product,
        price: product.price * 0.9, // dar 10% de desconto

    }))

    showAll(newPrices);

}

function sumAllItens(){
    const totalValue = menuOptions.reduce( (acc, curr) => acc + curr.price, 0)
    
    list.innerHTML = `
        <li>
            <p class="somar-tudo">O valor total dos itens é: ${formatCurrency(totalValue)}</p>
        </li>
    `

    const somarTudo = document.querySelector(".somar-tudo")

    somarTudo.style.padding = "10px";
}

function filterAllItens(){
    const filterJustVegan = menuOptions.filter( product => product.vegan === true);

    showAll(filterJustVegan);
}

buttonShowAll.addEventListener("click", () => showAll(menuOptions));
buttonMapAll.addEventListener("click", mapAllItens);
sumAll.addEventListener("click", sumAllItens);
filterAll.addEventListener("click", filterAllItens);