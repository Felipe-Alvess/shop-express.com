function abrirMenu(){
    if(itens.style.display == 'block'){
        itens.style.display = 'none'
    }
    else{
    itens.style.display = 'block'
    }
}
    

const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel(){
    idx++;
    
    if(idx > img.length - 1){
    idx = 0;
    }
    imgs.style.transform = `translateX(${-idx * 900}px)`;
    
}
setInterval(carrossel, 5000);

