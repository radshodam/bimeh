//variables
const ajnas = document.querySelector(".wall"),
    shoppingCartContent = document.querySelector("#cart-content tbody"),
    clearall = document.querySelector(".clearAll");
//eventlistener
eventlisteners();

function eventlisteners() {
    ajnas.addEventListener("click", jens);
    shoppingCartContent.addEventListener("click", removekala);
    clearall.addEventListener("click", clearAllall);
    document.addEventListener('DOMContentLoaded', showAjnasOnLoad)
}

//function
function jens(e) {
    e.preventDefault();

    if (e.target.classList.contains("add-to-cart")) {
        const moshakhasat = e.target.parentElement.parentElement.parentElement;
        moshakhasatKala(moshakhasat);
    }
}

function moshakhasatKala(moshakhasat) {
    const kalaJoz = {
        ax: moshakhasat.querySelector("img").src,
        noeJens: moshakhasat.querySelector("h6").textContent,
        gheimat: moshakhasat.querySelector(".price").textContent,
        id: moshakhasat.querySelector("span").getAttribute("data-id"),
    };
    addbebala(kalaJoz);
}




function addbebala(kalaJoz) {
    let rows = document.createElement("tr");
    // console.log(rows);

    rows.innerHTML = `
    
    <tr>
    <td>
    <img src= "${kalaJoz.ax}" class="kalam">
    </td>  
     <td>
         ${kalaJoz.noeJens}  
    </td>  
     <td>
          ${kalaJoz.gheimat}
      </td>
      <td>
      <span class=" btn-danger rounded-circle px-2 remove" href="#" data-id="${kalaJoz.id}">X</span>
      </td>
    </tr>
    `;
    shoppingCartContent.appendChild(rows);
    saveToStorage(kalaJoz)

}

function saveToStorage(moshakhasat) {
    let ajnas = getToStorage()
    ajnas.push(moshakhasat)
    localStorage.setItem('ajnas', JSON.stringify(ajnas))
}

function getToStorage() {
    let ajnas;

    // if courses exist before
    if (localStorage.getItem('ajnas')) {
        ajnas = JSON.parse(localStorage.getItem('ajnas'))
    } else {
        ajnas = []
    }

    return ajnas
}



function removekala(e) {

    let kalaJoz, kalaJozId;
    if (e.target.classList.contains("remove")) {
        e.target.parentElement.parentElement.remove()
        kalaJoz = e.target.parentElement.parentElement
        kalaJozId = kalaJoz.querySelector('span').getAttribute('data-id')

    }
    removeAjnasLS(kalaJozId)

}

function removeAjnasLS(id) {
    let AjnasLS = getToStorage()

    AjnasLS.forEach(function(kalaJoz, index) {
        if (kalaJoz.id === id) {
            AjnasLS.splice(index, 1)
        }
    });

    localStorage.setItem('Ajnas', JSON.stringify(AjnasLS))
}

function clearAllall(e) {
    while (shoppingCartContent.firstChild) {
        shoppingCartContent.firstChild.remove()
    }
    clearCartLS()

}

function clearCartLS() {
    localStorage.clear()
}

function showAjnasOnLoad() {
    let AjnasLS = getToStorage();

    // add courses into the cart
    AjnasLS.forEach(function(kalaJoz) {
        // create <li> tag
        let rows = document.createElement("tr");
        // console.log(rows);

        rows.innerHTML = `
        
        <tr>
        <td>
        <img src= "${kalaJoz.ax}" class="kalam">
        </td>  
         <td>
             ${kalaJoz.noeJens}  
        </td>  
         <td>
              ${kalaJoz.gheimat}
          </td>
          <td>
          <span class=" btn-danger rounded-circle px-2 remove" href="#" data-id="${kalaJoz.id}">X</span>
          </td>
        </tr>
        `;
        shoppingCartContent.appendChild(rows);
    });

}