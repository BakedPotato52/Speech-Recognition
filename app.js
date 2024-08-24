document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-btn');
    const resultPara = document.getElementById('result');

    // Check if the browser supports the Web Speech API
    if (!('webkitSpeechRecognition' in window)) {
        alert('Your browser does not support Speech Recognition. Please try Chrome.');
        return;
    }

    // Create a new instance of the SpeechRecognition object
    const recognition = new webkitSpeechRecognition();

    // Set properties for the SpeechRecognition object
    recognition.continuous = false; // Stops after a single recognition
    recognition.interimResults = false; // Do not return interim results
    recognition.lang = 'en-US'; // Set language to English

    // Event handler for when speech recognition results are returned
    recognition.onresult = (event) => {
        const speechResult = event.results[0][0].transcript;
        resultPara.textContent = `You said: ${speechResult}`;
    };

    // Event handler for errors
    recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        resultPara.textContent = 'Error occurred in recognition: ' + event.error;
    };

    // Start the speech recognition when the button is clicked
    startBtn.addEventListener('click', () => {
        recognition.start();
    });
});
