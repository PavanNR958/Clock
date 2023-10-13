function displayClock() {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var meridiem = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;
    var timeString = hour + ":" + minute + ":" + second + " " + meridiem;

    var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var day = weekday[now.getDay()];
    var date = now.getDate();
    var year = now.getFullYear();
    var dateString = day + ", " + month[now.getMonth()] + " " + date + ", " + year;

    var clockElement = document.getElementById("clock");
    clockElement.innerHTML = dateString + "<br>" + timeString;
}

setInterval(displayClock, 1000);

document.addEventListener("DOMContentLoaded", function () {
    const timeDisplay = document.getElementById("time");
    const speakButton = document.getElementById("speak-button");

    function getTime() {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes();
        let ampm = "AM";

        if (hours >= 12) {
            ampm = "PM";
        }

        if (hours > 12) {
            hours -= 12;
        } else if (hours === 0) {
            hours = 12;
        }

        const timeString = ` ${hours} : ${minutes} : ${ampm}`;
        return timeString;
    }

    function speakTime() {
        const timeString = getTime();
        const speech = new SpeechSynthesisUtterance(timeString);
        window.speechSynthesis.speak(speech);
    }

    speakButton.addEventListener("click", speakTime);
});

document.addEventListener("DOMContentLoaded", function () {
    const dateDisplay = document.getElementById("date");
    const speakButton = document.getElementById("speak-button");

    function getDate() {
        const now = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const dateString = now.toLocaleDateString(undefined, options);
        return dateString;
    }

    function speakDate() {
        const dateString = getDate();
        const speech = new SpeechSynthesisUtterance(dateString);
        window.speechSynthesis.speak(speech);
    }

    speakButton.addEventListener("click", speakDate);

});
