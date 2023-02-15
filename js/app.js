const nav=document.querySelector("#nav");
const abrir=document.querySelector("#buttom");
const cerrar=document.querySelector("#buttom-cerrar");

abrir.addEventListener("click",(e)=>{
    nav.classList.add("nav-visible");
});
cerrar.addEventListener("click",(e)=>{
    nav.classList.remove("nav-visible");
});
