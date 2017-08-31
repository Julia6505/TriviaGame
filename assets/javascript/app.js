$(document).ready(function(){

//Timers
var number = 5;
var answerNumber = 5;
var intervalId; 

function run() {
    intervalId = setInterval(decrement, 1000);

}function decrement() {
    number--;
$(".timer").html("Time Remaining:" + "" + number);
if (number === 0) {
    stop(decrement);
   }
};
function decrementTimeOut() {
    answerNumber--;
    $("#test").html(answerNumber);
if (answerNumber === 0) {
    stop(decrementTimeOut);
   }
};
function stop() {
    clearInterval(intervalId);
};

question1 = {
    ask:"What was the name of Nickelodeon's Saturday night programming?",
    correctAnswer: "SNICK",
    answer2: "Slime",
    answer3: "SaturNick",
    answer4: "Super Saturday",
        };    

$("#start-button").on("click", function(){
$("#start-button").hide();
run(decrement);
$("#questions").text(question1.ask);
$("#button1").text(question1.correctAnswer);
$("#button2").text(question1.answer2);
$("#button3").text(question1.answer3);
$("#button4").text(question1.answer4); 
});
     


$(".btn.btn-secondary").on("click", function() {
    if ($(this).text() === question1.correctAnswer) {
        $(".btn.btn-secondary").hide();
        $("#questions").text("You got it dude!")
        $(".giphy").attr("src", "assets/images/giphysnick.gif")
        stop();
        setTimeout(function(){   
            $("#questions").text(question2.ask);
            $(".btn.btn-secondary").show();  
            $(".giphy").hide();
            $("#button1").text(question2.answer1);
            $("#button2").text(question2.answer2);
            $("#button3").text(question2.correctAnswer);
            $("#button4").text(question2.answer4); }, 5000);
            run(decrement);
            
        
        }else if ($(this).text() !== question1.correctAnswer) {
            $(".btn.btn-secondary").hide();
            $("#questions").text("Sorry, not the answer!")
            $(".giphy").attr("src", "assets/images/giphysnick.gif")
            stop();
            setTimeout(function(){   
                $("#questions").text(question2.ask);
                $(".btn.btn-secondary").show();  
                $(".giphy").hide();
                $("#button1").text(question2.answer1);
                $("#button2").text(question2.answer2);
                $("#button3").text(question2.correctAnswer);
                $("#button4").text(question2.answer4); }, 5000);

    // }$(".btn.btn-secondary").on("click", function() {
    // if ($(this).text() === question2.correctAnswer) {
    //     $(".btn.btn-secondary").hide();
    //     $("#questions").text("You got it dude!")
    //     $(".giphy").attr("src", "assets/images/giphysnick.gif")
    //     stop();
    //     setTimeout(function(){   
    //         $("#questions").text(question3.ask);
    //         $(".btn.btn-secondary").show();  
    //         $(".giphy").hide();
    //         $("#button1").text(question3.answer1);
    //         $("#button2").text(question3.answer2);
    //         $("#button3").text(question3.answer3);
    //         $("#button4").text(question2.correctAnswer); }, 5000);
    //         run(decrement);
            
    //     }else if ($(this).text() !== question1.correctAnswer) {
    //         $(".btn.btn-secondary").hide();
    //         $("#questions").text("Sorry, not the answer!")
    //         $(".giphy").attr("src", "assets/images/giphysnick.gif")
    //         stop();
    //         setTimeout(function(){   
    //             $("#questions").text(question3.ask);
    //             $(".btn.btn-secondary").show();  
    //             $(".giphy").hide();
    //             $("#button1").text(question3.answer1);
    //             $("#button2").text(question3.answer2);
    //             $("#button3").text(question3.answer3);
    //             $("#button4").text(question3.correctAnswer); }, 5000);
        }

    // } else if ($(this).text() !== question1.correctAnswer) {
    //      $(".btn.btn-secondary").hide();
    //      $(".giphy").attr("src", "assets/images/giphysnick.gif")
    //      };

//This is where I finished. I still need to figure out how to fix the timeout so that the next question appears. Once this is tweaked, I can finish my if statements and then  continue running through the questions. 

question2 = {
    ask:"Which Full House star popularized the phrase, 'How rude!'",
    answer1: "Michelle Tanner",
    answer2: "Danny Tanner",
    correctAnswer: "Stephanie Tanner",
    answer4: "Uncle Jesse",
    };    
    
question3 = {
    ask:"Which of the following shows was not included in the first season of TGIF?",
    answer1: "Full House",
    answer2: "Family Matter",
    answer3: "Perfect Strangers",
    correctAnswer: "Growing Pains",
    };
       
question4 = {
    ask:"'Not the Mama!' was often expressed by a baby on which show?",
    correctAnswer: "Dinosaurs",
    answer2: "Rugrats",
    answer3: "The Golden Girls",
    answer4: "Animaniacs",
    };

question5 = {
    ask:"This show featured a teenage girl with a brother nicknamed 'Ferg-Face':",
    answer1: "Hannah Montana",
    correctAnswer: "Clarissa Explains it All",
    answer3: "Lizzie McGuire",
    answer4: "What Would You Do?",
    };
    
question6 = {
    ask:"Which show took place on a ranch?",
    answer1: "The Adventures of Pete and Pete",
    answer2: "The Secret Life of Alex Mack",
    answer3: "Salute Your Shorts",
    correctAnswer: "Hey Dude",
    };


        
});
});









    


    



















// answer1: "SNICK",
// answer2: "SaturNick",
// answer3: "Super Saturday",
// answer4: "Slime Saturday",






// $("#test").replaceWith(question1.ask);

// $("#button4").click(function(){
//     $("#start-button").hide();
// $()
// $("#button1").append(question1.answer1);

// $("#button1").append(question1.answer1);