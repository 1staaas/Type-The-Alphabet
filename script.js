document.addEventListener("DOMContentLoaded", function() {
    const main= document.getElementById("main");
    const result= document.getElementById("result");

    let letter= document.getElementById("letter");
    let ElementInput= document.getElementById("elementInput");

    const resetBtn= document.getElementById("resetBtn");

    const alphabet= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const length= alphabet.length;
    let i=0;

    resetBtn.addEventListener("click", function() {
        resetStopwatch();
        main.style.display= "block";
        result.style.display= "none";
    });

    letter.addEventListener("input", updateLetter);

    function updateLetter() {
        if(letter.value === alphabet[i]) {
            startStopwatch();
            ElementInput.textContent= alphabet[i+1];
            ElementInput.style.color= "white" 

            setTimeout(function() {
                letter.value= "";
            }, 70);
            i++;
        }
        else if(letter.value != alphabet[i]) {
            ElementInput.style.color= "red";
            setTimeout(function() {
                letter.value= "";
            }, 100);
        }
        if(i === length) {
            main.style.display= "none";
            result.style.display= "block";

            pauseStopwatch();

            letter.value= "";
            i=0;
            ElementInput.textContent= alphabet[i];
            
        }
    }

    //stopwatch
    const stopwatch= document.getElementById("stopwatch");
    const time= document.getElementById("time");
    let startTime= 0;
    let elapsedTime= 0;
    let currenttime= 0;
    let paused= true;
    let intervalId;
    let secs= 0;
    let msesc= 0;

    function startStopwatch() {
        if(paused) {
            paused= false;
            startTime= Date.now() - elapsedTime;
            intervalId= setInterval(updateTime, 75); 
        }
    }

    function pauseStopwatch() {
        if(!paused) {
            paused= true;
            elapsedTime= Date.now() - startTime;
            clearInterval(intervalId);
        }
    }

    function resetStopwatch() {
        paused= true;
        console.log(`${secs}.${msesc}`);
        clearInterval(intervalId);
        startTime= 0;
        elapsedTime= 0;
        currenttime= 0;
        secs= 0;
        msesc= 0;
        stopwatch.textContent= `0.000`;
    }

    function updateTime() {
        elapsedTime= Date.now() - startTime;
        
 
        secs= Math.floor((elapsedTime / 1000) % 60);
        msesc= Math.floor(elapsedTime % 1000);
 
        stopwatch.textContent= `${secs}.${msesc}`;
        time.textContent= `${secs}.${msesc}`;

     }

    
});
