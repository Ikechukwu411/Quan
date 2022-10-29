const navMenu = document.querySelector('.ul');
const hamburger = document.querySelector('.Ham');
const overlay = document.querySelector('.overlay');
const biko = document.getElementById('biko');
const OverlayPayment = document.querySelector('.OverlayPayment')
const removeOverlay = document.querySelector('.removeOverlay')



hamburger.addEventListener('click',()=>{
    navMenu.classList.toggle('active')
    hamburger.classList.toggle('active')
})
document.querySelectorAll('.nav-links').forEach((n) =>{
  n.addEventListener('click',()=>{
    navMenu.classList.remove('active')
    hamburger.classList.remove('active')
  })
})

const obj = {
    method: "GET",
    headers: {
      "X-CoinAPI-Key": "17DF8DDD-4C76-42C0-8CF3-3AD817B53573",
    },
  };
  fetch("https://rest.coinapi.io/v1/trades/latest", obj)
  .then((data) => {
    return data.json();
  })
  .then((completeData) => {
    let data1 = "";
    completeData.map((value,i,arr) => {
      data1 = `<div>
      <p id="fetchCoin">Hot Coins</p>
      <div class="ApiFetch">
        <div>
          <p id="AnotherColor">${arr[0].symbol_id}</p>
          <p>${arr[0].price}</p>
        </div>
        <div>
          <p>${arr[0].taker_side}</p>
          <p>${arr[0].size}</p>
        </div>
      </div>
      <div class="ApiFetch">
        <div>
          <p id="AnotherColor">${arr[1].symbol_id}</p>
          <p>${arr[1].price}</p>
        </div>
        <div>
          <p>${arr[1].taker_side}</p>
          <p>${arr[1].size}</p>
        </div>
      </div>
      <div class="ApiFetch">
        <div>
          <p id="AnotherColor">${arr[2].symbol_id}</p>
          <p>${arr[2].price}</p>
        </div>
        <div>
          <p>${arr[2].taker_side}</p>
          <p>${arr[2].size}</p>
        </div>
      </div>
      <div class="ApiFetch">
        <div>
          <p id="AnotherColor">${arr[3].symbol_id}</p>
          <p>${arr[3].price}</p>
        </div>
        <div>
          <p>${arr[3].taker_side}</p>
          <p>${arr[3].size}</p>
        </div>
      </div>
      <div class="ApiFetch">
        <div>
          <p id="AnotherColor">${arr[4].symbol_id}</p>
          <p>${arr[4].price}</p>
        </div>
        <div>
          <p>${arr[4].taker_side}</p>
          <p>${arr[4].size}</p>
        </div>
      </div>
    </div>`
    });
    document.querySelector(".fetch").innerHTML = data1;
    console.log(completeData);
  })
  .catch((error) => {
    console.log(error);
  });