const clock = () => {
  const target = document.getElementById("clock");
  // console.log(target.innerHTML);

  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let meridian = "AM";

  //convert time to 12 hour format
  if (hours == 0) {
    hours = 12;
  } else if (hours > 12) {
    hours = hours - 12;
    meridian = "PM";
  }

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  let time = `${hours}:${minutes} ${meridian} `;
  console.log(time);
  setInterval(clock, 1000);

  target.innerText = time;
  // console.log(time);
};

clock();
