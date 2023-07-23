// Function to create word divs with initial color 'light-gray'
function createWordDivs(inputText, currentWordIndex) {
    const words = inputText.split(' ');

    const wordDivs = words.map((word, index) => {
        const opacity = index % 2 === 0 ? 1 : 0; // Set opacity to 1 for the current word, 0 for others
        return `<div style="opacity: ${opacity}" id="word-${index}">${word}</div>`;
    });

    // Join the word divs into a new string
    const wordDivsHTML = wordDivs.join(' ');

    // Display the word divs in the paragraph element
    const alternateWordElement = document.getElementById('alternate-word');
    alternateWordElement.innerHTML = wordDivsHTML;
}

document.addEventListener('DOMContentLoaded', function () {
    const inputText = 'This is a test input'; // A sample input text

    // Display the input text
    const enteredTextElement = document.getElementById('entered-text');
    enteredTextElement.textContent = `Entered Text: ${inputText}`;

    let currentWordIndex = 0; // Track the current word index

    // Initial display of the word divs
    createWordDivs(inputText, currentWordIndex);

    // Attach the keyup event listener to the document
    document.addEventListener('keyup', function (event) {
        const typedChar = event.key.toLowerCase();

        // Update the color of the current word based on the typed character
        const words = inputText.split(' ');
        const currentWord = words[currentWordIndex];
        const firstChar = currentWord.charAt(0).toLowerCase();

        // Change color based on matching or not matching the typed character
        const colorClass = firstChar === typedChar ? 'green' : 'red';
        const wordDiv = document.querySelector(`#word-${currentWordIndex}`);
        wordDiv.style.opacity = 1; // Set opacity to 1 to make the word visible
        wordDiv.className = colorClass;

        // Hide the alternate words by setting their opacity to 0


        // Move to the next word for the next keypress
        currentWordIndex = (currentWordIndex + 1) % words.length;
    });
});
