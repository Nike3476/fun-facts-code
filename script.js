const facts = [
    // Earth Facts
    "The Earth's core is as hot as the surface of the Sun.",
    "Antarctica is the driest, coldest, and windiest continent.",
    "Mount Everest grows by about 4 millimeters every year.",
    "Lightning strikes the Earth about 100 times per second.",
    "The Amazon Rainforest produces about 20% of the world's oxygen.",
    "Antarctica is the driest, coldest, and windiest continent on Earth.",
    "A day on Earth is not exactly 24 hours—it's actually 23 hours, 56 minutes, and 4 seconds.",
    "There’s a giant underground ocean beneath the Earth's surface.",
    "Earth’s magnetic field protects us from harmful solar radiation.",
    "The Sahara Desert was once a lush, green paradise.",
    "The deepest part of the ocean, the Mariana Trench, is over 36,000 feet deep.",
    "The Moon is slowly drifting away from Earth at about 1.5 inches per year.",
    "The Earth’s core is as hot as the surface of the Sun.",
    
    // Human Facts
    "Your brain generates enough electricity to power a small lightbulb.",
    "Your heart beats over 100,000 times a day.",
    "You have more bacterial cells in your body than human cells.",
    "The human brain generates enough electricity to power a small light bulb.",
    "Your bones are about five times stronger than steel.",
    "Humans shed about 600,000 skin particles per hour.",
    "Your liver can regenerate even if 75% of it is removed.",
    "Your body produces about 25 million new cells every second.",
    "The human nose can detect over a trillion different scents.",
    "Your small intestine is about 22 feet long.",
    "Your fingernails grow faster than your toenails.",
    "The human eye can distinguish over 10 million colors.",
    "The acid in your stomach is strong enough to dissolve metal.",

    // Life Facts
    "A single tree can absorb over 48 pounds of CO₂ per year.",
    "Bananas share about 50% of their DNA with humans.",
    "Cows have best friends and get stressed when separated.",
   "Your heart beats about 100,000 times per day.",
    "A single cloud can weigh more than a million pounds.",
    "Octopuses have three hearts and blue blood.",
    "Butterflies can taste with their feet.",
    "Your body has more bacteria than human cells.",
    "Water makes up about 60% of the human body.",
    "The average person walks the equivalent of five times around the world in a lifetime.",
    "There are more trees on Earth than stars in the Milky Way.",
    "Sharks predate trees by around 200 million years.",
    "The average cloud is about 1.1 million pounds in weight.",
    
    
    
    // History Facts
    "The Great Wall of China is not visible from the Moon.",
    "Napoleon was once attacked by a horde of bunnies.",
    "Cleopatra lived closer in time to the iPhone than to the pyramids.",
    "The Great Wall of China is over 13,000 miles long.",
    "Cleopatra lived closer in time to the Moon landing than to the construction of the Great Pyramid of Giza.",
    "The shortest war in history lasted only 38 to 45 minutes (Anglo-Zanzibar War).",
    "Napoleon was once attacked by a horde of bunnies.",
    "The Eiffel Tower can grow taller in summer due to heat expansion.",
    "Ancient Romans used urine to wash their clothes.",
    "The Titanic's distress signal was one of the first to use 'SOS'.",
    "Walt Disney was afraid of mice.",
    "Albert Einstein’s brain was removed and preserved after his death.",
    "The first recorded Olympic Games took place in 776 BC.",
    
   
];

const jokes = [
    "Why don’t scientists trust atoms? Because they make up everything!",
    "Why did the computer go to therapy? It had too many bugs.",
    "Why was the math book sad? It had too many problems.",
    "Parallel lines have so much in common… it’s a shame they’ll never meet.",
    "Why don’t skeletons fight each other? They don’t have the guts.",
    "I told my suitcase there will be no vacations this year… Now I’m dealing with emotional baggage.",
    "Why do cows have hooves instead of feet? Because they lactose!"
];

const riddles = [
    { question: "What comes once in a minute, twice in a moment, but never in a thousand years?", answer: "The letter 'M'." },
    { question: "I have keys but open no locks. What am I?", answer: "A piano." },
    { question: "The more you take, the more you leave behind. What am I?", answer: "Footsteps." },
    { question: "What has to be broken before you can use it?", answer: "An egg." },
    { question: "What has cities, but no houses; forests, but no trees; and rivers, but no water?", answer: "A map." },
    { question: "The person who makes it doesn’t need it. The person who buys it doesn’t use it. The person who uses it doesn’t know they are using it. What is it?", answer: "A coffin." }
];

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateFact() {
    document.getElementById("fact").innerText = getRandomElement(facts);
}

function generateJoke() {
    document.getElementById("joke").innerText = getRandomElement(jokes);
}

function generateRiddle() {
    let riddle = getRandomElement(riddles);
    document.getElementById("riddle").innerText = riddle.question;
    document.getElementById("answer").innerText = "Click below to reveal the answer!";
    document.getElementById("answer").classList.add("hidden");
}

function showAnswer() {
    let displayedRiddle = document.getElementById("riddle").innerText;
    let answer = riddles.find(r => r.question === displayedRiddle).answer;
    document.getElementById("answer").innerText = answer;
    document.getElementById("answer").classList.remove("hidden");
}
