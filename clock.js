function clock()
{
    var monthNames =["January", "February", "March", "April", "May", "June","July", "August", "September", "October","November", "December"];
    var dayNames =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var todaydate = new Date();

    document.getElementById('date').innerHTML =(dayNames[todaydate.getDay()] +" "+ todaydate.getDate()+' '+ monthNames[todaydate.getMonth()]
                        +' '+ todaydate.getFullYear());

    var hr = todaydate.getHours();
    var min = todaydate.getMinutes();
    var sec = todaydate.getSeconds();
    // var day = hr<11 ? 'AM' : 'PM';

    // hr = hr<10 ? '0'+hr: hr;
    // min = min<10 ? '0'+min: min;
    // sec = sec<10 ? '0'+sec :sec;

     var session = document.getElementById('session')

    if(hr>=12)
    {
        session.innerHTML= 'PM';
    }
    else
    {
        session.innerHTML='AM';
    }
    if(hr>12)
    {
        hr = hr-12;
    }

    document.getElementById('hours').innerHTML = hr;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML =sec;
}
var inter = setInterval(clock,10);

//countdown


const datepicker = document.getElementById("datepicker");
const countdownElement = document.getElementById("countdown");

datepicker.addEventListener("change", updateCountdown);
function updateCountdown()
{
    const selectDate = new Date(datepicker.value).getTime();
    const now    = new Date().getTime();
    const timeleft = selectDate - now ;

    if(timeleft <= 0)
    {
        countdownElement.innerHTML = "Times Up!..";
    }
    else
    {
        const days  = Math.floor(timeleft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));

        countdownElement.innerHTML = ` ${days}d ${hours}h ${minutes}m `;
    }
}

// Add task
const textinput = document.getElementById('text-input');
const tasklist = document.getElementById('task-list');

function addtask()
{
    if(textinput.value === '')
    {
        alert('You Must Write Something!...');
    }
    else
    {
        let li = document.createElement("li");
        li.innerHTML = textinput.value;
        tasklist.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML ="\u00d7";
        li.appendChild(span);
    }
    textinput.value = '';
    saveData();
}
    tasklist.addEventListener("click", function (e)
    {
        if(e.target.tagName === "SPAN")
        {
            e.target.parentElement.remove();
            saveData();
        }
    },false);
// to save the enter our own task
 function saveData()
 {
    localStorage.setItem("data", tasklist.innerHTML);
 }
 function showTask()
 {
    tasklist.innerHTML = localStorage.getItem("data");
 }
 showTask();

 
    