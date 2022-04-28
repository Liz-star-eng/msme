function openNav() {
  document.getElementById("mySidenav").style.width = "16%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

let sidebar = document.getElementById("mySidenav");
var body = document.getElementById("main-body");

function collapsible() {
  if ((sidebar.style.width = "16%")) {
    body.style.marginRight = "16%";
  }  else {
      body.style.marginRight = "0";
  }
}
