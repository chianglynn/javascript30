window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const words = document.querySelector('.words');
let p = document.createElement('p');
const recognition = new SpeechRecognition();
// recognition.lang = 'en-US';

recognition.interimResults = true;
words.appendChild(p);

recognition.addEventListener('result', (e) => {
    console.log(e.results[0]);
    const transcript = [...e.results]
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');
    p.textContent = transcript;
    if (e.results[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
    }
});

recognition.start();
recognition.addEventListener('end', recognition.start);