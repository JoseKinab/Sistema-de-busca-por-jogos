
const filterInput = document.querySelector("input");
const cards = document.querySelectorAll(".container .boxIten");
const buttons = document.querySelectorAll("button");
const divInfo = document.getElementById("infoNotGame");

filterInput.addEventListener("input", filterCards)

function filterCards() {
    if (filterInput.value != ""  ) {
        for(let card of cards){
            let title = card.querySelector("h2")
            title = title.textContent.toLowerCase()
            let filterTxt = filterInput.value.toLowerCase()

            if (!title.includes(filterTxt)) {
                card.style.display = "none";
            }else{
                card.style.display = "block"; 
            }

        }
    } else{
        for(let card of cards){
            card.style.display = "block";
        }
    }
    if(document.querySelectorAll(".container .boxIten[style ='display: block;']").length == 0){
        divInfo.style.display = "block";
        divInfo.textContent = `Nenhum jogo encontrado com o nome, ${filterInput.value}`;

    } else{
        divInfo.style.display = "none";

    }
    
}

for(let button of buttons){
    button.addEventListener("click", function (params) {
        const  heartred = button.innerHTML.includes('fa-solid fa-heart');
        if (heartred) {
            button.innerHTML = '<i class="fa-regular fa-heart"></i>';
            
        } else{
            button.innerHTML = '<i class="fa-solid fa-heart" style="color: #d33c69;"></i>';
        }

    })
}


const btVoltarAoTopo = document.querySelector("#voltar-ao-topo");

function scrollBtn() {
    if (filterInput.value != "") {
        btVoltarAoTopo.style.display = "none";
        
    } else {
        btVoltarAoTopo.style.display = "";
        
    }
}

filterInput.addEventListener("input", scrollBtn )

btVoltarAoTopo.addEventListener("click", () =>{
    window.scrollTo(0,0)
})


