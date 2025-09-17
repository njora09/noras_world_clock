function updateTime() {
  let icelandElement = document.querySelector("#iceland");

  if (icelandElement) {
    let dateIceland = document.querySelector("#iceland .date");
    dateIceland.innerHTML = moment().format("MMMM Do YYYY");

    let timeIceland = document.querySelector("#iceland .time");
    timeIceland.innerHTML = moment()
      .tz("Iceland")
      .format("H:mm:ss [<small>]A[</small>]");
  }

  let hongkongElement = document.querySelector("#hongkong");
  if (hongkongElement) {
    let dateHongkong = document.querySelector("#hongkong .date");
    dateHongkong.innerHTML = moment().tz("Hongkong").format("MMMM Do YYYY");

    let timeHongkong = document.querySelector("#hongkong .time");
    timeHongkong.innerHTML = moment()
      .tz("Hongkong")
      .format("H:mm:ss [<small>]A[</small>]");
  }
}

function updateCity(event) {
  let cityTimezone = event.target.value;
  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }
  let cityDate = moment().tz(cityTimezone).format("MMMM Do YYYY");
  let cityTime = moment()
    .tz(cityTimezone)
    .format("H:mm:ss [<small>]A[</small>]");
  city = cityTimezone.replace("_", " ").split("/")[1];
  let cities = document.querySelector("#cities");
  cities.innerHTML = `
  <div class="clocks">
          <div>
            <h2>${city}</h2>
            <div class="date">${cityDate}</div>
          </div>

          <div class="time">${cityTime}</div>
        </div>
         <a href="/" style="font-size: 8px">Back to all cities</a>
        `;
}
updateTime();
setInterval(updateTime, 1000);

let cityElement = document.querySelector("#city");
cityElement.addEventListener("change", updateCity);
