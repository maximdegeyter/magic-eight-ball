{
  const answers = ["It is certain", "It is decidedly so", "Without a doubt",
  "Yes, definitely", "You may rely on it", "As I see it, yes",
  "Most likely", "Outlook good", "Signs point to yes", "Yes",
  "Reply hazy, try again", "Ask again later",
  "Better not tell you now", "Cannot predict now",
  "Concentrate and ask again", "Don't bet on it",
  "My reply is no", "My sources say no", "Outlook not so good",
  "Very doubtful"];

  const pickAnswer = () => {
    const $answer = document.querySelector('.eightball-text');
    const answer = answers[Math.floor(Math.random() * answers.length)];
    $answer.textContent = answer;
  };

  const showQuestion = input => {
    const $question = document.querySelector('.question');
    $question.textContent = input.value;
  }

  const handleClickQuestion = () => {
    ("click");
    const $input = document.querySelector('.question-text');
    const value = $input.value.trim();

    if(value) {
      showQuestion($input);
      pickAnswer();
    }
  }
  
  const init = () => {
    const $button = document.querySelector('.question-submit');
    $button.addEventListener('click', handleClickQuestion);
  };

  init();
}