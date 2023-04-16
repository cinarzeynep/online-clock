$(document).ready(function() {
    $('.container').hide();
});


document.getElementById('first-theme').addEventListener("click", function() {
    document.body.classList.add('green-white-theme');
    document.body.classList.remove('yellow-green-theme');
    document.body.classList.remove('black-theme');
    const menuImg = document.getElementsByClassName('menu-img');
    for(let i = 0; i < menuImg.length; i++) {
        menuImg[i].classList.remove("applied");
    };
    document.getElementById('show-symbol').style.backgroundColor = '';
    document.getElementById('menu-btn').classList.remove('active');
    const resMenuImg = document.getElementsByClassName('res-menu-img');
    for(let i = 0; i < resMenuImg.length; i++) {
        resMenuImg[i].classList.remove("applied");
    }
    document.querySelector('.hided-menu').style.marginTop = '-20px';
});

document.getElementById('second-theme').addEventListener("click", function() {
    document.body.classList.add('yellow-green-theme');
    document.body.classList.remove('green-white-theme');
    document.body.classList.remove('black-theme');
    const menuImg = document.getElementsByClassName('menu-img');
    for(let i = 0; i < menuImg.length; i++) {
        menuImg[i].classList.remove("applied");
    };
    document.getElementById('show-symbol').style.backgroundColor = '';
    document.getElementById('menu-btn').classList.remove('active');
    const resMenuImg = document.getElementsByClassName('res-menu-img');
    for(let i = 0; i < resMenuImg.length; i++) {
        resMenuImg[i].classList.remove("applied");
    }
    document.querySelector('.hided-menu').style.marginTop = '-20px';
});

document.getElementById('third-theme').addEventListener("click", function() {
    document.body.classList.add('black-theme');
    document.body.classList.remove('green-white-theme');
    document.body.classList.remove('yellow-green-theme');
    const menuImg = document.getElementsByClassName('menu-img');
    for(let i = 0; i < menuImg.length; i++) {
        menuImg[i].classList.add("applied");
    };
    document.getElementById('show-symbol').style.backgroundColor = 'lightyellow';
    document.getElementById('menu-btn').classList.add('active');
    const resMenuImg = document.getElementsByClassName('res-menu-img');
    for(let i = 0; i < resMenuImg.length; i++) {
        resMenuImg[i].classList.add("applied");
    }
    document.querySelector('.hided-menu').style.marginTop = '-16px';
});

document.getElementById('root-theme').addEventListener("click", function() {
    document.body.classList.remove('black-theme');
    document.body.classList.remove('green-white-theme');
    document.body.classList.remove('yellow-green-theme');
    const menuImg = document.getElementsByClassName('menu-img');
    for(let i = 0; i < menuImg.length; i++) {
        menuImg[i].classList.remove("applied");
    };
    document.getElementById('show-symbol').style.backgroundColor = '';
    document.getElementById('menu-btn').classList.remove('active');
    const resMenuImg = document.getElementsByClassName('res-menu-img');
    for(let i = 0; i < resMenuImg.length; i++) {
        resMenuImg[i].classList.remove("applied");
    }
    document.querySelector('.hided-menu').style.marginTop = '-20px';
});



$('#stopwatch').click(function() {
    $('.outer-wrapper').show();
    $('.main').hide();
    $('.timer').hide();
    $('.stopwatch').show();
    $('.container').hide();
    $('#clock').removeClass('active');
    $('#timer').removeClass('active');
    $('#stopwatch').addClass('active');
    $('#styles').removeClass('active');
});

$('#timer').click(function() {
    $('.outer-wrapper').show();
    $('.main').hide();
    $('.stopwatch').hide();
    $('.timer').show();
    $('.container').hide();
    $('#clock').removeClass('active');
    $('#stopwatch').removeClass('active');
    $('#timer').addClass('active');
    $('#styles').removeClass('active');
});

$('#clock').click(function() {
    $('.outer-wrapper').show();
    $('.stopwatch').hide();
    $('.timer').hide();
    $('.main').show();
    $('.container').hide();
    $('#timer').removeClass('active');
    $('#stopwatch').removeClass('active');
    $('#clock').addClass('active');
    $('#styles').removeClass('active');
});

$('#styles').click(function() {
    $('.outer-wrapper').hide();
    $('.container').show();
    $('#timer').removeClass('active');
    $('#stopwatch').removeClass('active');
    $('#clock').removeClass('active');
    $('#styles').addClass('active');
});


document.getElementById('menu-btn').addEventListener("click", function() {
    document.querySelector('.hided-menu').classList.toggle('active');
});


$('#res-stopwatch').click(function() {
    $('.outer-wrapper').show();
    $('.main').hide();
    $('.timer').hide();
    $('.stopwatch').show();
    $('.container').hide();
    $('#clck').removeClass('active');
    $('#tmr').removeClass('active');
    $('#stpwtch').addClass('active');
    $('#styls').removeClass('active');
});

$('#res-timer').click(function() {
    $('.outer-wrapper').show();
    $('.main').hide();
    $('.stopwatch').hide();
    $('.timer').show();
    $('.container').hide();
    $('#clck').removeClass('active');
    $('#stpwtch').removeClass('active');
    $('#tmr').addClass('active');
    $('#styls').removeClass('active');
});

$('#res-clock').click(function() {
    $('.outer-wrapper').show();
    $('.stopwatch').hide();
    $('.timer').hide();
    $('.main').show();
    $('.container').hide();
    $('#tmr').removeClass('active');
    $('#stpwtch').removeClass('active');
    $('#clck').addClass('active');
    $('#styls').removeClass('active');
});

$('#res-styles').click(function() {
    $('.outer-wrapper').hide();
    $('.container').show();
    $('#tmr').removeClass('active');
    $('#stpwtch').removeClass('active');
    $('#clck').removeClass('active');
    $('#styls').addClass('active');
});




function getTimeAndDate() {

    const now = new Date();

    let hour = now.getHours(); //let
    const minute = now.getMinutes();
    const second = now.getSeconds();
    const ampm = hour >= 12 ? "PM" : "AM";
    const otherAmpm = hour >= 12 ? "AM" : "PM";

    hour = (hour % 12) || 12;

    const day = now.getDate();
    const month = now.getMonth()+1;
    const year = now.getFullYear();

    (hour<10)? document.getElementById('hour').innerText = '0'+hour:
               document.getElementById('hour').innerText = hour;
    (minute<10)? document.getElementById('minute').innerText = '0'+minute:
               document.getElementById('minute').innerText = minute;
    (second<10)? document.getElementById('second').innerText = '0'+second:
               document.getElementById('second').innerText = second;
   

    document.getElementById('ampm').innerHTML = ampm;
    document.querySelector('.other-ampm').innerHTML = otherAmpm;        


    document.getElementById('date').innerText = day+'/'+month+'/'+year;
}

setInterval(function() {getTimeAndDate();}, 1000);



const showSymbol = document.querySelector('#show-symbol');
const dateContainer = document.querySelector('.date-container');


function showOrHide() {
    if (dateContainer.style.transform === 'scaleX(0)') {
        dateContainer.style.transform = 'scaleX(1)'
       showSymbol.classList.add("show");
       dateContainer.classList.add("actv");
    } else {
        dateContainer.style.transform = 'scaleX(0)'
       showSymbol.classList.remove("show");
       dateContainer.classList.remove("actv");
    }
};



$('#hide-date').click(function() {
    $('#date').hide();
    $('#hide-date').addClass('active');
    $('#show-date').removeClass('active');
});

$('#show-date').click(function() {
    $('#date').show();
    $('#show-date').addClass('active');
    $('#hide-date').removeClass('active');
});





const addZero = (num) => {
    return num < 10 ? "0" + num : num;
}

//StopWatch

let stopwatchHours = 0,
    stopwatchMinutes = 0,
    stopwatchSeconds = 0,
    stopwatchMiliSeconds = 0,
    stopwatchRunning = false,
    laps = 0,
    stopwatchInterval;


