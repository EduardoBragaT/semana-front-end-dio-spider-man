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
    console.log(cardElements)
    for(let card of cardElements){
        card.addEventListener("mouseenter", handleMouseEnter);
        card.addEventListener("mouseleave", handleMouseLeave);
    }
};

document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);