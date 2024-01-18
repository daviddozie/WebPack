import generateJoke from "./generateJoke";
import './styles/main.scss';

const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generateJoke)

console.log(generateJoke());