const  stopwatch = () => {
    stopwatchMiliSeconds++;
    if(stopwatchMiliSeconds === 100) {
        stopwatchSeconds++;
        stopwatchMiliSeconds = 0;
    }

    if(stopwatchSeconds === 60) {
        stopwatchMinutes++;
        stopwatchSeconds = 0;
    }

    if(stopwatchMinutes === 60) {
        stopwatchHours++;
        stopwatchMinutes = 0;
    }

    document.getElementById('stopwatch-hour').innerHTML = addZero(stopwatchHours);
    document.getElementById('stopwatch-min').innerHTML = addZero(stopwatchMinutes);
    document.getElementById('stopwatch-sec').innerHTML = addZero(stopwatchSeconds);
    document.getElementById('stopwatch-ms').innerHTML = addZero(stopwatchMiliSeconds);

};

// function to start stopwatch 
const startStopwatch = () => {
    if(!stopwatchRunning) {
        //if stopwatch not already running
        stopwatchInterval = setInterval(stopwatch, 10);
        stopwatchRunning = true;
    }
};

//function to stop stopwatch 
const stopStopwatch = () => {
    clearInterval(stopwatchInterval);
    stopwatchRunning = false;
};

//reset stopwatch function
const resetStopwatch = () => {
    //clear interval and set all values to default
    clearInterval(stopwatchInterval);
    stopwatchHours = 0;
    stopwatchMinutes = 0;
    stopwatchSeconds = 0;
    stopwatchMiliSeconds = 0;
    stopwatchRunning = false;
    laps = 0;
    

    //update values on document to 00
    document.getElementById('stopwatch-hour').innerHTML = '00';
    document.getElementById('stopwatch-min').innerHTML = '00';
    document.getElementById('stopwatch-sec').innerHTML = '00';
    document.getElementById('stopwatch-ms').innerHTML = '00';
    document.querySelector('.laps').innerHTML = '';

}

//start stopwatch on start button
document.querySelector('.start-stopwatch').addEventListener("click",function() {
    startStopwatch();
    //hide start button show stop button
    document.querySelector('.start-stopwatch').style.visibility = 'hidden';
   document.querySelector('.stop-stopwatch').style.visibility = 'visible';
});


document.querySelector('.reset-stopwatch').addEventListener("click", function() {
    resetStopwatch();
    document.querySelector('.start-stopwatch').style.visibility = 'visible';
    document.querySelector('.stop-stopwatch').style.visibility = 'visible';
});

document.querySelector('.stop-stopwatch').addEventListener("click", function() {
    if(stopwatchRunning === true) {
    stopStopwatch();
    document.querySelector('.start-stopwatch').style.visibility = 'visible';
    document.querySelector('.stop-stopwatch').style.visibility = 'hidden';
    }
});


document.querySelector('.lap-stopwatch').addEventListener("click", function() {
    if(stopwatchRunning === true) {
    //on lap button click
    laps++;
    
    $('.laps').prepend(
        `<div class="lap">
                <p>lap ${laps}</p>
                <p>
                ${addZero(stopwatchHours)} : ${addZero(stopwatchMinutes)} :
                ${addZero(stopwatchSeconds)} : ${addZero(stopwatchMiliSeconds)}
                </p>
            </div>`
    );
}
});


//Timer

let time = 0,
timerHours = 0,
timerMinutes = 0,
timerSeconds = 0,
timerMiliseconds = 0,
timerInterval;
timerRunning = false;

const getTime = () => {
    time = prompt('Enter the time in minutes. Use the dot to enter in seconds.')
    if(time.includes(',')) {
        alert('Please use only the dot for seconds!')
    } else {
       //convert time to seconds
       time = time * 60;
       //update timer defaults
       setTime();
       timerRunning = false; 
    }
};

const setTime = () => {
    timerHours = Math.floor(time / 3600);
    timerMinutes = Math.floor((time % 3600) / 60);
    timerSeconds = Math.floor(time % 60);

    //show user entered time on document
    
    document.getElementById('timer-hour').innerHTML = addZero(timerHours);
    document.getElementById('timer-min').innerHTML = addZero(timerMinutes);
    document.getElementById('timer-sec').innerHTML = addZero(timerSeconds);
    document.getElementById('timer-ms').innerHTML = addZero(timerMiliseconds);
};

const timer = () => {
    timerMiliseconds--;
    if(timerMiliseconds === -1) {
        timerMiliseconds = 99;
        timerSeconds--;
    }
    if(timerSeconds === -1) {
        timerSeconds = 59;
        timerMinutes--;
    }
    if(timerMinutes === -1) {
        timerMinutes = 59;
        timerHours--;
    }

    //update time
    document.getElementById('timer-hour').innerHTML = addZero(timerHours);
    document.getElementById('timer-min').innerHTML = addZero(timerMinutes);
    document.getElementById('timer-sec').innerHTML = addZero(timerSeconds);
    document.getElementById('timer-ms').innerHTML = addZero(timerMiliseconds);
    

    //check time up on every interval
    timeUp();
};

const startTimer = () => {
    //before starting check if valid time given
    if(timerHours === 0 & timerMinutes === 0 && timerSeconds === 0 && timerMiliseconds === 0) {
        //if all values are zero get time
        getTime();
    } else {
        //start timer
        timerInterval = setInterval(timer, 10);
        document.querySelector('.start-timer').style.visibility = 'hidden';
        document.querySelector('.stop-timer').style.visibility = 'visible';
    }
};

const stopTimer = () => {
    clearInterval(timerInterval);
    document.querySelector('.start-timer').style.visibility = 'visible';
    document.querySelector('.stop-timer').style.visibility = 'hidden';

};


const resetTimer = () => {
    clearInterval(timerInterval);
    time = 0,
    timerHours = 0,
    timerMinutes = 0,
    timerSeconds = 0,
    timerMiliseconds = 0,
    setTime();
    document.querySelector('.start-timer').style.visibility = 'visible';
    document.querySelector('.stop-timer').style.visibility = 'visible';
}


const timeUp = () => {
    if(
        timerHours === 0 && 
        timerMinutes === 0 && 
        timerSeconds === 0 && 
        timerMiliseconds === 0
        ) {
            resetTimer();
            alert("Time's up");
    }
}


document.querySelector('.start-timer').addEventListener("click", function() {
    timerRunning = true;
    startTimer();
});


document.querySelector('.stop-timer').addEventListener("click", function() {
    if(timerRunning === true) {
    stopTimer();
}
});


document.querySelector('.reset-timer').addEventListener("click", function() {
    timerRunning = false;
    resetTimer();
});


// STYLES 
// FIRST STYLE NAVBAR 
$('#fir-s-stopwatch').click(function() {
    $('#first-small-main').hide();
    $('#first-small-timer').hide();
    $('#first-small-stopwatch').show();
    $('#fir-s-clock').removeClass('active');
    $('#fir-s-timer').removeClass('active');
    $('#fir-s-stopwatch').addClass('active');
});


$('#fir-s-timer').click(function() {
    $('#first-small-main').hide();
    $('#first-small-stopwatch').hide();
    $('#first-small-timer').show();
    $('#fir-s-clock').removeClass('active');
    $('#fir-s-stopwatch').removeClass('active');
    $('#fir-s-timer').addClass('active');
});


$('#fir-s-clock').click(function() {
    $('#first-small-stopwatch').hide();
    $('#first-small-timer').hide();
    $('#first-small-main').show();
    $('#fir-s-timer').removeClass('active');
    $('#fir-s-stopwatch').removeClass('active');
    $('#fir-s-clock').addClass('active');
});



// SECOND STYLE NAVBAR 
$('#sec-s-stopwatch').click(function() {
    $('#second-small-main').hide();
    $('#second-small-timer').hide();
    $('#second-small-stopwatch').show();
    $('#sec-s-clock').removeClass('active');
    $('#sec-s-timer').removeClass('active');
    $('#sec-s-stopwatch').addClass('active');
});


