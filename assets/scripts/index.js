function handleMouseEnter () {
    this.classList.add('spiderman-card--hovered');
    document.body.id = `${this.id}-hovered` 
}

function handleMouseLeave () {
    this.classList.remove('spiderman-card--hovered');
    document.body.id = `` 
}

function addEventListenersToCards() {
    const cardElements = document.getElementsByClassName('spiderman-card');
    for(let card of cardElements){
        card.addEventListener("mouseenter", handleMouseEnter);
        card.addEventListener("mouseleave", handleMouseLeave);
    }
};

function selectCarouselItem(selectedButtonElement) {
    const selectedItem = selectedButtonElement.id;
    const carousel = document.querySelector('.spiderman-cards-carousel');
    const transform = carousel.style.transform;
    const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
    const rotateYDeg = -120 * (Number(selectedItem) - 1);
    const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);
    carousel.style.transform = newTransform;

    const activeButtonElement = document.querySelector(".spiderman-controller__button--active");
    activeButtonElement.classList.remove("spiderman-controller__button--active");
    selectedButtonElement.classList.add("spiderman-controller__button--active");
}

document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);