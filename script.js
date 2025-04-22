const lines = [
  "Dear Friend,",
  "",
  "Just wanted to let you know...",
  "Life is a beautiful journey,",
  "and you're doing amazing.",
  "",
  "Keep going and smile always!",
  "",
  "Warm regards,",
  "The Web :)"
];

let index = 0;

function revealLetter() {
  const flap = document.querySelector('.flap');
  const letter = document.getElementById('letter');
  const handwriting = document.getElementById('handwriting');

  flap.style.transform = 'rotateX(180deg)';
  letter.classList.add('show');

  handwriting.innerHTML = '';
  index = 0;
  typeLine();
}

function typeLine() {
  if (index < lines.length) {
    const handwriting = document.getElementById('handwriting');
    handwriting.innerHTML += lines[index] + '\n';
    index++;
    setTimeout(typeLine, 500); // speed of line typing
  }
}
