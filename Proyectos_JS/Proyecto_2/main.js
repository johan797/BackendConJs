/*Se trata de uno de los objetos propios de un navegador web y, por tanto,
 esto lo convierte en una herramienta indispensable para el desarrollo front-end de páginas web.

Son muchos los objetos que están disponibles en un navegador, y cada uno dispone de sus propiedades y
 métodos. Cuando programamos creamos etiquetas HTML y estas son reconvertidas en el navegador en elementos
  jerárquicos. Esta jerarquía es lo que se conoce como Modelo de Objetos de Documento, más conocido por 
  DOM (Document Object Model).*/ 

//cart
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

let productocl = document.querySelector(".product");
//let box = document.querySelector(".product-box")
let detailIcon = document.querySelector(".detail")
let closeDetail = document.querySelector("#product-close");
//open
cartIcon.onclick = () => {
  cart.classList.add("active");
};

//close cartcartIcon.onclick = () =>
closeCart.onclick = () => {
  cart.classList.remove("active");
};
/*var fr = document.querySelectorAll("product-img")[numberproduct]
var valueSrc =fr.getAttribute("src");*/



function abreDetalles() {
  productocl.classList.add("active");

}

closeDetail.onclick = () => {
  productocl.classList.remove("active");
};




/*El DOMContentLoadedevento se activa 
cuando el documento HTML se ha analizado por completo 
y todos los scripts diferidos ( <script defer src="…">y 
<script type="module">) se han descargado y ejecutado. No espera a que terminen de 
cargarse otras cosas, como imágenes, subtramas y secuencias de comandos asíncronas.*/ 
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

//making Function
/*El método ready() se usa para hacer que una función 
esté disponible después de cargar el documento. Cualquier código
 que escriba dentro del método $(document).ready() se ejecutará una vez
  que el DOM de la página esté listo para ejecutar el código JavaScript.*/
function ready() {
  var removeCartButtons = document.getElementsByClassName("cart-remove");
  console.log(removeCartButtons);
  for (var i = 0; i < removeCartButtons.length; i++) {
    var button = removeCartButtons[i];
    button.addEventListener("click", removeCartItem);
  }
  //quantity changes
  var quantityInputs = document.getElementsByClassName("cart-quantity");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }

  //add cart
  var addCart = document.getElementsByClassName("add-cart");
  for (var i = 0; i < addCart.length; i++) {
    var button = addCart[i];
    button.addEventListener("click", addCartClicked);
  }


 var selectD = document.getElementsByClassName("detail");
  for (var i = 0; i < selectD.length; i++) {
    var button = selectD[i];
    
   button.addEventListener("click",NumberID);
    
    
  }

  var openD = document.getElementsByClassName("move");
  for (var i = 0; i < openD.length; i++) {
    var button = openD[i];
    button.addEventListener("click",viewProducto);
  }


      //detail open
  document
    .getElementsByClassName("btn-buy")[0]
    .addEventListener("click", buyButtonClicked);
}

// Funciones 
//Buy Button
function buyButtonClicked() {
  alert("your order is placed");
  var cartContent = document.getElementsByClassName("cart-content")[0];
  while (cartContent.hasChildNodes()) {
    cartContent.removeChild(cartContent.firstChild);
  }
  updatetotal();
}
//remove cart
function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updatetotal();
}

function quantityChanged(event) {
  var input = event.target;
  //Not-A-Number
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updatetotal();
}
//add-cart
function addCartClicked(event) {
  var button = event.target;
  var shopProducts = button.parentElement;
  var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
  var price = shopProducts.getElementsByClassName("price")[0].innerText;
  var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
  addProductToCart(title, price, productImg);
  //console.log(title,price);
  updatetotal();
}

