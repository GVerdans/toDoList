'use strict'

let inputTxtEntrada = document.querySelector('input.inputTxtEntrada');

let ulLista = document.querySelector('ul.ulLista');

function insertOnList() {

    const newLi = document.createElement('li');
    newLi.classList.add('listaLi');

    // const btnLi = document.createElement('input');
    // btnLi.type = "button";
    // btnLi.value ="✔";
    // btnLi.title = "Tarefa Concluída !";
    // btnLi.onclick="doneList()";
    // btnLi.classList.add('btnLi');

    ulLista.appendChild(newLi);
    newLi.innerHTML = `${inputTxtEntrada.value} <input type="button" value="✔" class="btnLi" title="Tarefa Concluída !" onclick="doneList()">`
    
    



}