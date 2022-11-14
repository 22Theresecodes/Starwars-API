const myWebApi = async () => {
  const response = await fetch("https://swapi.dev/api/people");
  const data = await response.json();

  for (const i in data.results) {
    const listEl = document.querySelector(`.list${i}`);
    const newEl = document.createElement("div");
    newEl.innerHTML = `
    <button class="list-child" id="list-child${i}" onclick="clickHandler(${i})">
    <p>${data.results[i].name}</p> </button>
    
    <div class="hide-details" id="clickhide${i}" onclick="clickHandler(${i})">
    <p>Name:${data.results[i].name}</p>
    <p>Gender:${data.results[i].gender}</p>
    <p>Height:${data.results[i].height}</p>
    </div>
    `;
    listEl.appendChild(newEl);
  }
  return true;
};

myWebApi();

const clickHandler = (id) => {
  const btnEl = document.querySelector(`#list-child${id}`);
  const btnEl2= document.querySelector(`#clickhide${id}`);

  if (btnEl.style.visibility === "visible") {
    btnEl.style.visibility = "hidden";
    btnEl2.style.visibility = "visible"
  } else {
    btnEl.style.visibility = "visible";
    btnEl2.style.visibility =  "hidden"
  }
};
