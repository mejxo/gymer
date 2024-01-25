const userName = document.getElementById('.userName');

window.onload = () => {
    if(!sessionStorage.name){
        location.href = '/login.html';
    } else{
        userName.innerHTML = `${sessionStorage.name}`;
    }
}

const logOut = document.getElementById('.userProfile');

logOut.onclick = () => {
    sessionStorage.clear();
    location.reload();
}



function toggleDoneWorkout() { 

    toggleImage();


    var doneWorkout = document.querySelector('.doneWorkout');


    if (doneWorkout.textContent === 'Undone') {
        doneWorkout.textContent = 'Done';
    } else {
        doneWorkout.textContent = 'Undone';
    }
}


function toggleImage() {
    var image = document.getElementById('doneWorkoutLogo');

    if (image.src.endsWith('undone_logo.svg')) {

        image.src = '/images/done_logo.svg';
    } else {

        image.src = '/images/undone_logo.svg';
    }
}


function getCurrentDate() {
    const months = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ];

    const currentDate = new Date();
    const currentMonthIndex = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const currentMonth = months[currentMonthIndex];
    return `${currentMonth} ${currentYear}`;
}

function setContentToCurrentDate() {
    const dateElement = document.getElementById('monthElement');
    const currentDate = getCurrentDate();
    dateElement.textContent = currentDate;
}

window.onload = setContentToCurrentDate;

function showModal() {
    var modal = document.getElementById('modal');
    var overlay = document.getElementById('overlay');

    modal.style.display = 'block';
    overlay.style.display = 'block';

    setTimeout(function () {
        modal.style.opacity = '1';
        overlay.style.opacity = '1';
    }, 10);
}

function showModal2() {
    var modal2 = document.getElementById('modal2');
    var overlay2 = document.getElementById('overlay2');

    modal2.style.display = 'block';
    overlay2.style.display = 'block';

    setTimeout(function () {
        modal2.style.opacity = '1';
        overlay2.style.opacity = '1';
    }, 10);
}

function showModal3() {
    var modal3 = document.getElementById('modal3');
    var overlay3 = document.getElementById('overlay3');

    modal3.style.display = 'block';
    overlay3.style.display = 'block';

    setTimeout(function () {
        modal3.style.opacity = '1';
        overlay3.style.opacity = '1';
    }, 10);
}

function hideModal() {
    var modal = document.getElementById('modal');
    var overlay = document.getElementById('overlay');

    modal.style.display = 'none';
    overlay.style.display = 'none';

    var modal2 = document.getElementById('modal2');
    var overlay2 = document.getElementById('overlay2');

    modal2.style.display = 'none';
    overlay2.style.display = 'none';

    var modal3 = document.getElementById('modal3');
    var overlay3 = document.getElementById('overlay3');

    modal3.style.display = 'none';
    overlay3.style.display = 'none';
}


