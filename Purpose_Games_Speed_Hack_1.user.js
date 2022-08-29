// ==UserScript==
// @name         Purpose Games Speed Hack
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Extreme Speed!!!
// @author       Vexergraph
// @match        https://www.purposegames.com/game/*
// @icon         https://icon-library.com/images/purpose-icon/purpose-icon-25.jpg
// @grant        none
// ==/UserScript==

(function() {
 'use strict';

    document.getElementById("startGame").addEventListener("click", function () {
        setTimeout(function(){
            console.log("it works at this point")
        }, 1000);
       const guesses = parseInt(document.querySelector("#guesses-left").innerHTML)

       console.log(guesses)

       for (let i = 0; i < guesses; i++) {

           setTimeout(function(){

               var correct_word = document.getElementById("question-box").innerHTML

               if (correct_word){
                   console.log(correct_word)
               }

               if (correct_word == document.getElementById("1").dataset.text){
                   document.getElementById("1").click();
               }

               if (correct_word == document.getElementById("2").dataset.text){
                   document.getElementById("2").click();
               }

               if (correct_word == document.getElementById("3").dataset.text){
                   document.getElementById("3").click();
               }

               if (correct_word == document.getElementById("4").dataset.text){
                   document.getElementById("4").click();
               }

               if (correct_word == document.getElementById("5").dataset.text){
                   document.getElementById("5").click();
               }

               if (correct_word == document.getElementById("6").dataset.text){
                   document.getElementById("6").click();
               }

               if (correct_word == document.getElementById("7").dataset.text){
                   document.getElementById("7").click();
               }

               if (correct_word == document.getElementById("8").dataset.text){
                   document.getElementById("8").click();
               }

               if (correct_word == document.getElementById("9").dataset.text){
                   document.getElementById("9").click();
               }

               if (correct_word == document.getElementById("10").dataset.text){
                   document.getElementById("10").click()
               }

               if (correct_word == document.getElementById("11").dataset.text){
                   document.getElementById("11").click()
               }

               if (correct_word == document.getElementById("12").dataset.text){
                   document.getElementById("12").click()
               }

               if (correct_word == document.getElementById("13").dataset.text){
                   document.getElementById("13").click()
               }

               if (correct_word == document.getElementById("14").dataset.text){
                   document.getElementById("14").click()
               }

               if (correct_word == document.getElementById("15").dataset.text){
                   document.getElementById("15").click()
               }

               if (correct_word == document.getElementById("16").dataset.text){
                   document.getElementById("16").click()
               }

               if (correct_word == document.getElementById("17").dataset.text){
                   document.getElementById("17").click()
               }

               if (correct_word == document.getElementById("18").dataset.text){
                   document.getElementById("18").click()
               }

               if (correct_word == document.getElementById("19").dataset.text){
                   document.getElementById("19").click()
               }

               if (correct_word == document.getElementById("20").dataset.text){
                   document.getElementById("20").click()
               }

               if (correct_word == document.getElementById("21").dataset.text){
                   document.getElementById("21").click();
               }

               if (correct_word == document.getElementById("22").dataset.text){
                   document.getElementById("22").click();
               }

               if (correct_word == document.getElementById("23").dataset.text){
                   document.getElementById("23").click();
               }

               if (correct_word == document.getElementById("24").dataset.text){
                   document.getElementById("24").click();
               }

               if (correct_word == document.getElementById("25").dataset.text){
                   document.getElementById("25").click();
               }

               if (correct_word == document.getElementById("26").dataset.text){
                   document.getElementById("26").click();
               }

               if (correct_word == document.getElementById("27").dataset.text){
                   document.getElementById("27").click();
               }

               if (correct_word == document.getElementById("28").dataset.text){
                   document.getElementById("28").click();
               }

               if (correct_word == document.getElementById("29").dataset.text){
                   document.getElementById("29").click();
               }

               if (correct_word == document.getElementById("30").dataset.text){
                   document.getElementById("30").click()
               }

               if (correct_word == document.getElementById("31").dataset.text){
                   document.getElementById("31").click()
               }

               if (correct_word == document.getElementById("32").dataset.text){
                   document.getElementById("32").click()
               }

               if (correct_word == document.getElementById("33").dataset.text){
                   document.getElementById("33").click()
               }

               if (correct_word == document.getElementById("34").dataset.text){
                   document.getElementById("34").click()
               }

               if (correct_word == document.getElementById("35").dataset.text){
                   document.getElementById("35").click()
               }

               if (correct_word == document.getElementById("36").dataset.text){
                   document.getElementById("36").click()
               }

               if (correct_word == document.getElementById("37").dataset.text){
                   document.getElementById("37").click()
               }

               if (correct_word == document.getElementById("38").dataset.text){
                   document.getElementById("38").click()
               }

               if (correct_word == document.getElementById("39").dataset.text){
                   document.getElementById("39").click()
               }

               if (correct_word == document.getElementById("40").dataset.text){
                   document.getElementById("40").click()
               }
               if (correct_word == document.getElementById("41").dataset.text){
                   document.getElementById("41").click();
               }

               if (correct_word == document.getElementById("42").dataset.text){
                   document.getElementById("42").click();
               }

               if (correct_word == document.getElementById("43").dataset.text){
                   document.getElementById("43").click();
               }

               if (correct_word == document.getElementById("44").dataset.text){
                   document.getElementById("44").click();
               }

               if (correct_word == document.getElementById("45").dataset.text){
                   document.getElementById("45").click();
               }

               if (correct_word == document.getElementById("46").dataset.text){
                   document.getElementById("46").click();
               }

               if (correct_word == document.getElementById("47").dataset.text){
                   document.getElementById("47").click();
               }

               if (correct_word == document.getElementById("48").dataset.text){
                   document.getElementById("48").click();
               }

               if (correct_word == document.getElementById("49").dataset.text){
                   document.getElementById("49").click();
               }

               if (correct_word == document.getElementById("50").dataset.text){
                   document.getElementById("50").click()
               }

               if (correct_word == document.getElementById("51").dataset.text){
                   document.getElementById("51").click()
               }

               if (correct_word == document.getElementById("52").dataset.text){
                   document.getElementById("52").click()
               }

               if (correct_word == document.getElementById("53").dataset.text){
                   document.getElementById("53").click()
               }

               if (correct_word == document.getElementById("54").dataset.text){
                   document.getElementById("54").click()
               }

               if (correct_word == document.getElementById("55").dataset.text){
                   document.getElementById("55").click()
               }

               if (correct_word == document.getElementById("56").dataset.text){
                   document.getElementById("56").click()
               }

               if (correct_word == document.getElementById("57").dataset.text){
                   document.getElementById("57").click()
               }

               if (correct_word == document.getElementById("58").dataset.text){
                   document.getElementById("58").click()
               }

               if (correct_word == document.getElementById("59").dataset.text){
                   document.getElementById("59").click()
               }

               if (correct_word == document.getElementById("60").dataset.text){
                   document.getElementById("60").click()
               }

               console.log("Just clicked ",correct_word)



           }, 3000);

       }

    },false)
})();