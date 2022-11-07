let questions = [
    {
        "question": "NBA stands for?",
        "answer_1": "National Basket Association",
        "answer_2": "Named Basketball Alliance",
        "answer_3": "National Basketball Association",
        "answer_4": "National Basketball Alliance",
        "right_answer": "National Basketball Association"
    },
    
    {
        "question": "Los Angeles ..., Dallas ..., Phoenix ...",
        "answer_1": "Lakers, Blizzards, Hawks",
        "answer_2": "Clippers, Mavericks, Suns",
        "answer_3": "Lakers, Mavericks, Timberwolves",
        "answer_4": "Blazers, Heat, Suns",
        "right_answer": "Clippers, Mavericks, Suns"
    },

    {
        "question": "Who has the most rings? (Championships won)",
        "answer_1": "Michael Jordan",
        "answer_2": "LeBron James",
        "answer_3": "Hakeem Olajuwon",
        "answer_4": "Bill Russell",
        "right_answer": "Bill Russell"
    },

    {
        "question": "What was 'the Decision'? ",
        "answer_1": "NBA Finals 2004 between the Lakers and the Pistons",
        "answer_2": "Michael Jordan leaving the NBA to try competitive Golf",
        "answer_3": "The Cavaliers drafting Anthony Bennett",
        "answer_4": "LeBron James announcing where he would play next - the Miami Heat",
        "right_answer": "LeBron James announcing where he would play next - the Miami Heat"
    },

    {
        "question": "Which teams did LeBron James play for? (in order) ",
        "answer_1": "Miami Heat, Chicago Bulls, Los Angeles Lakers",
        "answer_2": "Cleveland Cavaliers, Miami Heat, Los Angeles Lakers",
        "answer_3": "Philadelphia 76ers, Los Angeles Lakers",
        "answer_4": "Los Angeles Lakers",
        "right_answer": "Cleveland Cavaliers, Miami Heat, Los Angeles Lakers"
    },
];

let AUDIO_SUCCESS = new Audio('sounds/success.mp3');
let AUDIO_FAILURE = new Audio('sounds/failure.mp3');

let rightAnswers = 0;

function nextQuestion(i, x) {
    document.getElementById('questions').innerHTML = ``
    let x1 = questions.length;
    let x2 = (i/x1);
    let x3 = (x2 * 100);
    document.getElementById('questions').innerHTML = 
    `
    <div class="progress">
    <div class="progress-bar" role="progressbar" style="width: ${x3}%;" aria-valuenow="${x3}" aria-valuemin="0" aria-valuemax="100">${x3}%</div>
    </div>
    <div class="questionText">
        ${questions[i]['question']} 
    </div>

    <div id="card1" onclick="checkAnswer${i}(${i}, 1)" class="card">
        <div class="card-body">
            ${questions[i]['answer_1']}
        </div>
    </div>

    <div id="card2" onclick="checkAnswer${i}(${i}, 2)" class="card">
        <div class="card-body">
            ${questions[i]['answer_2']}
        </div>
    </div>

    <div id="card3" onclick="checkAnswer${i}(${i}, 3)" class="card">
        <div class="card-body">
            ${questions[i]['answer_3']}
        </div>
    </div>

    <div id="card4" onclick="checkAnswer${i}(${i}, 4)" class="card">
        <div class="card-body">
            ${questions[i]['answer_4']}
        </div>
    </div>

    <div class="belowAnswers">
        <div> <b> ${x} </b> of <b> ${questions.length} </b> Questions </div>
        <div> <button type="button" id="nextButton" onclick="nextQuestion(${++i},${++x})" class="btn btn-primary" disabled>Next</button> </div>
    </div>

    `

    if (i == 5) {
        document.getElementById('nextButton').setAttribute( "onClick", "endscreen()" );
    }
    
}

function checkAnswer0(i, x) {
    correctAnswer = questions[i]['right_answer'];
    answer = questions[i][`answer_${x}`]

    if (answer == correctAnswer) {
        document.getElementById(`card${x}`).classList.add("bg-green");
        AUDIO_SUCCESS.play();
        rightAnswers++;
    } else {
        document.getElementById(`card${x}`).classList.add("bg-red");
        document.getElementById('card3').classList.add("bg-green");
        AUDIO_FAILURE.play();
    }
    function removeOnClick();
    document.getElementById('nextButton').disabled = false;
}




function checkAnswer1(i, x) {
    correctAnswer = questions[i]['right_answer'];
    answer = questions[i][`answer_${x}`]

    if (answer == correctAnswer) {
        document.getElementById(`card${x}`).classList.add("bg-green");
        AUDIO_SUCCESS.play();
        rightAnswers++;
    } else {
        document.getElementById(`card${x}`).classList.add("bg-red");
        document.getElementById('card2').classList.add("bg-green");
        AUDIO_FAILURE.play();
    }
    function removeOnClick();
    document.getElementById('nextButton').disabled = false;
}

function checkAnswer2(i, x) {
    correctAnswer = questions[i]['right_answer'];
    answer = questions[i][`answer_${x}`]

    if (answer == correctAnswer) {
        document.getElementById(`card${x}`).classList.add("bg-green");
        AUDIO_SUCCESS.play();
        rightAnswers++;
    } else {
        document.getElementById(`card${x}`).classList.add("bg-red");
        document.getElementById('card4').classList.add("bg-green");
        AUDIO_FAILURE.play();
    }
    function removeOnClick();
    document.getElementById('nextButton').disabled = false;
}

function checkAnswer3(i, x) {
    correctAnswer = questions[i]['right_answer'];
    answer = questions[i][`answer_${x}`]

    if (answer == correctAnswer) {
        document.getElementById(`card${x}`).classList.add("bg-green");
        AUDIO_SUCCESS.play();
        rightAnswers++;
    } else {
        document.getElementById(`card${x}`).classList.add("bg-red");
        document.getElementById('card4').classList.add("bg-green");
        AUDIO_FAILURE.play();
    }
    function removeOnClick()
    document.getElementById('nextButton').disabled = false;
}

function checkAnswer4(i, x) {
    correctAnswer = questions[i]['right_answer'];
    answer = questions[i][`answer_${x}`]

    if (answer == correctAnswer) {
        document.getElementById(`card${x}`).classList.add("bg-green");
        AUDIO_SUCCESS.play();
        rightAnswers++;
    } else {
        document.getElementById(`card${x}`).classList.add("bg-red");
        document.getElementById('card2').classList.add("bg-green");
        AUDIO_FAILURE.play();
    }
    function removeOnClick();
    document.getElementById('nextButton').disabled = false;
}

function endscreen() {
    document.getElementById('questions').classList.add('bg-none');
    document.getElementById('questions').innerHTML =
    `
    <div class="progress">
    <div class="progress-bar" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
    </div>
    <img class="brainResult" src="img/brain result.png">
    <div class="congrats"> Congrats </div>
    <div class="result"> Your result <b> ${rightAnswers} </b> out of <b> ${questions.length} </b> </div>
    <button onclick="nextQuestion(0, 1)" type="button" class="btn mt-5 btn-primary">Try Again</button>
    `
    rightAnswers = 0;
}

function removeOnClick() {
return    document.getElementById('card1').removeAttribute("onclick");
          document.getElementById('card2').removeAttribute("onclick");
          document.getElementById('card3').removeAttribute("onclick");
          document.getElementById('card4').removeAttribute("onclick");
}