$('#sec-s-timer').click(function() {
    $('#second-small-main').hide();
    $('#second-small-stopwatch').hide();
    $('#second-small-timer').show();
    $('#sec-s-clock').removeClass('active');
    $('#sec-s-stopwatch').removeClass('active');
    $('#sec-s-timer').addClass('active');
});


$('#sec-s-clock').click(function() {
    $('#second-small-stopwatch').hide();
    $('#second-small-timer').hide();
    $('#second-small-main').show();
    $('#sec-s-timer').removeClass('active');
    $('#sec-s-stopwatch').removeClass('active');
    $('#sec-s-clock').addClass('active');
});



// THIRD STYLE NAVBAR 
$('#thi-s-stopwatch').click(function() {
    $('#third-small-main').hide();
    $('#third-small-timer').hide();
    $('#third-small-stopwatch').show();
    $('#thi-s-clock').removeClass('active');
    $('#thi-s-timer').removeClass('active');
    $('#thi-s-stopwatch').addClass('active');
});


$('#thi-s-timer').click(function() {
    $('#third-small-main').hide();
    $('#third-small-stopwatch').hide();
    $('#third-small-timer').show();
    $('#thi-s-clock').removeClass('active');
    $('#thi-s-stopwatch').removeClass('active');
    $('#thi-s-timer').addClass('active');
});


$('#thi-s-clock').click(function() {
    $('#third-small-stopwatch').hide();
    $('#third-small-timer').hide();
    $('#third-small-main').show();
    $('#thi-s-timer').removeClass('active');
    $('#thi-s-stopwatch').removeClass('active');
    $('#thi-s-clock').addClass('active');
});



// FOURTH STYLE NAVBAR 
$('#fou-s-stopwatch').click(function() {
    $('#fourth-small-main').hide();
    $('#fourth-small-timer').hide();
    $('#fourth-small-stopwatch').show();
    $('#fou-s-clock').removeClass('active');
    $('#fou-s-timer').removeClass('active');
    $('#fou-s-stopwatch').addClass('active');
});


$('#fou-s-timer').click(function() {
    $('#fourth-small-main').hide();
    $('#fourth-small-stopwatch').hide();
    $('#fourth-small-timer').show();
    $('#fou-s-clock').removeClass('active');
    $('#fou-s-stopwatch').removeClass('active');
    $('#fou-s-timer').addClass('active');
});


$('#fou-s-clock').click(function() {
    $('#fourth-small-stopwatch').hide();
    $('#fourth-small-timer').hide();
    $('#fourth-small-main').show();
    $('#fou-s-timer').removeClass('active');
    $('#fou-s-stopwatch').removeClass('active');
    $('#fou-s-clock').addClass('active');
});


document.getElementById('fir-s-menu-btn').addEventListener("click", function() {
    document.querySelector('.fir-s-hided-menu').classList.toggle('active');
});

document.getElementById('sec-s-menu-btn').addEventListener("click", function() {
    document.querySelector('.sec-s-hided-menu').classList.toggle('active');
});

document.getElementById('thi-s-menu-btn').addEventListener("click", function() {
    document.querySelector('.thi-s-hided-menu').classList.toggle('active');
});

document.getElementById('fou-s-menu-btn').addEventListener("click", function() {
    document.querySelector('.fou-s-hided-menu').classList.toggle('active');
});



// RESPONSIVE STYLES 
// RESPONSIVE FIRST STYLE NAVBAR 
$('#fir-s-res-stopwatch').click(function() {
    $('#first-small-main').hide();
    $('#first-small-timer').hide();
    $('#first-small-stopwatch').show();
    $('#fir-s-clck').removeClass('active');
    $('#fir-s-tmr').removeClass('active');
    $('#fir-s-stpwtch').addClass('active');
});


$('#fir-s-res-timer').click(function() {
    $('#first-small-main').hide();
    $('#first-small-stopwatch').hide();
    $('#first-small-timer').show();
    $('#fir-s-clck').removeClass('active');
    $('#fir-s-stpwtch').removeClass('active');
    $('#fir-s-tmr').addClass('active');
});


$('#fir-s-res-clock').click(function() {
    $('#first-small-stopwatch').hide();
    $('#first-small-timer').hide();
    $('#first-small-main').show();
    $('#fir-s-tmr').removeClass('active');
    $('#fir-s-stpwtch').removeClass('active');
    $('#fir-s-clck').addClass('active');
});



// RESPONSIVE SECOND STYLE NAVBAR 
$('#sec-s-res-stopwatch').click(function() {
    $('#second-small-main').hide();
    $('#second-small-timer').hide();
    $('#second-small-stopwatch').show();
    $('#sec-s-clck').removeClass('active');
    $('#sec-s-tmr').removeClass('active');
    $('#sec-s-stpwtch').addClass('active');
});


$('#sec-s-res-timer').click(function() {
    $('#second-small-main').hide();
    $('#second-small-stopwatch').hide();
    $('#second-small-timer').show();
    $('#sec-s-clck').removeClass('active');
    $('#sec-s-stpwtch').removeClass('active');
    $('#sec-s-tmr').addClass('active');
});


$('#sec-s-res-clock').click(function() {
    $('#second-small-stopwatch').hide();
    $('#second-small-timer').hide();
    $('#second-small-main').show();
    $('#sec-s-tmr').removeClass('active');
    $('#sec-s-stpwtch').removeClass('active');
    $('#sec-s-clck').addClass('active');
});



// RESPONSIVE THIRD STYLE NAVBAR 
$('#thi-s-res-stopwatch').click(function() {
    $('#third-small-main').hide();
    $('#third-small-timer').hide();
    $('#third-small-stopwatch').show();
    $('#thi-s-clck').removeClass('active');
    $('#thi-s-tmr').removeClass('active');
    $('#thi-s-stpwtch').addClass('active');
});


$('#thi-s-res-timer').click(function() {
    $('#third-small-main').hide();
    $('#third-small-stopwatch').hide();
    $('#third-small-timer').show();
    $('#thi-s-clck').removeClass('active');
    $('#thi-s-stpwtch').removeClass('active');
    $('#thi-s-tmr').addClass('active');
});


$('#thi-s-res-clock').click(function() {
    $('#third-small-stopwatch').hide();
    $('#third-small-timer').hide();
    $('#third-small-main').show();
    $('#thi-s-tmr').removeClass('active');
    $('#thi-s-stpwtch').removeClass('active');
    $('#thi-s-clck').addClass('active');
});



// RESPONSIVE FOURTH STYLE NAVBAR 
$('#fou-s-res-stopwatch').click(function() {
    $('#fourth-small-main').hide();
    $('#fourth-small-timer').hide();
    $('#fourth-small-stopwatch').show();
    $('#fou-s-clck').removeClass('active');
    $('#fou-s-tmr').removeClass('active');
    $('#fou-s-stpwtch').addClass('active');
});


$('#fou-s-res-timer').click(function() {
    $('#fourth-small-main').hide();
    $('#fourth-small-stopwatch').hide();
    $('#fourth-small-timer').show();
    $('#fou-s-clck').removeClass('active');
    $('#fou-s-stpwtch').removeClass('active');
    $('#fou-s-tmr').addClass('active');
});


$('#fou-s-res-clock').click(function() {
    $('#fourth-small-stopwatch').hide();
    $('#fourth-small-timer').hide();
    $('#fourth-small-main').show();
    $('#fou-s-tmr').removeClass('active');
    $('#fou-s-stpwtch').removeClass('active');
    $('#fou-s-clck').addClass('active');
});





