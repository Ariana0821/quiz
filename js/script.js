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
                return 8;
            }
            else if (q1Result === "Chocolate Cake"){
                return 4;
            }
            else if (q1Result === "Sushi"){
                return 3;
            }
        }
        function findQues2(q2Result){
            if (q2Result === "Dumb and Dumber"){
                return 10;
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
                return 12;
            }
            else if (q3Result === "Orange"){
                return 9;
            }
            else if (q3Result === "Blue"){
                return 4;
            }
        }
        
         function placement(totalScore,name) {
        var techplacement;
        var imgSrc;
        if (totalScore > 21) {
            techplacement = "Shawn Mendes";
            imgSrc="https://www.flare.com/wp-content/uploads/2017/08/FEATURE_ShawnMendes.jpg";
        }
        else if (totalScore >16 && totalScore <= 21) {
            techplacement = "Harry Styles";
            imgSrc="https://data.whicdn.com/images/189360574/original.jpg";
        }
        else if (totalScore <=16) {
            techplacement = "Zac Effron";
            imgSrc="https://cps-static.rovicorp.com/3/JPG_500/MI0003/157/MI0003157788.jpg?partner=allrovi.com";
        }
    displayPlacement(name, techplacement, imgSrc);
    }
    
    function displayPlacement(name, person, imgSrc){
        $(".result").html("<div>Hi</div>");
        $(".result").html("<h1>Congrats " + name + " you end up with " + person + "<img src= " + imgSrc + ">" + "</h1>");
        $(".result").css("height", "20%");
        $(".result").css("width", "20%");
    }
});