

document.addEventListener("DOMContentLoaded", (evt) => {
  evt.preventDefault()
  let theForm = document.querySelector("#create-task-form")
  
  theForm.addEventListener("Submit", (evt) => {
    evt.preventDefault()
    
    let theForm = evt.target 
    let input = form.item 
    let userTypes = input.value

    function addItem (){
      let blankli = document.createElement("Li")
      blankli.className = "description"
      blankli.innerText = "item"
      let itemUl = document.querySelector("ul#blobs")
      itemUl.append(blanckli)
    }

    
  });
});



