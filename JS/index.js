let sidebar = document.getElementById("mySidenav");
var body = document.getElementById("main-body");
var span = document.getElementById("span");

function openNav() {
  document.getElementById("mySidenav").style.width = "16%";
  body.style.marginRight = "16%";
  span.innerHTML = "Hide Side panel >>>";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  body.style.marginRight = "0";
  span.innerHTML = "Show Right Panel<<<";
}

collapsible();
