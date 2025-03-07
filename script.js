const memberDescriptions = {
  peto: 'Hrám na gitaru a spievam.',
  david: 'Hrám na basu, ale zahrám sa aj s tvojimi citmi.',
  matus: 'Hrám na klávesy, popritom však zvládam aj tanečky a kadejaké pokriky do mikrofónu.',
  lukas: 'Škopky su moje druhé meno.'
};

function openModal(member) {
  const modal = document.getElementById('member-modal');
  const modalContent = document.getElementById('modal-content');
  const modalName = document.getElementById('modal-name');
  const modalDescription = document.getElementById('modal-description');

  modal.style.display = 'block';
  modalContent.style.display = 'block';

  // Upravené mená s diakritikou
  const memberNames = {
    peto: 'PETER PRIBILINEC',
    david: 'DÁVID MAJLIŠ',
    matus: 'MATÚŠ NADŽADY',
    lukas: 'LUKÁŠ FARBAR'
  };

  modalName.textContent = memberNames[member];
  modalDescription.textContent = memberDescriptions[member];
}

function closeModal() {
  const modal = document.getElementById('member-modal');
  const modalContent = document.getElementById('modal-content');
  modal.style.display = 'none';
  modalContent.style.display = 'none';
}

// Skrývanie navigácie pri skrolovaní nadol
let lastScrollTop = 0;
const nav = document.querySelector('header nav');
const scrollThreshold = 50; // Minimálna vzdialenosť skrolovania pre aktiváciu

window.addEventListener('scroll', function() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Ak sme na vrchu stránky, vždy zobrazíme navigáciu
  if (scrollTop <= 0) {
    nav.classList.remove('hidden');
    return;
  }

  // Skryjeme navigáciu pri skrolovaní nadol a zobrazíme pri skrolovaní nahor
  if (Math.abs(scrollTop - lastScrollTop) > scrollThreshold) {
    if (scrollTop > lastScrollTop) {
      // Skrolujeme nadol
      nav.classList.add('hidden');
    } else {
      // Skrolujeme nahor
      nav.classList.remove('hidden');
    }
    lastScrollTop = scrollTop;
  }
});

// Pridajte event listener na modal
window.addEventListener('click', function(event) {
    const modal = document.getElementById('member-modal');
    if (event.target === modal) {
        closeModal();
    }
});