// ALL SMALL CLOCKS
function smallGetTimeAndDate() {

    const smallNow = new Date();

    let smallHour = smallNow.getHours(); //let
    const smallMinute = smallNow.getMinutes();
    const smallSecond = smallNow.getSeconds();
    const smallAmpm = smallHour >= 12 ? "PM" : "AM";
    const smallOtherAmpm = smallHour >= 12 ? "AM" : "PM";

    smallHour = (smallHour % 12) || 12;

    const smallDay = smallNow.getDate();
    const smallMonth = smallNow.getMonth()+1;
    const smallYear = smallNow.getFullYear();


    //"if" worked with "else" only (note to me)
    const sHours = document.querySelectorAll('.small-hour');
    for(let i = 0; i < sHours.length; i++) {
        if(smallHour < 10) {
            sHours[i].innerText = '0'+ smallHour;
        } else {
            sHours[i].innerText = smallHour;
        }
    };

    const sMinutes = document.querySelectorAll('.small-min');
    for(let i = 0; i < sMinutes.length; i++) {
        if(smallMinute < 10) {
            sMinutes[i].innerText = '0'+ smallMinute;
        } else {
            sMinutes[i].innerText = smallMinute;
        }
    };

    const sSeconds = document.querySelectorAll('.small-sec');
    for(let i = 0; i < sSeconds.length; i++) {
        if(smallSecond < 10) {
            sSeconds[i].innerText = '0'+ smallSecond;
        } else {
            sSeconds[i].innerText = smallSecond;
        }
    };



    const sAmpm = document.getElementsByClassName('small-ampm');
    for(let i = 0; i < sAmpm.length; i++) {
        sAmpm[i].innerHTML = smallAmpm;
    };

    const sOtherAmpm =  document.getElementsByClassName('small-other-ampm');
    for(let i = 0; i < sOtherAmpm.length; i++) {
        sOtherAmpm[i].innerHTML = smallOtherAmpm;
    };

    document.getElementById('fir-s-date').innerText = smallDay+'/'+smallMonth+'/'+smallYear;
    document.getElementById('sec-s-date').innerText = smallDay+'/'+smallMonth+'/'+smallYear;
    document.getElementById('thi-s-date').innerText = smallDay+'/'+smallMonth+'/'+smallYear;
    document.getElementById('fou-s-date').innerText = smallDay+'/'+smallMonth+'/'+smallYear;

}

setInterval(function() {smallGetTimeAndDate();}, 1000);



// SHOW OR HIDE DATE CONTAINER
const firSShowSymbol = document.getElementById('fir-s-show-symbol');
const firSDateContainer = document.getElementById('fir-s-date-container');
const secSShowSymbol = document.getElementById('sec-s-show-symbol');
const secSDateContainer = document.getElementById('sec-s-date-container');
const thiSShowSymbol = document.getElementById('thi-s-show-symbol');
const thiSDateContainer = document.getElementById('thi-s-date-container');
const fouSShowSymbol = document.getElementById('fou-s-show-symbol');
const fouSDateContainer = document.getElementById('fou-s-date-container');

firSShowSymbol.addEventListener("click", function() {
    if (firSDateContainer.style.transform === 'scaleX(0)') {
        firSDateContainer.style.transform = 'scaleX(1)'
        firSShowSymbol.classList.add("show");
        firSDateContainer.classList.add("actv");
    } else {
        firSDateContainer.style.transform = 'scaleX(0)'
        firSShowSymbol.classList.remove("show");
        firSDateContainer.classList.remove("actv");
    }
});

secSShowSymbol.addEventListener("click", function() {
    if (secSDateContainer.style.transform === 'scaleX(0)') {
        secSDateContainer.style.transform = 'scaleX(1)'
        secSShowSymbol.classList.add("show");
        secSDateContainer.classList.add("actv");
    } else {
        secSDateContainer.style.transform = 'scaleX(0)'
        secSShowSymbol.classList.remove("show");
        secSDateContainer.classList.remove("actv");
    }
});

thiSShowSymbol.addEventListener("click", function() {
    if (thiSDateContainer.style.transform === 'scaleX(0)') {
        thiSDateContainer.style.transform = 'scaleX(1)'
        thiSShowSymbol.classList.add("show");
        thiSDateContainer.classList.add("actv");
    } else {
        thiSDateContainer.style.transform = 'scaleX(0)'
        thiSShowSymbol.classList.remove("show");
        thiSDateContainer.classList.remove("actv");
    }
});

fouSShowSymbol.addEventListener("click", function() {
    if (fouSDateContainer.style.transform === 'scaleX(0)') {
        fouSDateContainer.style.transform = 'scaleX(1)'
        fouSShowSymbol.classList.add("show");
        fouSDateContainer.classList.add("actv");
    } else {
        fouSDateContainer.style.transform = 'scaleX(0)'
        fouSShowSymbol.classList.remove("show");
        fouSDateContainer.classList.remove("actv");
    }
});



// FIRST SHOW/HIDE DATE 
$('#fir-s-hide-date').click(function() {
    $('#fir-s-date').hide();
    $('#fir-s-hide-date').addClass('active');
    $('#fir-s-show-date').removeClass('active');
});

$('#fir-s-show-date').click(function() {
    $('#fir-s-date').show();
    $('#fir-s-show-date').addClass('active');
    $('#fir-s-hide-date').removeClass('active');
});


// SECOND SHOW/HIDE DATE 
$('#sec-s-hide-date').click(function() {
    $('#sec-s-date').hide();
    $('#sec-s-hide-date').addClass('active');
    $('#sec-s-show-date').removeClass('active');
});

$('#sec-s-show-date').click(function() {
    $('#sec-s-date').show();
    $('#sec-s-show-date').addClass('active');
    $('#sec-s-hide-date').removeClass('active');
});


// THIRD SHOW/HIDE DATE 
$('#thi-s-hide-date').click(function() {
    $('#thi-s-date').hide();
    $('#thi-s-hide-date').addClass('active');
    $('#thi-s-show-date').removeClass('active');
});

$('#thi-s-show-date').click(function() {
    $('#thi-s-date').show();
    $('#thi-s-show-date').addClass('active');
    $('#thi-s-hide-date').removeClass('active');
});


// FOURTH SHOW/HIDE DATE 
$('#fou-s-hide-date').click(function() {
    $('#fou-s-date').hide();
    $('#fou-s-hide-date').addClass('active');
    $('#fou-s-show-date').removeClass('active');
});

$('#fou-s-show-date').click(function() {
    $('#fou-s-date').show();
    $('#fou-s-show-date').addClass('active');
    $('#fou-s-hide-date').removeClass('active');
});



//FIRST SMALL STOPWATCH

let firstStopwatchHours = 0,
    firstStopwatchMinutes = 0,
    firstStopwatchSeconds = 0,
    firstStopwatchMiliSeconds = 0,
    firstStopwatchRunning = false,
    firstLaps = 0,
    firstStopwatchInterval;


const  firstStopwatch = () => {
    firstStopwatchMiliSeconds++;
    if(firstStopwatchMiliSeconds === 100) {
        firstStopwatchSeconds++;
        firstStopwatchMiliSeconds = 0;
    }

    if(firstStopwatchSeconds === 60) {
        firstStopwatchMinutes++;
        firstStopwatchSeconds = 0;
    }

    if(firstStopwatchMinutes === 60) {
        firstStopwatchHours++;
        firstStopwatchMinutes = 0;
    }


    document.getElementById('fir-s-stopwatch-hour').innerHTML = addZero(firstStopwatchHours);
    document.getElementById('fir-s-stopwatch-min').innerHTML = addZero(firstStopwatchMinutes);
    document.getElementById('fir-s-stopwatch-sec').innerHTML = addZero(firstStopwatchSeconds);
    document.getElementById('fir-s-stopwatch-ms').innerHTML = addZero(firstStopwatchMiliSeconds);

};

// function to start stopwatch 
const firstStartStopwatch = () => {
    if(!firstStopwatchRunning) {
        //if stopwatch not already running
        firstStopwatchInterval = setInterval(firstStopwatch, 10);
        firstStopwatchRunning = true;
    }
};

