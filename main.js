
// I det program so vi fick av Björn fanns det några buggar som jag försökte uptäcka
// vi sätta Console.Log() där som behövdes. Jag har lagt till en knapp för att kunna 
// spara ändringar på en enastående sida samr ett popup fönster om man väljer minus
//sifra vid input. Jag ska utveckla vidare blogget och kan förklara mer vid behov,
// det här vad en sammanfatning av vad jag har hunnit med.

document.addEventListener("DOMContentLoaded", () => {
  let inputBox = document.querySelector("#input-number");
 
   

    inputBox.addEventListener("input", (event) => {
    
      makeSections(parseInt(event.currentTarget.value));
   
     
    });
  
  });
 
 
 
  

let makeSections = (count) => {
  
  if (count < 0 ) {
    alert("This is an invalid number");
  } else {
  
 
  
    var parent = document.querySelector("main");
  for (var i = 0; i < count; i++) {
    var child = document.createElement("section");
    var title = document.createElement("h4");
    var blurb = document.createElement("p");
    var saveButton = document.createElement("input");
    
    
    
    title.innerText = "Title " + i;
    blurb.innerText = `Write Somethong here to save on your blog!`;
    saveButton.type = 'submit';
    saveButton.value = 'Save';
    saveButton.onclick = "saveBlogg";
   
    
  

    
    console.log(i)
  }
 

  makeEditable(title);
  makeEditable(blurb);
  

  child.append(title);
  child.append(blurb);
  child.append(saveButton);
  parent.append(child);
 
  console.log(child) ;

}
};


let removeLastSection = () => {
  var test_sections = document.querySelectorAll("section");
  
  for ( var i = 0; i < test_sections.length; i++) {
   
    test_sections[i].remove();
  }
};

let makeEditable = (elem) => {
  elem.addEventListener("click", (event) => {
    elem.contentEditable = true;
    elem.focus();
    elem.saveBlogg();
  });
  elem.addEventListener("blur", (event) => {
    elem.contentEditable = false;
  });
};
function saveBlogg(){
  var saveItem = document.getElementById("section").child;
  localStorage.setItem("textvalue", saveItem);
  console.log(saveItem);

}