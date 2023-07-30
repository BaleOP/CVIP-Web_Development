
function generateWorkQuote() {
    const workQuotes = [
        "Hard work beats talent when talent doesn't work hard.",
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "The only way to do great work is to love what you do.",
        "The future belongs to those who believe in the beauty of their dreams.",
        "The only limit to our realization of tomorrow will be our doubts of today.",
        "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.",
        "The secret to getting ahead is getting started.",
        "The future belongs to those who believe in the beauty of their dreams.",
    ];

    const randomIndex = Math.floor(Math.random() * workQuotes.length);
    return workQuotes[randomIndex];
}


function generateRelationshipQuote() {
    const relationshipQuotes = [
        "Love is composed of a single soul inhabiting two bodies.",
        "A successful marriage requires falling in love many times, always with the same person.",
        "The best thing to hold onto in life is each other.",
        "Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day.",
        "The greatest happiness you can have is knowing that you do not necessarily require happiness.",
        "A happy marriage is a long conversation that always seems too short.",
        "Love is when the other person's happiness is more important than your own.",
        "Love does not consist of gazing at each other, but in looking outward together in the same direction.",
    ];

    const randomIndex = Math.floor(Math.random() * relationshipQuotes.length);
    return relationshipQuotes[randomIndex];
}

function displayWorkQuote() {
    const quoteContainer = document.getElementById('workQuote');
    const quote = generateWorkQuote();
    quoteContainer.innerHTML = `Work Quote: "${quote}"`;
}

function displayRelationshipQuote() {
    const quoteContainer = document.getElementById('relationshipQuote');
    const quote = generateRelationshipQuote();
    quoteContainer.innerHTML = `Relationship Quote: "${quote}"`;
}
