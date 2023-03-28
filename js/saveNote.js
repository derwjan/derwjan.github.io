function saveNote() {
    var noteInput = document.getElementById("noteInput").value;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "php/backend.php", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify({note: noteInput}));
  }
  function saveNote() {
    var note = document.getElementById("noteInput").value;
    var notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));
  }
  