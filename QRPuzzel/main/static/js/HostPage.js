let btnAddDescription = document.querySelector(".add-description")
let descriptionModalWindow = document.querySelector(".description-modal-window")
let btnDescriptionModalWindow = document.querySelector(".description-modal-window_close")
let btnSaveChanges = document.querySelector(".description-modal-window_save")

btnAddDescription.addEventListener('click', openDescriptionModalWindow)
btnDescriptionModalWindow.addEventListener('click', closeDescriptionModalWindow)
btnSaveChanges.addEventListener('click', closeDescriptionModalWindow)

function openDescriptionModalWindow() {
  descriptionModalWindow.style.display = "inline"
}

function closeDescriptionModalWindow() {
  descriptionModalWindow.style.display = "none"
}
