
// mic
function micState(){
  const mic = document.getElementById('mic');
  mic.classList.toggle("fa-microphone-slash")
}



// speaker
var speaker = document.querySelector('#speaker');
const clicked_class = "clicked"

function speakerState(){
  speaker.classList.toggle(clicked_class);
}

speaker.addEventListener('click', speakerState)
