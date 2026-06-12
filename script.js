const list = document.querySelector("ul");
const buttonShowAll = document.querySelector(".show-all");
const buttonMapAll = document.querySelector(".map-all");
const sumAll = document.querySelector(".sum-all");

function showAll(productsArray){
    let myLi = '';

    productsArray.forEach( product => {
    myLi += `
        <li>
            <img src=${product.src}>
            <p>${product.name}</p>
            <p class="item-price">R$ ${product.price}</p>
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
            <p class="somar-tudo">O valor total dos itens é: R$ ${totalValue},00</p>
        </li>
    `

    const somarTudo = document.querySelector(".somar-tudo")

    somarTudo.style.padding = "10px";
}

buttonShowAll.addEventListener("click", () => showAll(menuOptions));
buttonMapAll.addEventListener("click", mapAllItens);
sumAll.addEventListener("click", sumAllItens);