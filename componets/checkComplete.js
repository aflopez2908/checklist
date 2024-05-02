const checkComplete= ()=>{
    const i = document.createElement('i')
    i.classList.add('far','fa-check-square','icon')
    i.addEventListener("click",completeTask)
    return i
}

const completeTask= (event) => {

    //define el elemento a partir de recivir el evento click en el icono
    const element= event.target
    //definimos a toggle que permite evaluar el estado y cambiar al contrario con su uso
    element.classList.toggle("fas")
    element.classList.toggle("completeIcon")
    element.classList.toggle('far')

}

export default checkComplete