//function to stop stopwatch 
const firstStopStopwatch = () => {
    clearInterval(firstStopwatchInterval);
    firstStopwatchRunning = false;
};

//reset stopwatch function
const firstResetStopwatch = () => {
    //clear interval and set all values to default
    clearInterval(firstStopwatchInterval);
    firstStopwatchHours = 0;
    firstStopwatchMinutes = 0;
    firstStopwatchSeconds = 0;
    firstStopwatchMiliSeconds = 0;
    firstStopwatchRunning = false;
    firstLaps = 0;
    


    //update values on document to 00
    document.getElementById('fir-s-stopwatch-hour').innerHTML = '00';   
    document.getElementById('fir-s-stopwatch-min').innerHTML = '00';
    document.getElementById('fir-s-stopwatch-sec').innerHTML = '00';
    document.getElementById('fir-s-stopwatch-ms').innerHTML = '00';
    document.querySelector('.fir-s-laps').innerHTML = '';

};

//start stopwatch on start button
document.querySelector('#fir-s-start-stopwatch').addEventListener("click",function() {
    firstStartStopwatch();
    //hide start button show stop button
    document.querySelector('#fir-s-start-stopwatch').style.visibility = 'hidden';
   document.querySelector('#fir-s-stop-stopwatch').style.visibility = 'visible';
});


document.querySelector('#fir-s-reset-stopwatch').addEventListener("click", function() {
    firstResetStopwatch();
    document.querySelector('#fir-s-start-stopwatch').style.visibility = 'visible';
    document.querySelector('#fir-s-stop-stopwatch').style.visibility = 'visible';
});

document.querySelector('#fir-s-stop-stopwatch').addEventListener("click", function() {
    if(firstStopwatchRunning === true) {
    firstStopStopwatch();
    document.querySelector('#fir-s-start-stopwatch').style.visibility = 'visible';
    document.querySelector('#fir-s-stop-stopwatch').style.visibility = 'hidden';
    }
});


document.querySelector('#fir-s-lap-stopwatch').addEventListener("click", function() {
    if(firstStopwatchRunning === true) {
    //on lap button click
    firstLaps++;
    

    $('.fir-s-laps').prepend(
        `<div class="fir-s-lap">
                <p>lap ${firstLaps}</p>
                <p>
                ${addZero(firstStopwatchHours)} : ${addZero(firstStopwatchMinutes)} :
                ${addZero(firstStopwatchSeconds)} : ${addZero(firstStopwatchMiliSeconds)}
                </p>
            </div>`
    );
}
});


//FIRST SMALL TIMER

let firstTime = 0,
firstTimerHours = 0,
firstTimerMinutes = 0,
firstTimerSeconds = 0,
firstTimerMiliseconds = 0,
firstTimerInterval;
firstTimerRunning = false;

const firstGetTime = () => {
    firstTime = prompt('Enter the time in minutes. Use the dot to enter in seconds.')
    if(firstTime.includes(',')) {
        alert('Please use only the dot for seconds!')
    } else {
        //convert time to seconds
        firstTime = firstTime * 60;
        //update timer defaults
        firstSetTime();
        firstTimerRunning = false;
    }
};

const firstSetTime = () => {
    firstTimerHours = Math.floor(firstTime / 3600);
    firstTimerMinutes = Math.floor((firstTime % 3600) / 60);
    firstTimerSeconds = Math.floor(firstTime % 60);

    //show user entered time on document
    
    document.getElementById('fir-s-timer-hour').innerHTML = addZero(firstTimerHours);
    document.getElementById('fir-s-timer-min').innerHTML = addZero(firstTimerMinutes);
    document.getElementById('fir-s-timer-sec').innerHTML = addZero(firstTimerSeconds);
    document.getElementById('fir-s-timer-ms').innerHTML = addZero(firstTimerMiliseconds);
};

const firstTimer = () => {
    firstTimerMiliseconds--;
    if(firstTimerMiliseconds === -1) {
        firstTimerMiliseconds = 99;
        firstTimerSeconds--;
    }
    if(firstTimerSeconds === -1) {
        firstTimerSeconds = 59;
        firstTimerMinutes--;
    }
    if(firstTimerMinutes === -1) {
        firstTimerMinutes = 59;
        firstTimerHours--;
    }

    //update time
    document.getElementById('fir-s-timer-hour').innerHTML = addZero(firstTimerHours);
    document.getElementById('fir-s-timer-min').innerHTML = addZero(firstTimerMinutes);
    document.getElementById('fir-s-timer-sec').innerHTML = addZero(firstTimerSeconds);
    document.getElementById('fir-s-timer-ms').innerHTML = addZero(firstTimerMiliseconds);
    

    //check time up on every interval
    firstTimeUp();
};

const firstStartTimer = () => {
    //before starting check if valid time given
    if(firstTimerHours === 0 & firstTimerMinutes === 0 && firstTimerSeconds === 0 && firstTimerMiliseconds === 0) {
        //if all values are zero get time
        firstGetTime();
    } else {
        //start timer
        firstTimerInterval = setInterval(firstTimer, 10);
        document.querySelector('#fir-s-start-timer').style.visibility = 'hidden';
        document.querySelector('#fir-s-stop-timer').style.visibility = 'visible';
    }
};

const firstStopTimer = () => {
    clearInterval(firstTimerInterval);
    document.querySelector('#fir-s-start-timer').style.visibility = 'visible';
    document.querySelector('#fir-s-stop-timer').style.visibility = 'hidden';

};


const firstResetTimer = () => {
    clearInterval(firstTimerInterval);
    firstTime = 0,
    firstTimerHours = 0,
    firstTimerMinutes = 0,
    firstTimerSeconds = 0,
    firstTimerMiliseconds = 0,
    firstSetTime();
    document.querySelector('#fir-s-start-timer').style.visibility = 'visible';
    document.querySelector('#fir-s-stop-timer').style.visibility = 'visible';
}


const firstTimeUp = () => {
    if(
        firstTimerHours === 0 && 
        firstTimerMinutes === 0 && 
        firstTimerSeconds === 0 && 
        firstTimerMiliseconds === 0
        ) {
            firstResetTimer();
            alert("Time's up");
    }
}


document.querySelector('#fir-s-start-timer').addEventListener("click", function() {
    firstTimerRunning = true;
    firstStartTimer();
});


document.querySelector('#fir-s-stop-timer').addEventListener("click", function() {
    if(firstTimerRunning === true) {
    firstStopTimer();
}
});


document.querySelector('#fir-s-reset-timer').addEventListener("click", function() {
    firstTimerRunning = false;
    firstResetTimer();
});


//SECOND SMALL STOPWATCH

let scndStopwatchHours = 0,
    scndStopwatchMinutes = 0,
    scndStopwatchSeconds = 0,
    scndStopwatchMiliSeconds = 0,
    scndStopwatchRunning = false,
    scndLaps = 0,
    scndStopwatchInterval;


const  scndStopwatch = () => {
    scndStopwatchMiliSeconds++;
    if(scndStopwatchMiliSeconds === 100) {
        scndStopwatchSeconds++;
        scndStopwatchMiliSeconds = 0;
    }

    if(scndStopwatchSeconds === 60) {
        scndStopwatchMinutes++;
        scndStopwatchSeconds = 0;
    }

    if(scndStopwatchMinutes === 60) {
        scndStopwatchHours++;
        scndStopwatchMinutes = 0;
    }


    document.getElementById('sec-s-stopwatch-hour').innerHTML = addZero(scndStopwatchHours);
    document.getElementById('sec-s-stopwatch-min').innerHTML = addZero(scndStopwatchMinutes);
    document.getElementById('sec-s-stopwatch-sec').innerHTML = addZero(scndStopwatchSeconds);
    document.getElementById('sec-s-stopwatch-ms').innerHTML = addZero(scndStopwatchMiliSeconds);

};

