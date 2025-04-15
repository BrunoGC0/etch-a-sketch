const container = document.querySelector(".container");
const btn = document.querySelector("#btn");

btn.addEventListener("click", ()=> {
    let tamanho = prompt("Digite um valor (máximo 100) ")
    
    if(tamanho <= 100){
        gridSize(tamanho)
    }else{
        alert("Digite um valor válido")
    }
    
})

function gridSize(tamanho){
    container.innerHTML = "";
    const quantidade = tamanho * tamanho;
    const tamanhoQuadrado = 512 / tamanho;

    console.log(tamanhoQuadrado);

    for(let i = 0; i < quantidade; i++){
        const quadrado = document.createElement("div");
        quadrado.classList.add("quadrado");
        quadrado.style.width = `${tamanhoQuadrado}px`;
        quadrado.style.height = `${tamanhoQuadrado}px`;
        container.appendChild(quadrado);

        quadrado.addEventListener("mousemove", () => {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);

            quadrado.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        });
    }
}

gridSize(16);


