function toggleSpoiler(event) {
  event.target.classList.toggle('spoiler-hidden');
}

const elements = document.querySelectorAll('.spoiler');

elements.forEach(element => {
  element.addEventListener('click', toggleSpoiler);
});