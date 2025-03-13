const questions = [
    {
      question: "What is the primary purpose of teaching ?",
      answers: [
        { text: "To entertain children", correct: false },
        { text: "To solely lecture and deliver information", correct: false },
        { text: "To expose a child to essential knowledge, values, skills, and attitudes", correct: true },
        { text: "To discipline without explanation", correct: false }
      ]
    },
    {
      question: "Which of the following best describes direct teaching?",
      answers: [
        { text: "Teaching in a well-organized environment using prescribed materials", correct: true },
        { text: "Learning solely through play", correct: false },
        { text: "Self-directed online learning", correct: false },
        { text: "Teaching exclusively by demonstration", correct: false }
      ]
    },
    {
      question: "What is an example of indirect teaching?",
      answers: [
        { text: "A textbook reading assignment", correct: false },
        { text: "A teacher lecturing in class", correct: false },
        { text: "A computer-based tutorial", correct: false },
        { text: "A parent or sibling teaching a child outside a formal classroom", correct: true }
      ]
    },
    {
      question: "What does teaching aim to develop in a child?",
      answers: [
        { text: "Only memorization skills", correct: false },
        { text: "The innate tendencies and potentials for becoming a useful member of society", correct: true },
        { text: "A competitive spirit without teamwork", correct: false },
        { text: "Strict obedience without understanding", correct: false }
      ]
    },
    {
      question: "In traditional settings, what role did the teacher play?",
      answers: [ 
        { text: "A passive observer", correct: false },
        { text: "A facilitator of group discussions", correct: false },
        { text: "An authoritarian dictator in the classroom", correct: true },
        { text: "A co-learner with students", correct: false }
      ]
    },
    {
      question: "Which group of educationists challenged the authoritarian teaching model?",
      answers: [
        { text: "Rousseau, Pestalozzi, Herbart, Froebel, Montessori, and Dewey", correct: true },
        { text: "Einstein, Newton, Galileo, Copernicus", correct: false },
        { text: "Plato, Aristotle, Socrates, Confucius", correct: false },
        { text: "Modern business leaders", correct: false }
      ]
    },
    {
      question: "According to Sequeira (2018), teaching is defined as:",
      answers: [
        { text: "A method of entertainment", correct: false },
        { text: "Only the delivery of lectures", correct: false },
        { text: "An activity done solely by textbooks", correct: false },
        { text: "A set of events outside the learners designed to support internal processes of learning", correct: true }
      ]
    },
    {
      question: "According to Obidi (1975), what is essential for an occupation to be considered a profession?",
      answers: [
        { text: "Exclusive technical competence and adherence to service ideals", correct: true },
        { text: "High earnings regardless of skills", correct: false },
        { text: "Popularity among the public", correct: false },
        { text: "Only a long history", correct: false }
      ]
    },
    {
      question: "What does Hoyle and Megarry (1980) emphasize about a profession?",
      answers: [
        { text: "It is defined by frequent job changes", correct: false },
        { text: "It is based solely on manual labor", correct: false },
        { text: "It asserts a monopoly of knowledge and offers unique services", correct: true },
        { text: "It is unregulated and informal", correct: false }
      ]
    },
    {
      question: "Which characteristic did Falade (1993) mention as essential for a profession?",
      answers: [
        { text: "A short period of on-the-job experience", correct: false },
        { text: "Specialized skills and competencies acquired through extensive training", correct: true },
        { text: "No need for formal education", correct: false },
        { text: "Only natural talent", correct: false }
      ]
    },
    {
      question: "What distinguishes a career from a mere occupation?",
      answers: [
        { text: "Not requiring any specialized training", correct: false },
        { text: "Performing the same tasks without change", correct: false },
        { text: "Only working part-time", correct: false },
        { text: "Continuous improvement and professional growth", correct: true }
      ]
    },
    {
      question: "Why is specialized knowledge important in the teaching profession?",
      answers: [
        { text: "It replaces the need for practical skills", correct: false },
        { text: "It is only needed for administrative work", correct: false },
        { text: "It equips practitioners with the necessary intellectual and scientific foundations", correct: true },
        { text: "It is optional for experienced teachers", correct: false }
      ]
    },
    {
      question: "Which of the following is NOT a criterion for a career to become a profession?",
      answers: [
        { text: "A clearly defined code of ethics", correct: false },
        { text: "Possession of specialized knowledge", correct: false },
        { text: "Random hiring without standards", correct: true  },
        { text: "Legal recognition", correct: false }
      ]
    },
    {
      question: "What is the purpose of having a professional code of conduct in teaching?",
      answers: [
        { text: "To guide behavior and ensure adherence to ethical standards", correct: true },
        { text: "To increase teachers' salaries", correct: false },
        { text: "To allow teachers complete freedom without oversight", correct: false },
        { text: "To limit professional development", correct: false }
      ]
    },
    {
      question: "Which of the following is an example of a professional organization for teachers mentioned in the document?",
      answers: [
        { text: "UNICEF", correct: false },
        { text: "NBA", correct: false },
        { text: "FIFA", correct: false },
        { text: "ASUU", correct: true }
      ]
    },
    {
      question: "What does legal recognition of a profession entail?",
      answers: [
        { text: "It is based solely on peer reviews", correct: false },
        { text: "It only requires popularity in the media", correct: false },
        { text: "It must be recognized by both the public and government through acts or decrees", correct: true },
        { text: "It depends on social media presence", correct: false }
      ]
    },
    {
      question: "What benefit does freedom of practice provide to a professional?",
      answers: [
        { text: "Autonomy to perform their duties and derive psychological satisfaction", correct: true },
        { text: "Unlimited vacation time", correct: false },
        { text: "Exemption from any professional standards", correct: false },
        { text: "The ability to work without any qualifications", correct: false }
      ]
    },
    {
      question: "What does 'control of entry requirement' in a profession refer to?",
      answers: [
        { text: "Based solely on recommendations", correct: false },
        { text: "Allowing anyone to join without assessment", correct: false },
        { text: "Setting and enforcing specific criteria for selection, training, and certification", correct: true },
        { text: "A random lottery system", correct: false }
      ]
    },
    {
      question: "Why are in-service trainings important for teaching professionals?",
      answers: [
        { text: "They only serve as a formality", correct: false },
        { text: "They keep teachers updated on the latest developments and improve their skills", correct: true },
        { text: "They are used to monitor attendance", correct: false },
        { text: "They reduce the need for initial training", correct: false }
      ]
    },
    {
      question: "What is the purpose of internships or apprenticeships in teaching?",
      answers: [
        { text: "To expose prospective teachers to practical classroom experiences", correct: true },
        { text: "To replace theoretical studies entirely", correct: false },
        { text: "To delay certification", correct: false },
        { text: "To focus only on administrative tasks", correct: false }
      ]
    },
  ];


  const questionElement = document.getElementById("question");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");
  
  let currentQuestionIndex = 0;
  let score =0;

  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0
    nextButton.innerHTML = "NEXT"
    showQuestion();
  }

  function showQuestion() { 
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". "+ currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
  })
}

  function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    } 
  }

  function selectAnswer(e){
    const selectedBtn = e.target;
    const iscorrect = selectedBtn.dataset.correct === "true";
    if(iscorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
  }

  function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block"
  }

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

  nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
  });

  startQuiz();