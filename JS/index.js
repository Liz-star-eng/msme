function openNav() {
  document.getElementById("mySidenav").style.width = "16%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

let sidebar = document.getElementById("mySidenav");
var body = document.getElementById("main-body");
var span = document.getElementById("span");

function collapsible() {
  if ((sidebar.style.width = "16%")) {
    body.style.marginRight = "16%";
    span.innerHTML = "Hide Side panel >>>"
  }  else {
      body.style.marginight = "0";
      span.innerHTML = "Show Right side<<<"
  }
}


//DROPDOWN
const content = document.getElementById("a")
a.style.backgroundColor = 'white';
tippy("#dropdown", {
  content: a.innerHTML,
  allowHTML: true,
  placement: "bottom",
  animation: "fade",
  interactive: true,
 theme: 'light',
});

  // collapsible();
