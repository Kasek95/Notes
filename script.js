const btnAdd = document.querySelector(".add");
const bntDeleteAll = document.querySelector(".delete-all");
const saveNote = document.querySelector(".save");
const cancelAddNote = document.querySelector(".cancel");
const noteText = document.querySelector("#text");
const category = document.querySelector("#category");
const noteArea = document.querySelector(".note-area");
const addNote = document.querySelector(".note-panel");
const error = document.querySelector(".error");

let cardId = 0;
let selectedValue;

const openNoteAdd = () => {
    addNote.style.display = "flex";
}
const closePanel = () => {
    addNote.style.display = "none";
    error.style.visibility = `hidden`;
    noteText.value = ``;
    category.selectedIndex = 0;
}

const addNewNote = () => {
   if(noteText.value !== "" && category.options[category.selectedIndex].value !== "0") {
       createNote();
       error.style.visibility = "hidden"
   } else {
       error.style.visibility = "visible"
   }
}
const createNote = () => {
   const newNote = document.createElement("div")
    newNote.classList.add("note");
    newNote.setAttribute("id", cardId)
    newNote.innerHTML = `   
         
            <div class="note-header">
                <h3 class="note-title">${selectedValue}</h3>
                <button class="delete-note" onclick="deleteNote(${cardId})">
                    <i class="fas fa-times icon"></i>
                </button>
            </div>
            <div class="note-body">
                ${noteText.value}
            </div>
      `
    noteArea.append(newNote)
    cardId++
    checkColor(newNote)
    noteText.value = ``;
    category.selectedIndex = 0;
    addNote.style.display = "none";
}

const selectValue = () => {
    selectedValue = category.options[category.selectedIndex].text
}

const deleteAllNote = () => {
    noteArea.innerHTML = ``
}

const checkColor = note => {
    switch (selectedValue) {
        case 'Zakupy':
            note.style.backgroundColor = 'rgb(72,255,0)'
            break;
        case 'Praca':
            note.style.backgroundColor = 'rgb(255,243,0)'
            break;
        case 'Inne':
            note.style.backgroundColor = 'rgb(0,170,255)'
            break;
    }
}
const deleteNote = id => {
    const noteToDelete = document.getElementById(id)
    noteArea.removeChild(noteToDelete);
}

bntDeleteAll.addEventListener("click", deleteAllNote)
btnAdd.addEventListener("click", openNoteAdd)
cancelAddNote.addEventListener('click', closePanel)
saveNote.addEventListener("click", addNewNote)