// function to start stopwatch 
const scndStartStopwatch = () => {
    if(!scndStopwatchRunning) {
        //if stopwatch not already running
        scndStopwatchInterval = setInterval(scndStopwatch, 10);
        scndStopwatchRunning = true;
    }
};

//function to stop stopwatch 
const scndStopStopwatch = () => {
    clearInterval(scndStopwatchInterval);
    scndStopwatchRunning = false;
};

//reset stopwatch function
const scndResetStopwatch = () => {
    //clear interval and set all values to default
    clearInterval(scndStopwatchInterval);
    scndStopwatchHours = 0;
    scndStopwatchMinutes = 0;
    scndStopwatchSeconds = 0;
    scndStopwatchMiliSeconds = 0;
    scndStopwatchRunning = false;
    scndLaps = 0;
    


    //update values on document to 00
    document.getElementById('sec-s-stopwatch-hour').innerHTML = '00';   
    document.getElementById('sec-s-stopwatch-min').innerHTML = '00';
    document.getElementById('sec-s-stopwatch-sec').innerHTML = '00';
    document.getElementById('sec-s-stopwatch-ms').innerHTML = '00';
    document.querySelector('.sec-s-laps').innerHTML = '';

};

//start stopwatch on start button
document.querySelector('#sec-s-start-stopwatch').addEventListener("click",function() {
    scndStartStopwatch();
    //hide start button show stop button
    document.querySelector('#sec-s-start-stopwatch').style.visibility = 'hidden';
   document.querySelector('#sec-s-stop-stopwatch').style.visibility = 'visible';
});


document.querySelector('#sec-s-reset-stopwatch').addEventListener("click", function() {
    scndResetStopwatch();
    document.querySelector('#sec-s-start-stopwatch').style.visibility = 'visible';
    document.querySelector('#sec-s-stop-stopwatch').style.visibility = 'visible';
});

document.querySelector('#sec-s-stop-stopwatch').addEventListener("click", function() {
    if(scndStopwatchRunning === true) {
    scndStopStopwatch();
    document.querySelector('#sec-s-start-stopwatch').style.visibility = 'visible';
    document.querySelector('#sec-s-stop-stopwatch').style.visibility = 'hidden';
    }
});


document.querySelector('#sec-s-lap-stopwatch').addEventListener("click", function() {
    if(scndStopwatchRunning === true) {
    //on lap button click
    scndLaps++;
    

    $('.sec-s-laps').prepend(
        `<div class="sec-s-lap">
                <p>lap ${scndLaps}</p>
                <p>
                ${addZero(scndStopwatchHours)} : ${addZero(scndStopwatchMinutes)} :
                ${addZero(scndStopwatchSeconds)} : ${addZero(scndStopwatchMiliSeconds)}
                </p>
            </div>`
    );
}
});


//SECOND SMALL TIMER

let scndTime = 0,
scndTimerHours = 0,
scndTimerMinutes = 0,
scndTimerSeconds = 0,
scndTimerMiliseconds = 0,
scndTimerInterval;
scndTimerRunning = false;

const scndGetTime = () => {
    scndTime = prompt('Enter the time in minutes. Use the dot to enter in seconds.')
    if(scndTime.includes(',')) {
        alert('Please use only the dot for seconds!')
    } else {
        //convert time to seconds
        scndTime = scndTime * 60;
        //update timer defaults
        scndSetTime();
        scndTimerRunning = false;
    }
};

const scndSetTime = () => {
    scndTimerHours = Math.floor(scndTime / 3600);
    scndTimerMinutes = Math.floor((scndTime % 3600) / 60);
    scndTimerSeconds = Math.floor(scndTime % 60);

    //show user entered time on document
    
    document.getElementById('sec-s-timer-hour').innerHTML = addZero(scndTimerHours);
    document.getElementById('sec-s-timer-min').innerHTML = addZero(scndTimerMinutes);
    document.getElementById('sec-s-timer-sec').innerHTML = addZero(scndTimerSeconds);
    document.getElementById('sec-s-timer-ms').innerHTML = addZero(scndTimerMiliseconds);
};

const scndTimer = () => {
    scndTimerMiliseconds--;
    if(scndTimerMiliseconds === -1) {
        scndTimerMiliseconds = 99;
        scndTimerSeconds--;
    }
    if(scndTimerSeconds === -1) {
        scndTimerSeconds = 59;
        scndTimerMinutes--;
    }
    if(scndTimerMinutes === -1) {
        scndTimerMinutes = 59;
        scndTimerHours--;
    }

    //update time
    document.getElementById('sec-s-timer-hour').innerHTML = addZero(scndTimerHours);
    document.getElementById('sec-s-timer-min').innerHTML = addZero(scndTimerMinutes);
    document.getElementById('sec-s-timer-sec').innerHTML = addZero(scndTimerSeconds);
    document.getElementById('sec-s-timer-ms').innerHTML = addZero(scndTimerMiliseconds);
    

    //check time up on every interval
    scndTimeUp();
};

const scndStartTimer = () => {
    //before starting check if valid time given
    if(scndTimerHours === 0 & scndTimerMinutes === 0 && scndTimerSeconds === 0 && scndTimerMiliseconds === 0) {
        //if all values are zero get time
        scndGetTime();
    } else {
        //start timer
        scndTimerInterval = setInterval(scndTimer, 10);
        document.querySelector('#sec-s-start-timer').style.visibility = 'hidden';
        document.querySelector('#sec-s-stop-timer').style.visibility = 'visible';
    }
};

const scndStopTimer = () => {
    clearInterval(scndTimerInterval);
    document.querySelector('#sec-s-start-timer').style.visibility = 'visible';
    document.querySelector('#sec-s-stop-timer').style.visibility = 'hidden';

};


const scndResetTimer = () => {
    clearInterval(scndTimerInterval);
    scndTime = 0,
    scndTimerHours = 0,
    scndTimerMinutes = 0,
    scndTimerSeconds = 0,
    scndTimerMiliseconds = 0,
    scndSetTime();
    document.querySelector('#sec-s-start-timer').style.visibility = 'visible';
    document.querySelector('#sec-s-stop-timer').style.visibility = 'visible';
}


const scndTimeUp = () => {
    if(
        scndTimerHours === 0 && 
        scndTimerMinutes === 0 && 
        scndTimerSeconds === 0 && 
        scndTimerMiliseconds === 0
        ) {
            scndResetTimer();
            alert("Time's up");
    }
}


document.querySelector('#sec-s-start-timer').addEventListener("click", function() {
    scndTimerRunning = true;
    scndStartTimer();
});


document.querySelector('#sec-s-stop-timer').addEventListener("click", function() {
    if(scndTimerRunning === true) {
    scndStopTimer();
}
});


document.querySelector('#sec-s-reset-timer').addEventListener("click", function() {
    scndTimerRunning = false;
    scndResetTimer();
});


//THIRD SMALL STOPWATCH

let thirdStopwatchHours = 0,
    thirdStopwatchMinutes = 0,
    thirdStopwatchSeconds = 0,
    thirdStopwatchMiliSeconds = 0,
    thirdStopwatchRunning = false,
    thirdLaps = 0,
    thirdStopwatchInterval;


const  thirdStopwatch = () => {
    thirdStopwatchMiliSeconds++;
    if(thirdStopwatchMiliSeconds === 100) {
        thirdStopwatchSeconds++;
        thirdStopwatchMiliSeconds = 0;
    }

    if(thirdStopwatchSeconds === 60) {
        thirdStopwatchMinutes++;
        thirdStopwatchSeconds = 0;
    }

    if(thirdStopwatchMinutes === 60) {
        thirdStopwatchHours++;
        thirdStopwatchMinutes = 0;
    }


    document.getElementById('thi-s-stopwatch-hour').innerHTML = addZero(thirdStopwatchHours);
    document.getElementById('thi-s-stopwatch-min').innerHTML = addZero(thirdStopwatchMinutes);
    document.getElementById('thi-s-stopwatch-sec').innerHTML = addZero(thirdStopwatchSeconds);
    document.getElementById('thi-s-stopwatch-ms').innerHTML = addZero(thirdStopwatchMiliSeconds);

};

