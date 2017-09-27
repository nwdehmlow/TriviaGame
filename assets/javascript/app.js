var startScreen;
var gameHTML;
var counter = 30;
var questionArray = ["Where did the name 'The Rolling Stones' come from?", "What was the name of their first single?", "Keith Richards said he woke up from a dream one morning with a new riff stuck in his head.  What song was written using this riff?", "Which member of the band died after drowning in a pool in July of 1969?", "What guitarist replaced Brian Jones after he passed away?", "What is the name of the first song to feature Keith Richards on lead vocals?", "At the end of 1969, The Rolling Stones held a free music festival attended by over 300,000 people, that ended after an audience member was stabbed to death by the Hells Angels, who were hired to work as security.  Where was this festival held?", "What is the nickname given to the songwriting partnership of Mick Jagger and Keith Richards?"];
var answerArray = [["A Muddy Waters Song", "A Bob Dylan Song", "Their manager came up with it", "A Howlin' Wolf Song"], ["(I Can't Get No) Satisfaction","Come On","The Last Time","Get Off of My Cloud"], ["Jumpin' Jack Flash", "Paint It Black", "(I Can't Get No) Satisfaction", "Midnight Rambler"], ["Bill Wyman","Charlie Watts","Brian Jones","Ian Stuart"], ["Ronnie Wood", "Jimmy Page", "Steve Marriott", "Mick Taylor"], ["You Got the Silver","Monkey Man","Midnight Rambler","Happy"], ["Woodstock", "Altamont Speedway", "Monterey County Fairgrounds", "Hyde Park"], ["The Glitter Guys","The Wild Horses","The Monkey Men","The Glimmer Twins"]];
var imageArray = ["<img class='center-block img-right' src='assets/images/muddy.png' style='height:50%;width:50%;'>", "<img class='center-block img-right' src='assets/images/comeon.png' style='height:75%;width:75%;'>", "<img class='center-block img-right' src='assets/images/satisfaction.png' style='height:75%;width:75%;'>", "<img class='center-block img-right' src='assets/images/brianjones.png' style='height:50%;width:50%;'>", "<img class='center-block img-right' src='assets/images/micktaylor.png'>", "<img class='center-block img-right' src='assets/images/keith.png' style='height:50%;width:50%;'>", "<img class='center-block img-right' src='assets/images/altamont.png' style='height:75%;width:75%;'>", "<img class='center-block img-right' src='assets/images/glimmertwins.png' style='height:75%;width:75%;'>"];
var correctAnswer = ["A. A Muddy Waters Song", "B. Come On", "C. (I Can't Get No) Satisfaction", "C. Brian Jones", "D. Mick Taylor", "A. You Got the Silver", "B. Altamont Speedway", "D. The Glimmer Twins"];
var questionCounter = 0;
var chosenAnswer;
var clock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;	



$(document).ready(function(){

	function beginningScreen(){
		startScreen = "<p class ='text=center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>START QUIZ</a></p>"
		$(".mainArea").html(startScreen)
	}

	beginningScreen();

		$("body").on("click", ".start-button", function(event){
			event.preventDefault();
			generateHTML();
			timerWrapper()
		});

		$("body").on("click", ".answer", function(event){
			chosenAnswer = $(this).text();
			if(chosenAnswer === correctAnswer[questionCounter]){
				clearInterval(clock)
				generateWin();
			}
			else{
				clearInterval(clock);
				generateLose();
			}
		});

		$("body").on("click",".reset-button",function(event){
			resetGame();

		});


		});

		function generateLossTimeOut(){
			unansweredTally++;
			gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time! The correct answer was: " + correctAnswer[questionCounter]+"</p>" + ">img class='center-nlock img-wrong' src='assets/images/wrong.png'>"
			$(".mainArea").html(gameHTML);
			setTimeout(wait, 4000)
		}

		function generateWin() {
			correctTally++;
			gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswer[questionCounter] + "</p>" + imageArray[questionCounter];
			$(".mainArea").html(gameHTML)
			setTimeout(wait, 4000)

		}
		
		function generateLose(){
			incorrectTally++;
			gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: " + correctAnswer[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='assets/images/x.png'>";
			$(".mainArea").html(gameHTML);
			setTimeout(wait, 4000);
		}

		function generateHTML() {
		gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
		$(".mainArea").html(gameHTML);
		}


		function wait() {
			if (questionCounter < 7) {
				questionCounter++;
				generateHTML();
				counter = 30;
				timerWrapper();
			}
			else{
				finalScreen();
			}
		}

		function timerWrapper() {
			clock = setInterval(thirtySeconds, 1000);
			function thirtySeconds() {
				if (counter === 0) {
					clearInterval(clock);
					generateLossTimeOut();
				}
				if (counter > 0) {
					counter--;
				}
			$(".timer").html(counter);
			}
		}

		function finalScreen() {
		gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
		$(".mainArea").html(gameHTML);
	}

		function resetGame() {
		questionCounter = 0;
		correctTally = 0;
		incorrectTally = 0;
		unansweredTally = 0;
		counter = 30;
		generateHTML();
		timerWrapper();
	}






















	



