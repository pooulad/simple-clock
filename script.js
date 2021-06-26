let clock = () => {
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amorpm = hours > 12 ? "pm" : "am";

    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("amorpm").innerHTML = amorpm;

    setTimeout(clock,1000);
}
clock();