// function to start stopwatch 
const thirdStartStopwatch = () => {
    if(!thirdStopwatchRunning) {
        //if stopwatch not already running
        thirdStopwatchInterval = setInterval(thirdStopwatch, 10);
        thirdStopwatchRunning = true;
    }
};

//function to stop stopwatch 
const thirdStopStopwatch = () => {
    clearInterval(thirdStopwatchInterval);
    thirdStopwatchRunning = false;
};

//reset stopwatch function
const thirdResetStopwatch = () => {
    //clear interval and set all values to default
    clearInterval(thirdStopwatchInterval);
    thirdStopwatchHours = 0;
    thirdStopwatchMinutes = 0;
    thirdStopwatchSeconds = 0;
    thirdStopwatchMiliSeconds = 0;
    thirdStopwatchRunning = false;
    thirdLaps = 0;
    


    //update values on document to 00
    document.getElementById('thi-s-stopwatch-hour').innerHTML = '00';   
    document.getElementById('thi-s-stopwatch-min').innerHTML = '00';
    document.getElementById('thi-s-stopwatch-sec').innerHTML = '00';
    document.getElementById('thi-s-stopwatch-ms').innerHTML = '00';
    document.querySelector('.thi-s-laps').innerHTML = '';

};

//start stopwatch on start button
document.querySelector('#thi-s-start-stopwatch').addEventListener("click",function() {
    thirdStartStopwatch();
    //hide start button show stop button
    document.querySelector('#thi-s-start-stopwatch').style.visibility = 'hidden';
   document.querySelector('#thi-s-stop-stopwatch').style.visibility = 'visible';
});


document.querySelector('#thi-s-reset-stopwatch').addEventListener("click", function() {
    thirdResetStopwatch();
    document.querySelector('#thi-s-start-stopwatch').style.visibility = 'visible';
    document.querySelector('#thi-s-stop-stopwatch').style.visibility = 'visible';
});

document.querySelector('#thi-s-stop-stopwatch').addEventListener("click", function() {
    if(thirdStopwatchRunning === true) {
    thirdStopStopwatch();
    document.querySelector('#thi-s-start-stopwatch').style.visibility = 'visible';
    document.querySelector('#thi-s-stop-stopwatch').style.visibility = 'hidden';
    }
});


document.querySelector('#thi-s-lap-stopwatch').addEventListener("click", function() {
    if(thirdStopwatchRunning === true) {
    //on lap button click
    thirdLaps++;
    

    $('.thi-s-laps').prepend(
        `<div class="thi-s-lap">
                <p>lap ${thirdLaps}</p>
                <p>
                ${addZero(thirdStopwatchHours)} : ${addZero(thirdStopwatchMinutes)} :
                ${addZero(thirdStopwatchSeconds)} : ${addZero(thirdStopwatchMiliSeconds)}
                </p>
            </div>`
    );
}
});


//THIRD SMALL TIMER

let thirdTime = 0,
thirdTimerHours = 0,
thirdTimerMinutes = 0,
thirdTimerSeconds = 0,
thirdTimerMiliseconds = 0,
thirdTimerInterval;
thirdTimerRunning = false;

const thirdGetTime = () => {
    thirdTime = prompt('Enter the time in minutes. Use the dot to enter in seconds.')
    if(thirdTime.includes(',')) {
        alert('Please use only the dot for seconds!')
    } else {
        //convert time to seconds
        thirdTime = thirdTime * 60;
        //update timer defaults
        thirdSetTime();
        thirdTimerRunning = false;
    }
};

const thirdSetTime = () => {
    thirdTimerHours = Math.floor(thirdTime / 3600);
    thirdTimerMinutes = Math.floor((thirdTime % 3600) / 60);
    thirdTimerSeconds = Math.floor(thirdTime % 60);

    //show user entered time on document
    
    document.getElementById('thi-s-timer-hour').innerHTML = addZero(thirdTimerHours);
    document.getElementById('thi-s-timer-min').innerHTML = addZero(thirdTimerMinutes);
    document.getElementById('thi-s-timer-sec').innerHTML = addZero(thirdTimerSeconds);
    document.getElementById('thi-s-timer-ms').innerHTML = addZero(thirdTimerMiliseconds);
};

const thirdTimer = () => {
    thirdTimerMiliseconds--;
    if(thirdTimerMiliseconds === -1) {
        thirdTimerMiliseconds = 99;
        thirdTimerSeconds--;
    }
    if(thirdTimerSeconds === -1) {
        thirdTimerSeconds = 59;
        thirdTimerMinutes--;
    }
    if(thirdTimerMinutes === -1) {
        thirdTimerMinutes = 59;
        thirdTimerHours--;
    }

    //update time
    document.getElementById('thi-s-timer-hour').innerHTML = addZero(thirdTimerHours);
    document.getElementById('thi-s-timer-min').innerHTML = addZero(thirdTimerMinutes);
    document.getElementById('thi-s-timer-sec').innerHTML = addZero(thirdTimerSeconds);
    document.getElementById('thi-s-timer-ms').innerHTML = addZero(thirdTimerMiliseconds);
    

    //check time up on every interval
    thirdTimeUp();
};

const thirdStartTimer = () => {
    //before starting check if valid time given
    if(thirdTimerHours === 0 & thirdTimerMinutes === 0 && thirdTimerSeconds === 0 && thirdTimerMiliseconds === 0) {
        //if all values are zero get time
        thirdGetTime();
    } else {
        //start timer
        thirdTimerInterval = setInterval(thirdTimer, 10);
        document.querySelector('#thi-s-start-timer').style.visibility = 'hidden';
        document.querySelector('#thi-s-stop-timer').style.visibility = 'visible';
    }
};

const thirdStopTimer = () => {
    clearInterval(thirdTimerInterval);
    document.querySelector('#thi-s-start-timer').style.visibility = 'visible';
    document.querySelector('#thi-s-stop-timer').style.visibility = 'hidden';

};


const thirdResetTimer = () => {
    clearInterval(thirdTimerInterval);
    thirdTime = 0,
    thirdTimerHours = 0,
    thirdTimerMinutes = 0,
    thirdTimerSeconds = 0,
    thirdTimerMiliseconds = 0,
    thirdSetTime();
    document.querySelector('#thi-s-start-timer').style.visibility = 'visible';
    document.querySelector('#thi-s-stop-timer').style.visibility = 'visible';
}


const thirdTimeUp = () => {
    if(
        thirdTimerHours === 0 && 
        thirdTimerMinutes === 0 && 
        thirdTimerSeconds === 0 && 
        thirdTimerMiliseconds === 0
        ) {
            thirdResetTimer();
            alert("Time's up");
    }
}


document.querySelector('#thi-s-start-timer').addEventListener("click", function() {
    thirdTimerRunning = true;
    thirdStartTimer();
});


document.querySelector('#thi-s-stop-timer').addEventListener("click", function() {
    if(thirdTimerRunning === true) {
    thirdStopTimer();
}
});


document.querySelector('#thi-s-reset-timer').addEventListener("click", function() {
    thirdTimerRunning = false;
    thirdResetTimer();
});


//FOURTH SMALL STOPWATCH

let fourthStopwatchHours = 0,
    fourthStopwatchMinutes = 0,
    fourthStopwatchSeconds = 0,
    fourthStopwatchMiliSeconds = 0,
    fourthStopwatchRunning = false,
    fourthLaps = 0,
    fourthStopwatchInterval;


