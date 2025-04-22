const lines = [
  "Dear You,",
  "",
  "This message has been hidden for ages...",
  "Just waiting to be found by someone like you.",
  "",
  "Remember, old paper carries the deepest truths.",
  "And sometimes, the quietest voices say the loudest things.",
  "",
  "Yours truly,",
  "Time."
];

let index = 0;
let hasUnfolded = false;

function unfoldPaper() {
  if (hasUnfolded) return; // prevent re-trigger
  hasUnfolded = true;

  const paper = document.getElementById('paper');
  const handwriting = document.getElementById('handwriting');

  paper.classList.add('unfolded');
  handwriting.innerHTML = '';
  index = 0;

  setTimeout(typeLine, 1300); // wait for unfold animation
}

function typeLine() {
  if (index < lines.length) {
    document.getElementById('handwriting').innerHTML += lines[index] + '\n';
    index++;
    setTimeout(typeLine, 600);
  }
}
