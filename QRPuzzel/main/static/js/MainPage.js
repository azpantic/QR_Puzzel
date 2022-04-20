let modalWindowCreateNewGame = document.querySelector(".modal-window_create-new-game")
let btnCreateNewGame = document.querySelector(".button_create-game")
let btnCloseNewGameModalWindow = document.querySelector(".modal-window-creating_close")

let btnJoinModalWindow = document.querySelector(".button_join-game")
let modalwindowJoinToGame = document.querySelector(".modal-window_join-to-game")
let btnCloseJoinModalWindow = document.querySelector(".modal-window-join_close")

let btnCloseRegModalWindow = document.querySelector(".log-in_close")
let modalWindowReg = document.querySelector(".modal-window_log-in")
let btnlogIn = document.querySelector(".log_in")

btnCreateNewGame.addEventListener('click', openNewGameModalWindow)
btnCloseNewGameModalWindow.addEventListener('click', closeNewGameModalWindow)

btnJoinModalWindow.addEventListener('click', openJoinModalWindow)
btnCloseJoinModalWindow.addEventListener('click', closeJoinModalWindow)

btnlogIn.addEventListener('click', openRegModalWindow)
btnCloseRegModalWindow.addEventListener('click', closeRegModalWindow)

function openNewGameModalWindow() {
  modalWindowCreateNewGame.style.display = "inline"
}

function closeNewGameModalWindow() {
  modalWindowCreateNewGame.style.display = "none"
}

function openJoinModalWindow() {
  modalwindowJoinToGame.style.display = "inline"
}

function closeJoinModalWindow() {
  modalwindowJoinToGame.style.display = "none"
}

function openRegModalWindow() {
  modalWindowReg.style.display = "inline"
}

function closeRegModalWindow() {
  modalWindowReg.style.display = "none"
}