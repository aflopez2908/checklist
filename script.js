//definicion de IIFE

import checkComplete from "./componets/checkCOmplete.js"
import deleteIcon from "./componets/deleteTask.js"
//guardamos el objeto que queremos traer usando .queryselector para asi porder guardarlo en la 
//const btn
const btn = document.querySelector("[data-form-btn]")
//2imprime el objeto
const createTask = (evento) => {//funcion anonima para generacion de tarea
    evento.preventDefault()//previene que se recargue la pagina con respecto al evento del navegador
    const input = document.querySelector("[data-form-input]")// al ejecutarse el listener seleccionamos el objeto
    const value = input.value//una constante con el valor
    const list = document.querySelector("[data-list]")
    const task = document.createElement('li')
    task.classList.add('card')
    input.value = ''; //redefinimos el valor del input

    //creacion etiqueta div
    const taskContent= document.createElement('div')
    //creacion etiqueta span
    const tittleTask= document.createElement('span')
    //adicion de la clase task a la etiqueta span
    tittleTask.classList.add("task")
    //adicion del texto a la etiquera task
    tittleTask.innerText=value


    //adicion de el li dentro de la ul
    list.appendChild(task)
    //task.innerHTML=content
    //adicion como hijo de task(li) el div que contiene los iconos
    task.appendChild(taskContent)
    //adicion de la funcion del icono en el div
    taskContent.appendChild(checkComplete())
    //adicion del titulo en el div
    taskContent.appendChild(tittleTask)
    task.appendChild(deleteIcon())


    //console.log(content);//traemos el valor del objeto a la consola
}

//al todos los elementos de js sen un objeto, podemos utilizar metodos que tiene propios
//addEventListener permite crear un listener , recibe dos parametros, el evento y la funcion que es 
//el resultado del evento
btn.addEventListener("click", createTask)



