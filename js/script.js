/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore;
        totalScore = findQues1(q1Result);
        totalScore = totalScore + findQues2(q2Result);
        totalScore = totalScore + findQues3(q3Result);
        console.log(totalScore);
        placement(totalScore, name);
    });
        function findQues1(q1Result){
            if (q1Result === "Tacos"){
                return 2;
            }
            else if (q1Result === "Chocolate Cake"){
                return 3
            }
            else if (q1Result === "Sushi"){
                return 4
            }
        }
        function findQues2(q2Result){
            if (q2Result === "Dumb and Dumber"){
                return 5;
            }
            else if (q2Result === "The Notebook"){
                return 6;
            }
            else if (q2Result === "Harry Potter"){
                return 7;
        }
    }
        function findQues3(q3Result){
            if (q3Result === "Green"){
                return 8;
            }
            else if (q3Result === "Orange"){
                return 9;
            }
            else if (q3Result === "Blue"){
                return 9;
            }
        }
        
         function placement(totalScore,name) {
        var techplacement;
        var imgSrc;
        if (totalScore > 21) {
            techplacement = "Shawn Mendes";
            imgSrc="https://media.giphy.com/media/oeH2Qj4fLoZy0/giphy.gif";
        }
        else if (totalScore >16 && totalScore <= 21) {
            techplacement = "Harry Styles";
            imgSrc="https://media.giphy.com/media/l41lX2yEwhnD6QrLi/giphy.gif";
        }
        else if (totalScore > 11 && totalScore <= 16) {
            techplacement = "Zac Effron";
            imgSrc="https://media.giphy.com/media/zWyv9xtsEfXQQ/giphy.gif";
        }
    displayPlacement(name, techplacement, imgSrc);
    }
    
    function displayPlacement(name, person, image){
        $(".result").html("<div>Hi</div>");
    }
});