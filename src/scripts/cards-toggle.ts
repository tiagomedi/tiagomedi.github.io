// src/scripts/cards-toggle.ts
export function initCardsToggle() {
  const cards = document.querySelectorAll<HTMLElement>('.card-flip');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const currentState = card.dataset.flipped;
      card.dataset.flipped = currentState === 'true' ? 'false' : 'true';
    });
  });
}