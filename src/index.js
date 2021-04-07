// Help
function log(message) {
  console.log('> ' + message);
}

// App
const cards = document.querySelectorAll('.card');
const dropzones = document.querySelectorAll('.dropzone');

// our cards
cards.forEach(card => {
  card.addEventListener('dragstart', dragstart)
  card.addEventListener('drag', drag)
  card.addEventListener('dragend', dragend)
});

function dragstart() {
  // this = card
  dropzones.forEach(dropzone => dropzone.classList.add('highlight'));

  this.classList.add('is-dragging');
}

function drag() {
  // log('CARD: Is dragging');
}

function dragend() {
  // log('CARD: End of dragging');
  dropzones.forEach(dropzone => dropzone.classList.remove('highlight'));
  this.classList.remove('is-dragging');
}

// when drop the cards:

dropzones.forEach(dropzone => {
  dropzone.addEventListener('dragenter', dragenter)
  dropzone.addEventListener('dragover', dragover)
  dropzone.addEventListener('dragleave', dragleave)
  dropzone.addEventListener('drop', drop)
});

function dragenter(params) {
  // log('DROPZONE: Entered in zone!');
}

function dragover() {
  // this = dropzone
  this.classList.add('over');

  //get the card that is dragging
  const cardBeingDragged = document.querySelector('.is-dragging');

  // this = dropzone
  this.appendChild(cardBeingDragged);

}

function dragleave() {
  // this = dropzone
  this.classList.remove('over');
}

function drop() {
  // log('DROPZONE: Dropped!');
  this.classList.remove('over'); 
}
