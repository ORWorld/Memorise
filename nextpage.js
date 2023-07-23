
document.addEventListener('DOMContentLoaded', function () {
    let inputText = localStorage.getItem('enteredText') || '';

    // Retrieve the entered text from localStorage
    if (localStorage.getItem('enteredText')) {
        inputText = localStorage.getItem('enteredText');
    }

    const enteredTextElement = document.getElementById('entered-text');

    // Display the entered text
    //if (enteredTextElement) {
    //  enteredTextElement.textContent = `Entered Text: ${inputText}`;
    //}

    // Function to create word divs with initial opacity and color 'light-gray'
    function createWordDivs(inputText, currentWordIndex) {
        const words = inputText.split(' ');

        const wordDivs = words.map((word, index) => {
            const opacity = index % 2 === 0 ? 1 : 0; // Set opacity to 1 for the current word, 0 for others
            const colorClass = index % 2 === 0 ? '' : 'light-gray'; // Set color class to 'light-gray' for alternate words
            return `<span style="opacity: ${opacity}" class="${colorClass}" id="word-${index}">${word}</span>`;
        });

        // Join the word divs into a new string
        const wordDivsHTML = wordDivs.join(' ');

        // Display the word divs in the div element
        const alternateWordElement = document.getElementById('alternate-word');
        if (alternateWordElement) {
            alternateWordElement.innerHTML = wordDivsHTML;
        }
    }

    let currentWordIndex = 0; // Track the current word index

    // Initial display of the word divs
    createWordDivs(inputText, currentWordIndex);

    // Attach the keyup event listener to the document
    document.addEventListener('keyup', function (event) {
        const typedChar = event.key.toLowerCase();
        const words = inputText.split(' ');

        const currentWord = words[currentWordIndex];
        const firstChar = currentWord.charAt(0).toLowerCase();
        const wordDiv = document.querySelector(`#word-${currentWordIndex}`);

        if (wordDiv) {
            if (firstChar === typedChar) {
                wordDiv.style.opacity = 1; // Set opacity to 1 to make the word visible
                wordDiv.classList.remove('red'); // Remove 'red' class if previously unmatched
                wordDiv.classList.add('green'); // Add 'green' class for matched words
            } else {
                wordDiv.style.opacity = 1; // Set opacity to 1 to make the word visible
                wordDiv.classList.remove('green'); // Remove 'green' class if previously matched
                wordDiv.classList.add('red'); // Add 'red' class for unmatched words
            }
        }

        // Hide the alternate words by setting their opacity to 0

        // Move to the next word for the next keypress
        currentWordIndex = (currentWordIndex + 1) % words.length;
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // ... (rest of the code)

    // Event listener for the "Go Back to Home Page" button
    const goBackButton = document.getElementById('go-back-button');
    if (goBackButton) {
        goBackButton.addEventListener('click', function () {
            // Redirect the user to the homepage
            window.location.href = 'index.html';
        });
    }
});
