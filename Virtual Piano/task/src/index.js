// Get HTMLCollection of all the "kbd" elements
let kbdEls = document.getElementsByTagName("kbd");
// Create an array of the "kbd" elements' textContent
let pianoKeys = Array.from(kbdEls, kbdEl => kbdEl.textContent);

document.addEventListener("keydown", function(event) {
  // Letter key codes follow a "Key + Letter" scheme (i.e. KeyA, KeyB, etc.)
  // Slice first 3 chars ("Key") and check if valid key was pressed
  if (pianoKeys.includes(event.code.slice(3))) {
    let audioSrc = "white_keys/" + event.key + ".mp3"
    let audio = new Audio(audioSrc);
    audio.play();
  }
  else {
    console.log("An invalid key was pressed. Please try again.")
  }
})