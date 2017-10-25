{ quiz_id: 1,
  question: "array.detect { |x| x > 3 }",
  array: "[3, 4, 5, 6, 7, 8]",
  answer: "4",
  wrong_answer: "3",
  method: "detect",
  quiz_type: "True Or False",
  choices: "[4, 3, 6, null]",
  correct: false}


  function currentQuiz() {
    $.ajax({
      method: 'GET',
      url: 'http://localhost:3000/api/v1/quiz',
      })
  }

  function addQuestionToAPI() {
    $.ajax({
      method: 'POST',
      url: 'http://localhost:3000/api/v1/question/create',
      data: {
        quiz_id: 1,
        question: "array.detect { |x| x > 3 }",
        array: "[3, 4, 5, 6, 7, 8]",
        answer: "4",
        wrong_answer: "3",
        method: "detect",
        quiz_type: "True Or False",
        choices: "[4, 3, 6, null]",
        correct: false},
      success: function(resp){ console.log(resp) }
      })
  }
