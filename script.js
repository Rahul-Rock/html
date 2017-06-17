/******************************************
*                                         *
*    Author        : Roy                  *
*    Title         : Quiz Factory 2.0     *
*    Extra Credits : Tim G                *
*                                         *
*******************************************
*                                         *
*   Feel free to suggest your own quiz,   *
*         i will add your name            *
*            in this code!                * 
*                                         *
*******************************************
*                                         *
*       Thank you for run my code.        *
*                                         *
*                                         *
*                                         *
******************************************/

window.onload = function () 
{
    var button = document.getElementsByTagName("button")[0];
    var p = document.getElementsByTagName("p")[0];
    var code = document.getElementsByTagName("p")[1];
    var input = document.getElementsByTagName("input")[0];
    var span = document.getElementsByTagName("span")[0];
    var submit = document.getElementsByTagName("button")[1];
    var container = document.querySelectorAll(".container")[0];
    var animationCorrect = document.getElementById("correct");
    var animationWrong = document.getElementById("wrong");
    var f = document.getElementsByTagName("footer")[0];

    var correct = 0;
    var wrong = 0;
    var answer = 0;

    /* 
    I could use a single function for make the condition( ), 
    but for some reasone there is a conflict beetwen properties
    Feel free to suggest a best solution!

    For the rest of code i tried to keep it as clean as possible.
    */
    function condition () {

var k = input.value.toLowerCase();
        if (k != answer) {
            document.getElementsByTagName("div")[0].style.display = "none";
            animationWrong.style.display = "block";
            var time_one = setTimeout(function () {
                animationWrong.style.transition = "0.5s all";
                animationWrong.style.webkitTransition = "0.5s all";
                animationWrong.style.margin = "200px 0 0 0";
                setTimeout(function(){
                    animationCorrect.style.display = "none";
                    animationCorrect.style.margin = "200px 0 0 -2000px";
                    animationWrong.style.margin = "200px 0 0 -2000px";
                    animationWrong.style.display = "none";
                    document.getElementsByTagName("div")[0].style.display = "block";
                }, 1000)
            }, 300)
        }
        else {
            document.getElementsByTagName("div")[0].style.display = "none";
            animationCorrect.style.display = "block";
            var time_one = setTimeout(function () {
                animationWrong.style.display = "none";
                animationWrong.style.margin = "200px 0 0 -2000px";
                animationCorrect.style.transition = "0.5s all";
                animationCorrect.style.webkitTransition = "0.5s all";
                animationCorrect.style.margin = "200px 0 0 0";
                setTimeout(function(){
                    animationCorrect.style.margin = "200px 0 0 -2000px";
                    animationCorrect.style.display = "none";
                    document.getElementsByTagName("div")[0].style.display = "block";
                }, 1000)
            }, 300)
        }

    }

    function quiz_maker (res, num, quiz, func, credits) {

        condition();

        answer = res;
        p.innerHTML = num + "<br>What is the output of this code?";
        code.innerHTML = "" + quiz + "";
        input.value = "";
        submit.addEventListener("click", func)
        span.innerHTML = credits;

    }

    button.addEventListener("click", function() {

        this.style.display = "none";

        submit.style.margin = "30px auto 0 auto";
        submit.style.display = "block";
        input.style.display = "block";
        span.style.display = "block";
        container.style.display = "block";
        f.style.display = "block";
        p.innerHTML = "1.<br>What is the output of this code?";
        code.innerHTML = "var x = 5;<br>var y = 3;<br>console.log(x+++y);";
        
        answer = 8;
        submit.addEventListener("click", second_quiz)

    })

    function end_screen(){
        document.getElementById("code").style.display = "none";
        p.style.display = "none";
        submit.style.display = "none";
        input.style.display = "none";
        f.style.display = "none";
        span.style.display = "none";
        this.style.display = "none";
        document.getElementsByTagName("div")[1].style.display = "none";
        document.querySelectorAll(".container-end")[0].style.display = "block";
    };

    var second_quiz = function () { quiz_maker("true", "2.", "var foo = function foo() {<br> console.log(foo === foo); };<br>foo();", third_quiz, "??"); }
    var third_quiz = function () { quiz_maker("undefined", "3.", "function aaa() {<br>return<br>{<br>test: 1<br>};<br>}<br>alert(typeof aaa());", fourth_quiz, "??"); }
    var fourth_quiz = function () { quiz_maker("true", "4.", "Number(\"1\") - 1 == 0;", fifth_quiz, "??"); }
    var fifth_quiz = function () { quiz_maker("false", "5.", "(true + false) > 2 + true;", sixth_quiz, "??"); }
    var sixth_quiz = function () { quiz_maker("2", "6.", "\"1\" - - \"1\";", seventh_quiz, "??"); }
    var seventh_quiz = function () { quiz_maker("true", "7.", "String('Hello') === 'Hello';", eighth_quiz, "??"); }
    var eighth_quiz = function () { quiz_maker("2", "8.", "var arr = [];<br>arr[0]  = 'a';<br>arr[1]  = 'b';<br>arr.foo = 'c';<br>alert(arr.length);", ninth_quiz, "??"); }
    var ninth_quiz = function () { quiz_maker("false", "9.", "10 > 9 > 8 === true;", ten_quiz, "??"); }

    function ten_quiz () {
        answer = "false";
        p.innerHTML = "10.<br>What is the output of this code?";
        code.innerHTML = "NaN === NaN;";
        input.value = "";
        span.innerHTML = "??";
        submit.addEventListener("click", end_screen);
    }

}
