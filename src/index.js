// Help
function log(message) {
  console.log('> ' + message);
}

// App
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('dragstart', dragstart)
  card.addEventListener('drag', drag)
  card.addEventListener('dragend', dragend)
});

function dragstart() {
  log('CARD: Starts the drag');
}

function drag() {
  log('CARD: Is dragging');
}

function dragend() {
  log('CARD: End of dragging');
}

// 32:05