const  fourthStopwatch = () => {
    fourthStopwatchMiliSeconds++;
    if(fourthStopwatchMiliSeconds === 100) {
        fourthStopwatchSeconds++;
        fourthStopwatchMiliSeconds = 0;
    }

    if(fourthStopwatchSeconds === 60) {
        fourthStopwatchMinutes++;
        fourthStopwatchSeconds = 0;
    }

    if(fourthStopwatchMinutes === 60) {
        fourthStopwatchHours++;
        fourthStopwatchMinutes = 0;
    }


    document.getElementById('fou-s-stopwatch-hour').innerHTML = addZero(fourthStopwatchHours);
    document.getElementById('fou-s-stopwatch-min').innerHTML = addZero(fourthStopwatchMinutes);
    document.getElementById('fou-s-stopwatch-sec').innerHTML = addZero(fourthStopwatchSeconds);
    document.getElementById('fou-s-stopwatch-ms').innerHTML = addZero(fourthStopwatchMiliSeconds);

};

// function to start stopwatch 
const fourthStartStopwatch = () => {
    if(!fourthStopwatchRunning) {
        //if stopwatch not already running
        fourthStopwatchInterval = setInterval(fourthStopwatch, 10);
        fourthStopwatchRunning = true;
    }
};

//function to stop stopwatch 
const fourthStopStopwatch = () => {
    clearInterval(fourthStopwatchInterval);
    fourthStopwatchRunning = false;
};

//reset stopwatch function
const fourthResetStopwatch = () => {
    //clear interval and set all values to default
    clearInterval(fourthStopwatchInterval);
    fourthStopwatchHours = 0;
    fourthStopwatchMinutes = 0;
    fourthStopwatchSeconds = 0;
    fourthStopwatchMiliSeconds = 0;
    fourthStopwatchRunning = false;
    fourthLaps = 0;
    


    //update values on document to 00
    document.getElementById('fou-s-stopwatch-hour').innerHTML = '00';   
    document.getElementById('fou-s-stopwatch-min').innerHTML = '00';
    document.getElementById('fou-s-stopwatch-sec').innerHTML = '00';
    document.getElementById('fou-s-stopwatch-ms').innerHTML = '00';
    document.querySelector('.fou-s-laps').innerHTML = '';

};

//start stopwatch on start button
document.querySelector('#fou-s-start-stopwatch').addEventListener("click",function() {
    fourthStartStopwatch();
    //hide start button show stop button
    document.querySelector('#fou-s-start-stopwatch').style.visibility = 'hidden';
   document.querySelector('#fou-s-stop-stopwatch').style.visibility = 'visible';
});


document.querySelector('#fou-s-reset-stopwatch').addEventListener("click", function() {
    fourthResetStopwatch();
    document.querySelector('#fou-s-start-stopwatch').style.visibility = 'visible';
    document.querySelector('#fou-s-stop-stopwatch').style.visibility = 'visible';
});

document.querySelector('#fou-s-stop-stopwatch').addEventListener("click", function() {
    if(fourthStopwatchRunning === true) {
    fourthStopStopwatch();
    document.querySelector('#fou-s-start-stopwatch').style.visibility = 'visible';
    document.querySelector('#fou-s-stop-stopwatch').style.visibility = 'hidden';
    }
});


document.querySelector('#fou-s-lap-stopwatch').addEventListener("click", function() {
    if(fourthStopwatchRunning === true) {
    //on lap button click
    fourthLaps++;
    

    $('.fou-s-laps').prepend(
        `<div class="fou-s-lap">
                <p>lap ${fourthLaps}</p>
                <p>
                ${addZero(fourthStopwatchHours)} : ${addZero(fourthStopwatchMinutes)} :
                ${addZero(fourthStopwatchSeconds)} : ${addZero(fourthStopwatchMiliSeconds)}
                </p>
            </div>`
    );
}
});


//FOURTH SMALL TIMER

let fourthTime = 0,
fourthTimerHours = 0,
fourthTimerMinutes = 0,
fourthTimerSeconds = 0,
fourthTimerMiliseconds = 0,
fourthTimerInterval;
fourthTimerRunning = false;

const fourthGetTime = () => {
    fourthTime = prompt('Enter the time in minutes. Use the dot to enter in seconds.')
    if(fourthTime.includes(',')) {
        alert('Please use only the dot for seconds!')
    } else {
        //convert time to seconds
        fourthTime = fourthTime * 60;
        //update timer defaults
        fourthSetTime();
        fourthTimerRunning = false;
    }
};

const fourthSetTime = () => {
    fourthTimerHours = Math.floor(fourthTime / 3600);
    fourthTimerMinutes = Math.floor((fourthTime % 3600) / 60);
    fourthTimerSeconds = Math.floor(fourthTime % 60);

    //show user entered time on document
    
    document.getElementById('fou-s-timer-hour').innerHTML = addZero(fourthTimerHours);
    document.getElementById('fou-s-timer-min').innerHTML = addZero(fourthTimerMinutes);
    document.getElementById('fou-s-timer-sec').innerHTML = addZero(fourthTimerSeconds);
    document.getElementById('fou-s-timer-ms').innerHTML = addZero(fourthTimerMiliseconds);
};

const fourthTimer = () => {
    fourthTimerMiliseconds--;
    if(fourthTimerMiliseconds === -1) {
        fourthTimerMiliseconds = 99;
        fourthTimerSeconds--;
    }
    if(fourthTimerSeconds === -1) {
        fourthTimerSeconds = 59;
        fourthTimerMinutes--;
    }
    if(fourthTimerMinutes === -1) {
        fourthTimerMinutes = 59;
        fourthTimerHours--;
    }

    //update time
    document.getElementById('fou-s-timer-hour').innerHTML = addZero(fourthTimerHours);
    document.getElementById('fou-s-timer-min').innerHTML = addZero(fourthTimerMinutes);
    document.getElementById('fou-s-timer-sec').innerHTML = addZero(fourthTimerSeconds);
    document.getElementById('fou-s-timer-ms').innerHTML = addZero(fourthTimerMiliseconds);
    

    //check time up on every interval
    fourthTimeUp();
};

const fourthStartTimer = () => {
    //before starting check if valid time given
    if(fourthTimerHours === 0 & fourthTimerMinutes === 0 && fourthTimerSeconds === 0 && fourthTimerMiliseconds === 0) {
        //if all values are zero get time
        fourthGetTime();
    } else {
        //start timer
        fourthTimerInterval = setInterval(fourthTimer, 10);
        document.querySelector('#fou-s-start-timer').style.visibility = 'hidden';
        document.querySelector('#fou-s-stop-timer').style.visibility = 'visible';
    }
};

const fourthStopTimer = () => {
    clearInterval(fourthTimerInterval);
    document.querySelector('#fou-s-start-timer').style.visibility = 'visible';
    document.querySelector('#fou-s-stop-timer').style.visibility = 'hidden';

};


const fourthResetTimer = () => {
    clearInterval(fourthTimerInterval);
    fourthTime = 0,
    fourthTimerHours = 0,
    fourthTimerMinutes = 0,
    fourthTimerSeconds = 0,
    fourthTimerMiliseconds = 0,
    fourthSetTime();
    document.querySelector('#fou-s-start-timer').style.visibility = 'visible';
    document.querySelector('#fou-s-stop-timer').style.visibility = 'visible';
}


const fourthTimeUp = () => {
    if(
        fourthTimerHours === 0 && 
        fourthTimerMinutes === 0 && 
        fourthTimerSeconds === 0 && 
        fourthTimerMiliseconds === 0
        ) {
            fourthResetTimer();
            alert("Time's up");
    }
}


document.querySelector('#fou-s-start-timer').addEventListener("click", function() {
    fourthTimerRunning = true;
    fourthStartTimer();
});


document.querySelector('#fou-s-stop-timer').addEventListener("click", function() {
    if(fourthTimerRunning === true) {
    fourthStopTimer();
}
});


document.querySelector('#fou-s-reset-timer').addEventListener("click", function() {
    fourthTimerRunning = false;
    fourthResetTimer();
});
