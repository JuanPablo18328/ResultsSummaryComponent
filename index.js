import datos from './data.js';

document.addEventListener('DOMContentLoaded',(e)=>{

    const contenedorClases = document.querySelector('.containerClass');

    for (const data of datos){
        contenedorClases.innerHTML += `
        <div class="class ${data.category}">
            <span class="iconClass"><img src="${data.icon}" alt="icono"></span>
            <p class="titleClass">${data.category}</p>

            <div class="scoreClass">
            <p class="scoreGet">${data.score}</p>
            <p class="subScoreGet">/</p>
            <p class="subScoreGet">100</p>
            </div>
        </div>`
    }

});