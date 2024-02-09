
function updateTime(){
    let now = new Date();

    const timeElement = document.querySelector('.time');
    const dateElement = document.querySelector('.date');

    let hours = String(now.getHours()).padStart(2,"0");
    let minutes = String(now.getMinutes()).padStart(2,"0");
    let seconds = String(now.getSeconds()).padStart(2,"0");
    
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;

    const date = now.getDate();
    const year = now.getFullYear();

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ]

    const monthName = months[now.getMonth()];
    const dayName = daysOfWeek[now.getDay()];

    dateElement.textContent = ` ${date}, ${monthName}, ${year}, ${dayName}`;



}
updateTime();

setInterval(() => {
    updateTime()
},1000)