function submitWorkout() {
    var workoutName = document.getElementById('workoutName').value;
    var workoutDay = document.getElementById('workoutDay').value.toLowerCase();
    var workoutTime = document.getElementById('workoutTime').value;
    var workoutPlace = document.getElementById('workoutPlace').value;
    var exerciseCount = document.getElementById('exerciseCount').value;

    if (!workoutName || !workoutDay || !workoutTime || !workoutPlace || !exerciseCount || !exerciseChoice || !setCount) {
        alert('Please fill out all the fields.');
        return;
    }

    var dayInputMap = {
        'monday': 'mondayCalendar',
        'tuesday': 'tuesdayCalendar',
        'wednesday': 'wednesdayCalendar',
        'thursday': 'thursdayCalendar',
        'friday': 'fridayCalendar',
        'saturday': 'saturdayCalendar',
        'sunday': 'sundayCalendar'
    };

    console.log('Selected workout day:', workoutDay);


    if (dayInputMap.hasOwnProperty(workoutDay)) {
        var displayAnswer = document.createElement('div');
        displayAnswer.classList.add('workout-details');
        displayAnswer.innerHTML = `
            <p>Workout Details:</p>
            <p>Name: ${workoutName}</p>
            <p>Time: ${workoutTime}</p>
            <p>Place: ${workoutPlace}</p>
            <p>Exercise Count: ${exerciseCount}</p>
            <p>Exercise Choice: ${exerciseChoice}</p>
            <p>Set Count: ${setCount}</p>
        `;

        var modal2 = document.getElementById('modal2');


        var workoutContainer = document.createElement('div');
        workoutContainer.classList.add('daysCompleted');


        var dayWrap2 = document.createElement('div');
        dayWrap2.classList.add('dayWrap2');


        var dayLogo2 = document.createElement('img');
        dayLogo2.classList.add('dayLogo2');
        dayLogo2.src = "/images/day2_logo.svg";
        dayLogo2.alt = "logo";

        var day2 = document.createElement('p');
        day2.classList.add('day2');
        day2.textContent = workoutDay.charAt(0).toUpperCase() + workoutDay.slice(1);


        dayWrap2.appendChild(dayLogo2);
        dayWrap2.appendChild(day2);


        var informationBox2 = document.createElement('div');
        informationBox2.classList.add('informationBox2');


        var nameWorkoutWrap2 = document.createElement('a');
        nameWorkoutWrap2.classList.add('nameWorkoutWrap2');

        var nameWorkoutLogo2 = document.createElement('img');
        nameWorkoutLogo2.classList.add('nameWorkoutLogo2');
        nameWorkoutLogo2.src = "/images/navigation2_logo.svg";
        nameWorkoutLogo2.alt = "logo";

        var nameWorkout2 = document.createElement('p');
        nameWorkout2.classList.add('nameWorkout2');
        nameWorkout2.textContent = workoutName.charAt(0).toUpperCase() + workoutName.slice(1);


        nameWorkoutWrap2.appendChild(nameWorkoutLogo2);
        nameWorkoutWrap2.appendChild(nameWorkout2);

        var timeWorkout2 = document.createElement('p');
        timeWorkout2.classList.add('timeWorkout2');
        timeWorkout2.textContent = 'Time: ' + workoutTime;

        var placeWorkout2 = document.createElement('p');
        placeWorkout2.classList.add('placeWorkout2');
        placeWorkout2.textContent = 'Place: ' + workoutPlace;

        var countWorkout2 = document.createElement('p');
        countWorkout2.classList.add('countWorkout2');
        countWorkout2.textContent = 'Exercise count: ' + exerciseCount;


        informationBox2.appendChild(nameWorkoutWrap2);
        informationBox2.appendChild(timeWorkout2);
        informationBox2.appendChild(placeWorkout2);
        informationBox2.appendChild(countWorkout2);


        workoutContainer.appendChild(dayWrap2);
        workoutContainer.appendChild(informationBox2);


        modal2.appendChild(workoutContainer);


        modal2.appendChild(document.createElement('br'));;


        var dayInputElement = document.getElementById(dayInputMap[workoutDay]);
        dayInputElement.style.backgroundColor = 'grey';


        var informationBox = document.querySelector('.information');
        informationBox.hidden = false;


        var dayWorkout = document.querySelector('.day');
        dayWorkout.textContent = workoutDay.charAt(0).toUpperCase() + workoutDay.slice(1);


        var dayElement = document.createElement('div');
        dayElement.classList.add('day');
        dayElement.textContent = workoutDay;
        displayAnswer.appendChild(dayElement);


        var nameWorkout = document.querySelector('.nameWorkout');
        nameWorkout.textContent = workoutName.charAt(0).toUpperCase() + workoutName.slice(1);

        var timeWorkout = document.querySelector('.timeWorkout');
        timeWorkout.textContent = 'Time: ' + workoutTime;

        var placeWorkout = document.querySelector('.placeWorkout');
        placeWorkout.textContent = 'Place: ' + workoutPlace;

        var countWorkout = document.querySelector('.countWorkout');
        countWorkout.textContent = 'Exercise count: ' + exerciseCount;

        Object.values(dayInputMap).forEach(function (dayInputId) {
            var dayInputElement = document.getElementById(dayInputId);

            dayInputElement.addEventListener('click', function () {

                var computedStyle = window.getComputedStyle(dayInputElement);
                var backgroundColor = computedStyle.backgroundColor;

                if (backgroundColor === 'rgb(128, 128, 128)' || backgroundColor === 'grey') {
                    informationBox.hidden = false;
                } else if (backgroundColor === 'rgb(255, 255, 255)' || backgroundColor === 'white') {
                    informationBox.hidden = true;
                    hideModal();
                }
            });
        });




    } else {
        console.error('Invalid workout day');
    }

    hideModal();
}

function submitWorkout2() {

    var exerciseChoiceDropdown = document.getElementById('exerciseChoice');

    var trainingInput = document.getElementById("addTraining").value;

    if (trainingInput.trim() === "") {
        alert("Please enter a training type.");
        return;
    }

    var newOption = document.createElement("option");
    newOption.value = trainingInput.charAt(0).toUpperCase() + trainingInput.slice(1);
    newOption.text = trainingInput.charAt(0).toUpperCase() + trainingInput.slice(1);

    exerciseChoiceDropdown.add(newOption);

    document.getElementById("addTraining").value = "";

    hideModal();
}
/* &Mejxo; &Berta; &MrMarcus; &Pkepy */











