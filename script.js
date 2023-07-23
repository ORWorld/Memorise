/* document.addEventListener('DOMContentLoaded', function () {
    const inputTextArea = document.getElementById('input-text');
    const nextPageBtn = document.getElementById('next-page-btn');

    nextPageBtn.addEventListener('click', function () {
        // Get the entered text from the textarea
        const inputText = inputTextArea.value;

        // Store the entered text in localStorage
        localStorage.setItem('enteredText', inputText);

        // Navigate to the next page (nextpage.html)
        window.location.href = 'nextpage.html';
    });
}); */

document.addEventListener('DOMContentLoaded', function () {
    // Retrieve the entered text from localStorage if it exists
    const inputText = localStorage.getItem('enteredText') || '';

    const inputTextArea = document.getElementById('input-text');
    if (inputTextArea) {
        // Set the value of the textarea to the stored inputText
        inputTextArea.value = inputText;
    }

    // Attach click event listener to the "Go to Next Page" button
    const goToNextPageButton = document.getElementById('next-page-btn');
    if (goToNextPageButton) {
        goToNextPageButton.addEventListener('click', function () {
            // Store the entered text in localStorage before navigating to the next page
            localStorage.setItem('enteredText', inputTextArea.value);
            window.location.href = 'nextpage.html';
        });
    }
});