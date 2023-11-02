const phrases = [
    "Stay tuned!",
    "Coming in a jiffy!",
    "Watch this space!",
    "Keep your eyes peeled!",
    "We're gearing up.",
    "Just around the corner.",
    "Preparing for launch.",
    "We're getting things ready.",
    "Coming your way shortly.",
    "Preparing for the big reveal.",
    "Prepping for a grand entrance.",
    "The countdown has begun!",
    "Preparing for a big surprise.",
    "Anticipating the big day.",
    "It's in the final stretch.",
    "Ready to unveil something special.",
    "Almost showtime!",
    "Exciting things on the horizon.",
    "Just a little more patience.",
    "The big reveal is coming.",
    "Brace yourself for something great.",
    "We're putting the finishing touches.",
    "It's worth the wait.",
    "Our grand unveiling is close.",
    "Something awesome is brewing.",
    "Keep your enthusiasm high.",
    "We're cooking up something fantastic.",
    "A spectacular moment is coming.",
    "Preparing to make a splash.",
    "Your excitement will pay off.",
    "Stay with us for updates."
];

function getRandomPhrase() {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    return phrases[randomIndex];
}

function updateListWithRandomPhrase() {
    const listElement = document.querySelector("#phrases-list");
    const phrase = getRandomPhrase();

    const listItem = document.createElement("li");
    listItem.textContent = phrase;

    listElement.appendChild(listItem);
}

updateListWithRandomPhrase();