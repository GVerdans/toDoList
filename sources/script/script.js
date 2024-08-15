'use strict'

const inputTxtEntrada = document.querySelector('input.inputTxtEntrada');

const ulLista = document.querySelector('ul.ulLista');

function isInputVazio(texto) {
    if (String(texto).length < 1) {
        return true;
    } else {
        return false;
    }
}

function insertOnList() {

    if (isInputVazio(inputTxtEntrada.value)) {
        window.alert('Insira um texto arrombado !');

    } else {

        const newLi = document.createElement('li');
        newLi.classList.add('listaLi');
        ulLista.appendChild(newLi);

        newLi.innerHTML = `${inputTxtEntrada.value} <input type="button" value="✔" class="btnLi" title="Tarefa Concluída !" onclick="doneList()">`


        inputTxtEntrada.value = ''
        inputTxtEntrada.focus()
    }
}

function doneList() {

    const paiUl = document.querySelector('ul.ulLista');
    const newLi = document.querySelector('li.listaLi');


    paiUl.removeChild(newLi);

    ulLista.innerHTML
}