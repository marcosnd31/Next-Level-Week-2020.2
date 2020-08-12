// Procurar botão + Novo horário
document.querySelector("#add-time")

// Quando clicar no botão
.addEventListener('click', cloneField)

// Executar uma ação
function cloneField() {
    // Duplicar os campos
    //que campos?
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)

    // Limpar os campos
    //que campos?
    const fields = newFieldContainer.querySelectorAll('input')
    
    fields.forEach(function(field){
        field.value = ""
    })
 
    // Colocar na página
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}