document.addEventListener("DOMContentLoaded", () => {
    let inputBox = document.querySelector("#input-number");
  
    inputBox.addEventListener("input", (event) => {
      removeAllSections();
      makeSections(parseInt(event.currentTarget.value));
    });
  });
  
  let makeSections = (count) => {
    for (var i = 0; i < count; i++) {
      var parent = document.querySelector("main");
  
      var child = document.createElement("section");
      var title = document.createElement("h4");
      var blurb = document.createElement("p");
  
      title.innerText = "Title " + i;
      blurb.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Inventore harum, quasi dicta ex totam quisquam quo tempore maxime, 
        commodi praesentium eius quod suscipit! 
        Tenetur magnam eligendi amet fugiat adipisci impedit.`;
  
      makeEditable(title);
      makeEditable(blurb);
  
      child.append(title);
      child.append(blurb);
      parent.append(child);
    }
  };
  
  let removeAllSections = () => {
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
      elem.contentEditable = false;
    });
  };