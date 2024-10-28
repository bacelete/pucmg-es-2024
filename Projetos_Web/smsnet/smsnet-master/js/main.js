document.addEventListener("DOMContentLoaded",function(){
    var diagramaAtual = document.getElementById('diagrama-atual');
    var divImg = document.querySelector('.div-img'); 
    var modalImg = document.querySelector('.modal-img');
    var caption = document.querySelector('.caption'); 

    diagramaAtual.onclick = function () {
        divImg.style.display = "block"
        modalImg.src = this.src; 
        caption.textContent = this.alt; 
    }

    var closeBtn = document.querySelector('.close');

    closeBtn.onclick = function () {
        divImg.style.display = "none"; 
    }
    divImg.onclick = function() {
        this.style.display = "none";
    }
    //
    var diagramaFuturo = document.getElementById('diagrama-futuro');
    var newDivImg = document.querySelector('.new-div-img'); 
    var newModalImg = document.querySelector('.new-modal-img');
    var newCaption = document.querySelector('.new-caption'); 

    diagramaFuturo.onclick = function () {
        newDivImg.style.display = "block"
        newModalImg.src = this.src; 
        newCaption.textContent = this.alt; 
    }

    var closeBtn = document.querySelector('.new-close');

    closeBtn.onclick = function () {
        newDivImg.style.display = "none"; 
    }
    newDivImg.onclick = function() {
        this.style.display = "none";
    }

})