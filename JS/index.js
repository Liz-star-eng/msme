let sidebar = document.getElementById("mySidenav");
var body = document.getElementById("main-body");
var span = document.getElementById("span");

function openNav() {
 sidebar.style.width = "16%";
 body.style.width = "73%"
 body.style.marginRight = "16%"
 span.innerHTML = "Close Side Panel >>>"
}

function closeNav() {
sidebar.style.width = "0";
  body.style.width = "90%";
  span.innerHTML = "Open Side Panel <<<";
}

