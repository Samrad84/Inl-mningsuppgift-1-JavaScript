// För att undvika buggar har jag försökt att inte använda globala variabler och funktioner har deklarerads som let vilket är det bästa för att undvika buggar.
// Jag sätta Console.Log() där som behövdes för att se va är det för output och via dubugging satt ett
// ett breack point för att undvika mistak i koden.
//Jag har också använt "use strict" i min Js kod för att undvika errors.

"use strict";
document.addEventListener("DOMContentLoaded", () => {
  let inputBox = document.querySelector("#input-number");

  inputBox.addEventListener("input", (event) => {
    makeSections(parseInt(event.currentTarget.value));
  });
});

let makeSections = (count) => {
  if (count < 0) {
    alert("This is an invalid number");
  } else {
    let parent = document.querySelector("main");
    for (var i = 0; i < count; i++) {
      var child = document.createElement("section");
      var title = document.createElement("h4");
      var blurb = document.createElement("p");
      //Här manipulerar jag DOM genom att skapa ett knapp (element) i main 
      //dessutom ger jag dem egenskaper som behövs via JS för att ändra i HTML.
      var saveButton = document.createElement("input");

      title.innerText = "Title " + i;
      blurb.innerText = `Write Somethong here to save on your blog!`;
      saveButton.type = "submit";
      saveButton.value = "Save";
    }

    makeEditable(title);
    makeEditable(blurb);

    child.append(title);
    child.append(blurb);
    child.append(saveButton);
    parent.append(child);
  }
};

let removeLastSection = () => {
  var test_sections = document.querySelectorAll("section");

  for (var i = 0; i < test_sections.length; i++) {
    test_sections[i].remove();
  }
};

let makeEditable = (elem) => {
  elem.addEventListener("click", (event) => {
    elem.contentEditable = true;
    elem.focus();
  });
  elem.addEventListener("blur", (event) => {
    // Här försöker jag minipulera DOM via ett eventhandler då 
    //varje gång användare skriver något läggs till texten i Localstorage och
    // med knappen sparar man den nya outputen i en ny siad.
    let saveButton = document.querySelector("input");
    elem.contentEditable = false;
    saveButton.onclick = saveBlogg(elem);

    console.log(elem.innerText);
  });
};
function saveBlogg(i) {
  document.getElementById(i);
  localStorage.setItem("textvalue", i.innerText);
}
