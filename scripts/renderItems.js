const windowBody = document.querySelector(".window__container__body");
const binBlock = `  <div class="explorer__window">
                <div class="explorer__window--left">
                  <ul class="explorer__window--left--mydocs">
                    <li></li>
                    <li><img src="./images/sys32.png" alt=""> System32 </li>
                    <li> <img src="./images/familypic.png" alt="" /> Drunk Selfie</li>
                    <li><img src="./images/worddoc.png" alt=""> Assignment </li>

                  </ul>
                </div>
                <div class="explorer__window--right"></div>
              </div>`;
const documentBlock = ` <div class="explorer__window">
  <div class="explorer__window--left">
    <ul class="explorer__window--left--mydocs">
      <li id="puppy" class="imgClick">
        <img src="./images/familypic.png" alt="" /> Puppy
      </li>
      <li id="ny" class="imgClick">
        <img src="./images/familypic.png" alt="" /> New York
      </li>
      <li id="hw" class="imgClick">
        <img src="./images/worddoc.png" alt="" /> Homework
      </li>
    </ul>
  </div>
  <div class="explorer__window--right">
    <img class="previewContainer" id="preview" src="./images/ny.jpeg" alt="" />
  </div>
</div>`;

export const renderItems = (id) => {
  switch (id) {
    case "bin":
      clearWindow();
      windowBody.innerHTML = binBlock;
      customElement(windowBody, "div", "", "explorerDiv");

      break;
    case "mycomputer":
      clearWindow();
      break;
    case "ie":
      clearWindow();
      customElement(
        windowBody,
        "iframe",
        "https://askjeeves.net/",
        "windowIframe"
      );
      break;
    case ("mydocs", "documents"):
      windowBody.innerHTML = documentBlock;
      let previewFile = document.querySelectorAll(".imgClick");
      let previewContainer = document.querySelector(".previewContainer");

      previewFile.forEach((ele) => {
        ele.addEventListener("click", () => {
          let imgpath = ele.id;
          previewContainer.style.display = "flex";
          previewContainer.src = `./images/${imgpath}.jpeg`;
        });
      });

      break;

    case "notepad":
      clearWindow();
      customElement(windowBody, "textArea", "", "notepad__TextArea");
      const textArea = document.querySelector(".notepad__TextArea");
      textArea.style.width = "100%";
      textArea.style.height = "100%";
      textArea.style.resize = "none";

      break;
    case "resume":
      clearWindow();
      customElement(
        windowBody,
        "iframe",
        "https://www.linkedin.com/in/paramsinghau/",
        "windowIframe"
      );
      break;
    case "github":
      clearWindow();
      customElement(
        windowBody,
        "iframe",
        "https://github.com/paramSingh1",
        "windowIframe"
      );
      break;
    case "minesweeper":
      clearWindow();
      customElement(
        windowBody,
        "iframe",
        "https://minesweeper.online/",
        "windowIframe"
      );
      break;
    default:
  }
};
export const customElement = (parent, eleType, srcLink, className) => {
  const newElement = document.createElement(`${eleType}`);
  newElement.src = "";
  newElement.src = srcLink;
  newElement.classList.add(`${className}`);
  parent.appendChild(newElement);
};

export const clearWindow = () => {
  windowBody.innerHTML = "";
};
