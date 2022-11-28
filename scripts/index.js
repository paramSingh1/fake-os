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
const windowBody = document.querySelector(".window__container__body");

const renderItems = (id) => {
  clearWindow();

  switch (id) {
    case "bin":
      console.log("bin", id);

      customElement(windowBody, "div", "", explorerDiv);

      console.log("ok");
      break;

    case "ie":
      customElement(
        windowBody,
        "iframe",
        "https://askjeeves.net/",
        "windowIframe"
      );
      break;
    case "mydocs":
      console.log("hi", id);
      break;

    case "notepad":
      console.log("clicked on", id);
      customElement(windowBody, "textArea", "", "notepad__TextArea");
      const textArea = document.querySelector(".notepad__TextArea");
      textArea.style.width = "100%";
      textArea.style.height = "100%";
      textArea.style.resize = "none";

      break;
    case "resume":
      customElement(
        windowBody,
        "iframe",
        "https://www.linkedin.com/in/paramsinghau/",
        "windowIframe"
      );
      break;
    case "github":
      customElement(
        windowBody,
        "iframe",
        "https://github.com/paramSingh1",
        "windowIframe"
      );
      break;
    case "minesweeper":
      customElement(
        windowBody,
        "iframe",
        "https://minesweeper.online/",
        "windowIframe"
      );
      break;
    default:
      console.log(id);
  }
};
const customElement = (parent, eleType, srcLink, className) => {
  console.log(parent);
  const newElement = document.createElement(`${eleType}`);
  console.log(newElement);
  newElement.src = "";
  newElement.src = srcLink;
  newElement.classList.add(`${className}`);
  parent.appendChild(newElement);
};
const clearWindow = () => {
  windowBody.innerHTML = "";
};
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
  setInterval(clock, 1000);

  target.innerText = time;
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

  programName.innerText = childElements;

  // display the item in the task bar
  addItemToTaskbar(id, programName.innerText);
};

const desktopIcons = document.querySelectorAll(".icon__container__icons");
const singledesktopIcons = document.querySelector(".icon__container__icons");

desktopIcons.forEach((ele) =>
  ele.addEventListener("dblclick", () => {
    openWindow(ele);
    renderItems(ele.childNodes[1].id);
  })
);

const removeIconBorders = () => {
  console.log(desktopIcons);
  desktopIcons.forEach((ele) => {
    ele.style.border = "0px solid white";
  });
};
desktopIcons.forEach((ele) => {
  ele.addEventListener("click", () => {
    removeIconBorders();
    ele.style.border = "1px dashed grey";
  });
});

const StartMenuItem = document.querySelectorAll(
  ".startMenu__modal--right--item"
);

StartMenuItem.forEach((ele) => {
  ele.addEventListener("click", () => {
    windowContainer.style.display = "flex";
    let itemID = ele.childNodes[1].id;
    let displayName = ele.childNodes[3].innerText;
    menuDisplay.style.display = "none";
    renderItems(itemID);
    openWindow(ele);
    addItemToTaskbar(itemID, displayName);
  });
});
clock();
