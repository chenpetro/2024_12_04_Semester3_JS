let products = []
products.push(
    { 
        photo: "https://via.placeholder.com/150",
        name: "Смартфон A1",
        price: 3500,
        available: true
    },
    { 

        photo: "https://via.placeholder.com/150",
        name: "Смартфон B2",
        price: 4500,
        available: false
    },
    { 
        photo: "https://via.placeholder.com/150",
        name: "Смартфон C3",
        price: 12000,
        available: true
    },
    { 
        photo: "https://via.placeholder.com/150",
        name: "Смартфон D4",
        price: 20000,
        available: false
    },
    { 
        photo: "https://via.placeholder.com/150",
        name: "Смартфон E5",
        price: 8000,
        available: true
    },
    { 
        photo: "https://via.placeholder.com/150",
        name: "Смартфон F6",
        price: 9500,
        available: false
    },
    { 
        photo: "https://via.placeholder.com/150",
        name: "Смартфон G7",
        price: 13500,
        available: true
    },
    { 
        photo: "https://via.placeholder.com/150",
        name: "Смартфон H8",
        price: 7000,
        available: true
    },
    { 
        photo: "https://via.placeholder.com/150",
        name: "Смартфон I9",
        price: 5000,
        available: false
    },
    { 
        photo: "https://via.placeholder.com/150",
        name: "Смартфон J10",
        price: 16000,
        available: true
    },
    { photo: "https://via.placeholder.com/150", name: "Смартфон K11", price: 3000, available: true },
    { photo: "https://via.placeholder.com/150", name: "Смартфон L12", price: 18000, available: false },
    { photo: "https://via.placeholder.com/150", name: "Смартфон M13", price: 22000, available: true },
    { photo: "https://via.placeholder.com/150", name: "Смартфон N14", price: 5000, available: false },
    { photo: "https://via.placeholder.com/150", name: "Смартфон O15", price: 14000, available: true },
    { photo: "https://via.placeholder.com/150", name: "Смартфон P16", price: 7000, available: false },
    { photo: "https://via.placeholder.com/150", name: "Смартфон Q17", price: 8000, available: true },
    { photo: "https://via.placeholder.com/150", name: "Смартфон R18", price: 12000, available: false },
    { photo: "https://via.placeholder.com/150", name: "Смартфон S19", price: 15000, available: true },
    { photo: "https://via.placeholder.com/150", name: "Смартфон T20", price: 9500, available: false },
    { photo: "https://via.placeholder.com/150", name: "Смартфон U21", price: 17000, available: true },
    { photo: "https://via.placeholder.com/150", name: "Смартфон V22", price: 11000, available: false },
    { photo: "https://via.placeholder.com/150", name: "Смартфон W23", price: 19000, available: true },
    { photo: "https://via.placeholder.com/150", name: "Смартфон X24", price: 4000, available: false },
    { photo: "https://via.placeholder.com/150", name: "Смартфон Y25", price: 6000, available: true },
    { photo: "https://via.placeholder.com/150", name: "Смартфон Z26", price: 15500, available: false },
    { photo: "https://via.placeholder.com/150", name: "Смартфон AA27", price: 20000, available: true },
    { photo: "https://via.placeholder.com/150", name: "Смартфон AB28", price: 3500, available: false },
    { photo: "https://via.placeholder.com/150", name: "Смартфон AC29", price: 10000, available: true },
    { photo: "https://via.placeholder.com/150", name: "Смартфон AD30", price: 22000, available: false },
    { photo: "https://via.placeholder.com/150", name: "Смартфон AE31", price: 2000, available: true },
    { photo: "https://via.placeholder.com/150", name: "Смартфон AF32", price: 7500, available: false },
    { photo: "https://via.placeholder.com/150", name: "Смартфон AG33", price: 13500, available: true },
    { photo: "https://via.placeholder.com/150", name: "Смартфон AH34", price: 18000, available: false },
    { photo: "https://via.placeholder.com/150", name: "Смартфон AI35", price: 5000, available: true }
)
    const container = document.querySelector ('.container')
    const balanceHtml = document.querySelector('.balance')
    let balanceJs = 100000
    balanceHtml.textContent = `${balanceJs} UAH`


    products.forEach(function(element){
container.innerHTML += `
<div class="card">
    <img src="${element.photo}" alt="" class="card-img">
    <p class="card-name">${element.name}</p>
    <p class="card-price">${element.price} UAH</p>
    <p class="card-availability">${element.available == true ? 'available' : 'not available'}</p>
    <button class="card-buy">Buy</button>
</div>
`
    })


    const cardBtns = document.querySelectorAll('.card-buy')
    const searchInput = document.getElementById('search-input')
    const searchBtn = document.getElementById('search-btn')

const availableProducts = products.filter(function(element){
    return element.available == true
})

const unavailableProducts = products.filter(function(element){
    return element.available == false
})

searchBtn.addEventListener('click', function(){
    let searchInputValue = searchInput.value
    if (searchInputValue == 'available') {
        container.innerHTML = ''
        availableProducts.forEach(function(element){
            container.innerHTML += `
            <div class="card">
                <img src="${element.photo}" alt="" class="card-img">
                <p class="card-name">${element.name}</p>
                <p class="card-price">${element.price} UAH</p>
                <p class="card-available">Available</p>
                <button class="card-buy">Buy</button>
            </div>
            `
                })
    }
    else if(searchInputValue == 'unavailable') {
        
            container.innerHTML = ''
            unavailableProducts.forEach(function(element){
                container.innerHTML += `
                <div class="card">
                    <img src="${element.photo}" alt="" class="card-img">
                    <p class="card-name">${element.name}</p>
                    <p class="card-price">${element.price} UAH</p>
                    <p class="card-available">Unavailable</p>
                    <button class="card-buy">Buy</button>
                </div>
                `
            })
    }      else{
        alert ('choose the products')
    }
})

    cardBtns.forEach(function(element){
        element.addEventListener('click', function(){
            let cardPrice = parseInt(element.previousElementSibling.previousElementSibling.textContent)
            if (balanceJs >= cardPrice){
                balanceJs = balanceJs - cardPrice
                balanceHtml.textContent = `${balanceJs} UAH`
                alert ('Thank you for the purchase')
            }else{
                alert('You have not enough money')
            }
        })
    })