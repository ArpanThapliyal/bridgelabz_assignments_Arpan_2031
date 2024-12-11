//getting :-

// getting html element using id
document.getElementById("fpara");
// getting html element using class
document.getElementsByClassName("textmatter");
// getting html element using tag name
document.getElementsByTagName("p");
// getting html element using querryselector(select 1st occuring only)
document.querySelector("#fpara");
// getting html element using querryselector(select all occurences)
document.querySelectorAll(".textmatter");
// getting html element using querryselector(giving tag as argument)
document.querySelectorAll("p");
// ___________________________________________________________

// updating :-

let head = document.getElementById("heading");
// getting tag's name using tagname
head.tagName;
// changing using innerHTML
head.innerHTML = "kesan ba";
//changing using textcontent
head.textContent; //(it will show the way it is written in html code
                  // with all the next line and tab spaces)
//changing using innertext
head.innerText;  //(it will show the way it will be printed in browser);            




