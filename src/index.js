setInterval(function () {
  let dateLondon = document.querySelector("#london .date");
  dateLondon.innerHTML = moment().format("MMMM Do YYYY");

  let timeLondon = document.querySelector("#london .time");
  timeLondon.innerHTML = moment()
    .tz("Europe/London")
    .format("H:mm:ss [<small>]A[</small>]");

  let dateNewyork = document.querySelector("#newYork .date");
  dateNewyork.innerHTML = moment()
    .tz("America/New_York")
    .format("MMMM Do YYYY");

  let timeNewyork = document.querySelector("#newYork .time");
  timeNewyork.innerHTML = moment()
    .tz("America/New_York")
    .format("H:mm:ss [<small>]A[</small>]");
}, 1000);