function addProductToCart(title, price, productImg) {
  var cartShopBox = document.createElement("div");
  cartShopBox.classList.add("cart-box");
  var cartItems = document.getElementsByClassName("cart-content")[0];
  var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
  for (var i = 0; i < cartItemsNames.length; i++) {
    if (cartItemsNames[i].innerText == title) {
      alert("you have already add this item to cart");
      return;
    }
  }
  var cartBoxContent = `
            <img src="${productImg}" alt="" class="cart-img">
            <div class="detail-box">
                <div class="cart-product-title">${title}</div>
                <div class="cart-price">${price}</div>
                <input type="number" value="1" class="cart-quantity">
            </div>
            <i class='bx bxs-trash cart-remove'></i>  `;
  cartShopBox.innerHTML = cartBoxContent;
  cartItems.append(cartShopBox);
  cartShopBox
    .getElementsByClassName("cart-remove")[0]
    .addEventListener("click", removeCartItem);
  cartShopBox
    .getElementsByClassName("cart-quantity")[0]
    .addEventListener("change", quantityChanged);
}

/*mostrar detalles*/
var numberproduct=0;
function NumberID (event) {
  /*La propiedad target de la interfaz del event.currentTarget es una referencia al objeto en el cual se lanzo el evento.*/
  var button = event.target;
  var selectID = button.getAttribute("id")
  //console.log(selectID);
numberproduct=parseInt(selectID.slice(1));
  console.log(numberproduct);
  //return numberproduct
  //viewProducto(numberproduct)
}


var i = 0 ;
function viewProducto(){
   number=numberproduct;
//console.log(numberproduct);
              var Lista1=
              ['img/img1-1.jpg',
              'img/img1-2.jpg',
              'img/img1-3.jpg',
              'img/img1-4.jpg',   ]
              var Lista2=
              ['img/img2-1.jpg',
              'img/img2-2.jpg',
              'img/img2-3.jpg',
              'img/img2-4.jpg',   ]
              var Lista3=
              ['img/img3-1.jpg',
              'img/img3-2.jpg',
              'img/img3-3.jpg',
              'img/img3-4.jpg',   ]
              var Lista4=
              ['img/img4-1.jpg',
              'img/img4-2.jpg',
              'img/img4-3.jpg',
              'img/img4-4.jpg',   ]
 
   switch(number){
    case 1:
    document.getElementById("imagen").src = Lista1[i];

    i++;
    if(i>Lista1.length){i=0;     }
    break;
    case 2:
    
    document.getElementById("imagen").src = Lista2[i];
    i++;
    if(i>Lista2.length){i=0;     }
    break;
    case 3:
    
    document.getElementById("imagen").src = Lista3[i];
    i++;
    if(i>Lista3.length){i=0;     }
    break;
    case 4:
     
    document.getElementById("imagen").src = Lista4[i];
    i++;
    if(i>Lista4.length){i=0;     }
    
   }

   

   
  }

  /*
  function viewProducto(event) {
  var button = event.target;
  var showDetail = button.parentElement;
  var viewp = document.createElement("div");
  viewp.classList.add("product-small-img");
  var viewItems = document.getElementsByClassName("product")[0];
  var detailImg = showDetail.getElementsByClassName("")[0].src;
  var boxDetail = `
  <img src="${detailImg}" alt="" onclick="myFunction(this)">
  <img src="${detailImg}" alt="" onclick="myFunction(this)">
  <img src="${detailImg}" alt="" onclick="myFunction(this)">
  <img src="${detailImg}" alt="" onclick="myFunction(this)">
  <img src="${detailImg}" alt="" onclick="myFunction(this)"> 
<div class="img-container">
  <img id="imageBox" src="img-1.jpg" >
</div> `;

viewp.innerHTML = boxDetail;
viewItems.append(viewp);
  }*/
  



/*Funcion para calcular total*/
function updatetotal() {
  var cartContent = document.getElementsByClassName("cart-content")[0];
  var cartBoxes = document.getElementsByClassName("cart-box");
  var total = 0;
  for (var i = 0; i < cartBoxes.length; i++) {
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName("cart-price")[0];
    var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
    var price = parseFloat(priceElement.innerText.replace("$", ""));
    console.log(price);
    var quantity = quantityElement.value;
    total = total + price * quantity;
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName("total-price")[0].innerText = "$" + total;
  }
}

function myFunction(smallImg)
{
    var fullImg =document.getElementById("imageBox");
    fullImg.src =smallImg.src;
}