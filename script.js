

let quartos = document.querySelector("#quartos")

function carregaQuartos(){
    fetch('https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72')
    .then(response => response.json())
    .then(data => { 
        data.forEach(elemento => {
            let cardPersonal = document.createElement('div')
            cardPersonal.className = "card card-personal"
            cardPersonal.style.width = '18rem'
            cardPersonal.style.cursor = 'pointer'
            cardPersonal.innerHTML = 
            `<img src="${elemento.photo}" class="card-img-top">
            <div class="card-body">
            <p class="card-title font-weight-bold>${elemento.property_type}</p>
            <p class="card-text">${elemento.name}</p>
            <p class="card-text">R$ ${elemento.price},00</p>
            </div>`
            quartos.appendChild(cardPersonal)
        });
    })
}





