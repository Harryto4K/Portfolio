let moreInfo = document.getElementById("more-info");
let infoSec = document.getElementById("info");
let projSec = document.getElementById("projects");

moreInfo.onclick = function() {
    if (moreInfo.innerHTML === 'See More...') {
        let projP = document.getElementById('proj-p');
        projP.style.display = 'none';
        projSec.style.height= '25%';
        infoSec.style.height= '65%';
        moreInfo.innerHTML = 'See Less...';
        let moreP = document.getElementById('more-p');
        moreP.style.display = 'block';
    } else if (moreInfo.innerHTML === "See Less...") {
        let projP = document.getElementById('proj-p');
        projP.style.display = 'block';
        projSec.style.height= '50%';
        infoSec.style.height= '40%';
        moreInfo.innerHTML = 'See More...';
        let moreP = document.getElementById('more-p');
        moreP.style.display = 'none';
    }

}

let notesCloseButton = document.getElementById("close-button-notes");
let notesApp = document.getElementById("notes-app");
let notesAppContainer = document.getElementById("notes-app-container");

notesAppContainer.onclick = function() {
    notesApp.style.display = 'block';
    notesCloseButton.style.display = 'block';
}

notesCloseButton.onclick = function() {
    notesApp.style.display = 'none'
    notesCloseButton.style.display = 'none';
}


let notesProjA = document.getElementById("proj-a-notes");