const array = [
    {nombre : "muzzarella" , ingredientes: [ "salsa" , "muzzarella" , "oregano" ] , precio: 1500 , img: 'img/muzza.jpg' },
    {nombre: "napolitana" , ingredientes: ["salsa" , "muzzarella" , "tomate" , "ajo"] , precio: 1800 , img:'img/napo.jpg'},
    { nombre : "jamon y morrones" ,  ingredientes : [ "salsa" ,  "muzzarela" ,  "jamon" ,  "morron" ] ,  precio : 2100 , img:'img/morron.jpg' } ,
    { nombre : "fugazzeta" ,  ingredientes : [ "muzzarela" ,  "cebolla" ,  "aceite de oliva" ] ,  precio : 1900  , img :'img/fuggazeta.jpg'} ,
    { nombre : "calabresa" ,  ingredientes : [ "salsa" ,  "muzzarela" ,  "longaniza" ] ,  precio : 2250   , img: 'img/calabresa.webp'},
    { nombre : "anana" ,  ingredientes : [ "salsa" ,  "muzzarela" ,  "ananá" ] ,  precio : 2100   , img: 'img/anana.jpg' },
]

const busqueda = document.getElementById('buscador');
const cardContainer = document.getElementById('card');
const boton = document.getElementById('btn');

const filter = () => {
    cardContainer.innerHTML = ''
    const text = busqueda.value.toLowerCase();
    for (let pizza of array) {
     let name = pizza.nombre.toLocaleLowerCase();
     if (name.indexOf(text) !== -1) {
     cardContainer.innerHTML +=  `
     <div class="cards">
     <img src="${pizza.img}" alt="">
     <h2 class="titulo">${pizza.nombre}</h2>
     <p class="ingredientes">(${pizza.ingredientes})</p>
     <span>$${pizza.precio}</span>
     <button class="comprar">Comprar</button>
  </div>
     ` 
     } else if (busqueda === '') {
        alert ('Esta pizza no se encuentra disponible')
         }  
}
if (cardContainer.innerHTML === '') {
   cardContainer.innerHTML += `
   <p>Pizza no encontrada</p>
   ` 
}
guardarLocalStorage()
};
boton.addEventListener('click' ,filter );
function guardarLocalStorage() {
    localStorage.setItem('variedades' , JSON.stringify (array));
};
