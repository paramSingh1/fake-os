const startBtn = document.querySelector(".start");
const menuDisplay = document.querySelector(".startMenu__modal");

startBtn.addEventListener("click", () => {
  if (menuDisplay.style.display === "flex") {
    menuDisplay.style.display = "none";
  } else {
    menuDisplay.style.display = "flex";
  }
});

const desktop = document.querySelector(".desktop__container");
const taskbar = document.querySelector(".taskbar__container");

// Event listener to close start menu if user clicks on the desktop
desktop.addEventListener("click", () => {
  if (menuDisplay.style.display === "flex") {
    menuDisplay.style.display = "none";
  }
});

console.log(startBtn);

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
  // CHANGE THIS VALUE BACK TO 1000
  setInterval(clock, 100000);

  target.innerText = time;
  // console.log(time);
};

//Add close button event listener.
// turn this into a function
const closeBtn = document.querySelector(".close");
const windowContainer = document.querySelector(".window__container");
const taskbarProgram = document.querySelector(".openProgram__container");

closeBtn.addEventListener("click", () => {
  if (windowContainer.style.display === "flex") {
    console.log(windowContainer.style.display);
    windowContainer.style.display = "none";
    taskbarProgram.style.display = "none";
  } else {
    windowContainer.style.display = "flex";
    taskbarProgram.style.display = "flex";
  }
});

const addItemToTaskbar = (itemID, name) => {
  const program = document.querySelector(".openProgram__container");
  const programIcon = document.querySelector(".openProgram__container--img");
  const programName = document.querySelector(".openProgram__container--name");

  program.style.display = "flex";
  programIcon.src = `./images/${itemID}.png`;
  programName.innerText = name;
};

const openWindow = (container) => {
  // Set the name of the program onto the top of the window.
  let programName = document.querySelector(".window__container--topbar--name");
  windowContainer.style.display = "flex";
  const childElements = container.childNodes[3].innerText;
  const id = container.childNodes[1].id;
  console.log(container);

  programName.innerText = childElements;

  // display the item in the task bar
  addItemToTaskbar(id, programName.innerText);
};

const desktopIcons = document.querySelectorAll(".icon__container__icons");
desktopIcons.forEach((ele) =>
  ele.addEventListener("dblclick", () => {
    openWindow(ele);
  })
);
// desktopIcons.forEach((ele) => {
//   ele.addEventListener("click", () => {
//     console.log(ele.style);
//     ele.style.border = "1px dashed grey";
//   });
// });

const StartMenuItem = document.querySelectorAll(
  ".startMenu__modal--right--item"
);

StartMenuItem.forEach((ele) => {
  ele.addEventListener("click", () => {
    windowContainer.style.display = "flex";
    let itemID = ele.childNodes[1].id;
    let displayName = ele.childNodes[3].innerText;
    console.log(itemID);
    openWindow(ele);
    addItemToTaskbar(itemID, displayName);
  });
});
console.log(desktopIcons);
clock();
