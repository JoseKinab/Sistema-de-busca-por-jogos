let body = document.body;
const darkness = document.querySelector(".DarkMode");
const boxPesquisa = document.querySelector(".boxPesquisa");
const btn = document.querySelectorAll("button");
const inpuPesquisa = document.getElementById("pesquisar")


function bodyDark(e) {
    body.classList.toggle("body-darkness")
    darkness.classList.toggle("shine")
    inpuPesquisa.classList.toggle("input-darkness")
    boxPesquisa.classList.toggle("boxpesquisa-darkness")

    for(let btn of buttons){
        btn.classList.toggle("button-darkness")
    }
    
}

darkness.addEventListener("click",bodyDark);