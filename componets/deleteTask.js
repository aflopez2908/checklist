const deleteIcon = () =>{
    const i = document.createElement("i")
    i.classList.add('fas', 'fa-trash-alt' ,'trashIcon', 'icon')
    i.addEventListener("click",deleteTask)
    return i

}

const deleteTask = (evento)=>{
    
    const pariente= evento.target.parentElement
    pariente.remove()


}

export default deleteIcon