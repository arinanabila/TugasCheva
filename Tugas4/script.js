let notes = [
    {
        title: "Belajar HTML",
        description: "Mempelajari elemen HTML",
        deadline: "12-20-2024",
    },
];

let notesElement = document.getElementById("notes-list");
function renderNotes(){
    notesElement.innerHTML = "";
    notes.forEach((note, index) => {
        const newElement = `
        <div class="tugas">
            <h4>${note.title}</h4>
            <p> ${note.description}</p>
            <p id="tgl">${note.deadline}</p>

            <div class="hapus">
                <button type="button" onclick="deleteNote(${index})">Hapus</button>
            </div>
        </div>
        `;
    notesElement.innerHTML += newElement;
    });
};

function addNote(){
    console.log("tes");

    const newTitle = document.getElementById("nama").value;
    const newDescription = document.getElementById("deskripsi").value;
    const newDeadline = document.getElementById("deadline").value;
    if(newTitle.length > 1 && newDescription.length > 1 && newDeadline){
        const newData = {
            title: newTitle,
            description: newDescription,
            deadline: newDeadline,
        };
        notes.push(newData);
        renderNotes();

        document.getElementById("nama").value = "";
        document.getElementById("deskripsi").value = "";
        document.getElementById("deadline").value = "";
    }
}
function deleteNote(index){
    notes.splice(index, 1);
    renderNotes();
}
renderNotes();