var question = null, questions = null
var currentQuestion = 0
var questionsMC = 0; questionsTF = 0; questionsE = 0
var questionsRight = 0; questionsWrong = 0
var whatever = 0; true_false = null
var arr14 = [1,2,3,4]; arr12 = [1,2]; arr23 = [2,3]

$(document).ready(function(){
  console.log('Document ready!')
  $('#return_to_main').hide();
  // debugging for final score, comment out hide line
  $('#final_score').hide()
  hideQuizSection()
  $('#correct_choice').css('background-color', '#0C0')

  quizStartListener()

  $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/api/v1/welcome',
    success: function(response){
      questions = response

      }
  })
})

function createQuizFromAjax() {
  $.ajax({
    method: 'POST',
    url: 'http://localhost:3000/api/v1/quiz/create',
    data: {
        username: "TestUser",
  			category: "all",
  			quiz_type: "all",
  			language: "Ruby",
  			score: 0},
    success: function(resp){ console.log(resp) }
    })
}


function progressBar() {
  whatever = ((question['id']) * 10)
  $('#progress-bar')[0]['style']['width'] = `${whatever}%`
}
