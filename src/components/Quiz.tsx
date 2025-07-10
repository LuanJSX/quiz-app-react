import React, { useState } from "react";
export default function Quiz() {
  const questionBank = [
    {
      question: "Em que estado está localizada a cidade de Juiz de Fora?",
      options: [
        "São Paulo",
        "Rio de Janeiro",
        "Minas Gerais",
        "Espírito Santo",
      ],
      answer: "Minas Gerais",
    },
    {
      question: "Qual universidade federal tem sede em Juiz de Fora?",
      options: ["UFMG", "UFJF", "UFF", "UFES"],
      answer: "UFJF",
    },
    {
      question: "Qual rio corta a cidade de Juiz de Fora?",
      options: [
        "Rio Doce",
        "Rio São Francisco",
        "Rio Paraibuna",
        "Rio das Velhas",
      ],
      answer: "Rio Paraibuna",
    },
  ];

  const initialAnswer = [null, null, null];

  const [userAnswers, setUserAnswer] = useState(initialAnswer);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const selectedAnswer = userAnswers[currentQuestion];

  function handleSelectOption(option, key) {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = option;

    setUserAnswer(newUserAnswers);
  }

  function goToNext() {
    setCurrentQuestion(currentQuestion + 1);
  }

  function goToPrev() {
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
  }

  return (
    <div>
      <h2>Questão 1</h2>
      <p className="question">{questionBank[currentQuestion].question}</p>
      {questionBank[currentQuestion].options.map((option, key) => (
        <button
          key={key}
          className={"option" + (selectedAnswer === option ?" selected" : "")}
          onClick={() => handleSelectOption(option, key)}
        >
          {option} 
        </button>
      ))}

      <div className="nav-buttons">
        <button onClick={goToPrev} disabled={currentQuestion === 0}>
          Anterior
        </button>
        <button onClick={goToNext} disabled={!selectedAnswer}>
          Proxima
        </button>
      </div>
    </div>
  );
}
